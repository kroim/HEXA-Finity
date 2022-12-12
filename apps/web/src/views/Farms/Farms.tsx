import { useEffect, useCallback, useState, useMemo, useRef, createContext } from 'react'
import BigNumber from 'bignumber.js'
import { ChainId } from '@pancakeswap/sdk'
import { useAccount } from 'wagmi'
import {
  Image,
  Heading,
  Toggle,
  Text,
  Button,
  ArrowForwardIcon,
  Flex,
  Link,
  Box,
  Farm as FarmUI,
  Loading,
  SearchInput,
  Select,
  OptionProps,
  FlexLayout,
  PageHeader,
  NextLinkFromReactRouter,
  Row,
  ButtonMenu,
  ButtonMenuItem,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useFarms, usePollFarmsWithUserData, usePriceCakeBusd } from 'state/farms/hooks'
import { useCakeVaultUserData } from 'state/pools/hooks'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { DeserializedFarm } from '@pancakeswap/farms'
import { useTranslation } from '@pancakeswap/localization'
import { getFarmApr } from 'utils/apr'
import orderBy from 'lodash/orderBy'
import { latinise } from 'utils/latinise'
import { useUserFarmStakedOnly, useUserFarmsViewMode } from 'state/user/hooks'
import { ViewMode } from 'state/user/actions'
import { useRouter } from 'next/router'
import ToggleView from 'components/ToggleView/ToggleView'
import { useActiveChainId } from 'hooks/useActiveChainId'
import Table from './components/FarmTable/FarmTable'
import { FarmWithStakedValue } from './components/types'
import HeroSection from './components/HeroSection'
import PageSection from 'components/PageSection'
import Container from 'components/Layout/Container'
import ChooseUs from './components/ChooseUs'

const FarmsPage = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
`
const FarmsWrapper1 = styled.div`
  width: 100%;
  background: #ecf1ff;
`
const FarmsWrapper2 = styled.div`
  width: 100%;
  background: #dae4ff;
  padding-top: 30px;
  padding-bottom: 30px;
`
const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px 0;    
    margin-bottom: 0;
  }
`
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`
const SearchWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
  width: 160px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 220px;
  }
`
const StyledSearchInput = styled(SearchInput)`
  font-size: 12px;
  height: 40px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 14px;
    height: 50px;
  }
`
const FilterSelect = styled(Select)`
  width: 90px;
  min-width: 90px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 117px;
    min-width: 117px;
  }
`
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`
const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`
const HarvestButton = styled(Button)`
  background: #aabef0;
  width: 117px;
  height: 40px;
  color: #041647;
  margin-left: 15px;
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 14px;
  }
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  padding: 0;
`
const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`
const FinishedTextContainer = styled(Flex)`
  padding-bottom: 32px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`
const FinishedTextLink = styled(Link)`
  font-weight: 400;
  white-space: nowrap;
  text-decoration: underline;
`
const LunchSection = styled.div`
  width: 100%;
  align-items: center;
  grid-gap: 15px;
  display: grid;
  grid-template-columns: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 60% 30%;
    padding-top: 70px;
    padding-bottom: 50px;
  }
`
const LunchLeftArea = styled.div`
  line-height: 1.2;
  z-index: 20;
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 39px;
    color: #000000;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 26px;
    color: #061e63;
    margin-top: 12px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 16px;
    }
  }
`
const LunchRightArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  flex: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 52px;    
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`
const ChooseSection = styled.div`
  margin-top: 0;
`
const StyledButtonMenu = styled(ButtonMenu)`
  display: flex;
  flex-wrap: wrap;
`
const NUMBER_OF_FARMS_VISIBLE = 12

const Farms: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname, query: urlQuery } = useRouter()
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const { data: farmsLP, userDataLoaded, poolLength, regularCakePerBlock } = useFarms()
  const cakePrice = usePriceCakeBusd()

  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query

  const [viewMode, setViewMode] = useUserFarmsViewMode()
  const { address: account } = useAccount()
  const [sortOption, setSortOption] = useState('all')
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const chosenFarmsLength = useRef(0)

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived
  const [farmsIndex, setFarmsIndex] = useState(0)

  const handleFarmsClick = (newIndex: any) => setFarmsIndex(newIndex)

  useCakeVaultUserData()

  usePollFarmsWithUserData()

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded
  const userDataReady = !account || (!!account && userDataLoaded)

  const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(isActive)
  const [boostedOnly, setBoostedOnly] = useState(false)

  const activeFarms = farmsLP.filter(
    (farm) => farm.pid !== 0 && farm.multiplier !== '0X' && (!poolLength || poolLength > farm.pid),
  )
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const archivedFarms = farmsLP

  const stakedOnlyFarms = activeFarms.filter(
    (farm) =>
      farm.userData &&
      (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
        new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) =>
      farm.userData &&
      (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
        new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  )

  const stakedArchivedFarms = archivedFarms.filter(
    (farm) =>
      farm.userData &&
      (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
        new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  )

  const farmsList = useCallback(
    (farmsToDisplay: DeserializedFarm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteTokenPriceBusd) {
          return farm
        }

        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceBusd)
        const { cakeRewardsApr, lpRewardsApr } = isActive
          ? getFarmApr(
              chainId,
              new BigNumber(farm.poolWeight),
              cakePrice,
              totalLiquidity,
              farm.lpAddress,
              regularCakePerBlock,
            )
          : { cakeRewardsApr: 0, lpRewardsApr: 0 }

        return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }

      return farmsToDisplayWithAPR
    },
    [query, isActive, chainId, cakePrice, regularCakePerBlock],
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)

  const chosenFarms = useMemo(() => {
    let chosenFs = []
    if (isActive) {
      chosenFs = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
    }
    if (isInactive) {
      chosenFs = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
    }
    if (isArchived) {
      chosenFs = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms)
    }

    if (boostedOnly) {
      chosenFs = chosenFs.filter((f) => f.boosted)
    }

    return chosenFs
  }, [
    activeFarms,
    farmsList,
    inactiveFarms,
    archivedFarms,
    isActive,
    isInactive,
    isArchived,
    stakedArchivedFarms,
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    boostedOnly,
  ])

  const chosenFarmsMemoized = useMemo(() => {
    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apr':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apr + farm.lpRewardsApr, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earned':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc',
          )
        case 'liquidity':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        case 'latest':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.pid), 'desc')
        default:
          return farms
      }
    }

    return sortFarms(chosenFarms).slice(0, numberOfFarmsVisible)
  }, [chosenFarms, sortOption, numberOfFarmsVisible])

  chosenFarmsLength.current = chosenFarmsMemoized.length

  useEffect(() => {
    if (isIntersecting) {
      setNumberOfFarmsVisible((farmsCurrentlyVisible) => {
        if (farmsCurrentlyVisible <= chosenFarmsLength.current) {
          return farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE
        }
        return farmsCurrentlyVisible
      })
    }
  }, [isIntersecting])

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  return (
    <FarmsContext.Provider value={{ chosenFarmsMemoized }}>
      <HeroSection />
      <FarmsPage px={['16px', '24px']}>
        <FarmsWrapper1>
          <Container>
            <ControlContainer>
              <ViewControls>
                {/* <FarmUI.FarmTabButtons hasStakeInFinishedFarms={stakedInactiveFarms.length > 0} /> */}
                <StyledButtonMenu activeIndex={farmsIndex} onItemClick={handleFarmsClick}>
                  <ButtonMenuItem>Live</ButtonMenuItem>
                  <ButtonMenuItem>Main</ButtonMenuItem>
                  <ButtonMenuItem>Innovation</ButtonMenuItem>
                  <ButtonMenuItem>GameFi</ButtonMenuItem>
                  <ButtonMenuItem>Archive</ButtonMenuItem>
                </StyledButtonMenu>
                <ToggleWrapper>
                  <Toggle
                    id="staked-only-farms"
                    checked={stakedOnly}
                    onChange={() => setStakedOnly(!stakedOnly)}
                    scale="sm"
                  />
                  <Text> {t('Staked only')}</Text>
                </ToggleWrapper>
              </ViewControls>
              <FilterContainer>
                <SearchWrapper style={{ marginRight: 15 }}>
                  <StyledSearchInput
                    initialValue={normalizedUrlSearch}
                    onChange={handleChangeQuery}
                    placeholder="Search Farms"
                  />
                </SearchWrapper>
                <FilterSelect
                  options={[
                    {
                      label: t('All'),
                      value: 'all',
                    },
                    {
                      label: t('Hot'),
                      value: 'hot',
                    },
                    {
                      label: t('APR'),
                      value: 'apr',
                    },
                    {
                      label: t('Multiplier'),
                      value: 'multiplier',
                    },
                    {
                      label: t('Earned'),
                      value: 'earned',
                    },
                    {
                      label: t('Liquidity'),
                      value: 'liquidity',
                    },
                    {
                      label: t('Latest'),
                      value: 'latest',
                    },
                  ]}
                  onOptionChange={handleSortOptionChange}
                />
                <HarvestButton>Harvest all</HarvestButton>
              </FilterContainer>
            </ControlContainer>
            {isInactive && (
              <FinishedTextContainer>
                <Text fontSize={['16px', null, '20px']} color="failure" pr="4px">
                  {t("Don't see the farm you are staking?")}
                </Text>
                <Flex>
                  <FinishedTextLink href="/migration" fontSize={['16px', null, '20px']} color="failure">
                    {t('Go to migration page')}
                  </FinishedTextLink>
                  <Text fontSize={['16px', null, '20px']} color="failure" padding="0px 4px">
                    or
                  </Text>
                  <FinishedTextLink
                    external
                    color="failure"
                    fontSize={['16px', null, '20px']}
                    href="https://v1-farms.pancakeswap.finance/farms/history"
                  >
                    {t('check out v1 farms')}.
                  </FinishedTextLink>
                </Flex>
              </FinishedTextContainer>
            )}
            {viewMode === ViewMode.TABLE ? (
              <Table farms={chosenFarmsMemoized} cakePrice={cakePrice} userDataReady={userDataReady} />
            ) : (
              <FlexLayout>{children}</FlexLayout>
            )}
            {account && !userDataLoaded && stakedOnly && (
              <Flex justifyContent="center">
                <Loading />
              </Flex>
            )}
            {poolLength && <div ref={observerRef} />}
            <LunchSection>
              <LunchLeftArea>
                <h2>Launch Your Project on Hexa Finity!</h2>
                <p>
                  Farms stimulate users to provide liquidity for your trading pair by distributing HEXA tokens to your
                  pair’s LP token holders. Launchpool is a platform where a project owner can distribute tokens to BNB
                  users who stake HEXA tokens in the pool. When a project applies for Hexa Finity Launchpool we can also
                  create a new farming pair (subject to discussion). Hexa Finity Launchpool and Farms are platforms that
                  help project teams promote their token and get exposure to thousands of active Hexa Finity users
                  across the globe. We look for strong teams with clear and innovative vision in the crypto space. If
                  you think you are one of the projects, do not wait any longer and apply below.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <Button style={{ width: '199px', height: '54px', background: '#F93B5D' }}>
                    <Text color="invertedContrast" bold fontSize="16px" mr="10px">
                      {t('Apply to Lunch')}
                    </Text>
                    <Image src="/images/farms/lunch.png" alt="lunch" width={14} height={14} />
                  </Button>
                </div>
              </LunchLeftArea>
              <LunchRightArea>
                <img src="/images/farms/lunch-image.png" alt="perpetual" />
              </LunchRightArea>
            </LunchSection>
          </Container>
        </FarmsWrapper1>
        <FarmsWrapper2>
          <Page style={{}}>
            <ChooseSection>
              <ChooseUs />
            </ChooseSection>
          </Page>
        </FarmsWrapper2>
      </FarmsPage>
    </FarmsContext.Provider>
  )
}

export const FarmsContext = createContext({ chosenFarmsMemoized: [] })

export default Farms
