import { useEffect, useCallback, useState, useMemo, useRef, createContext } from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import {
  Loading,
  FlexLayout,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useAccount } from 'wagmi'
import { ChainId } from '@pancakeswap/sdk'
import { useCakeVaultUserData } from 'state/pools/hooks'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useFarms, usePollFarmsWithUserData, usePriceCakeBusd } from 'state/farms/hooks'
import { useUserFarmStakedOnly, useUserFarmsViewMode } from 'state/user/hooks'
import { ViewMode } from 'state/user/actions'
import { useRouter } from 'next/router'
import { getFarmApr } from 'utils/apr'
import { latinise } from 'utils/latinise'
import styled from 'styled-components'
import type { DeserializedFarm } from '@pancakeswap/farms'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from './types'

import Table from './Farms/components/FarmTable/FarmTable'
import Farms from './Farms/Farms'
import CollectWinningsOverlay from 'views/Predictions/components/RoundCard/CollectWinningsOverlay'

const MainArea = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 1070px) {
    flex-direction: column;
  }
`
const ItemArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 134px;
  border-radius: 12px;
  background-color: #041647;
  width: 49.5%;
  padding: 20px;
  @media screen and (max-width: 1070px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
const LeftIteam = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    max-width: 190px;
    font-weight: 300;
    line-height: 1.3;
    margin-left: 10px;
  }
  img {
    width: 50px;
  }
  p {
    font-size: 16px;
    color: white;
  }
  h2 {
    font-size: 24px;
    color: #f3ba2f;
    font-weight: 400;
  }
  @media screen and (max-width: 560px) {
    img {
      width: 40px;
    }
    p {
      font-size: 12px;
      color: white;
    }
    h2 {
      font-size: 16px;
      color: #f3ba2f;
      font-weight: 400;
    }
  }
`
const RightIteam = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  width: 100%;
  img {
    width: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    line-height: 1.3;
    margin-left: 10px;
  }
  p {
    font-size: 16px;
    color: white;
    margin-bottom: 5px;
    max-width: 190px;
  }
  h2 {
    font-size: 26px;
    color: white;
    font-weight: 500;
    letter-spacing: 0px;
  }
  @media screen and (max-width: 560px) {
    img {
      width: 35px;
    }
    p {
      font-size: 12px;
      color: white;
    }
    h2 {
      font-size: 16px;
      color: #f3ba2f;
      font-weight: 400;
    }
  }
`

const FarmsPoolsTables: React.FC<React.PropsWithChildren> = () => {
  const { pathname, query: urlQuery } = useRouter()
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const cakePrice = usePriceCakeBusd()
  const { address: account } = useAccount()
  const { data: farmsLP, userDataLoaded, poolLength, regularCakePerBlock } = useFarms()

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  const userDataReady = !account || (!!account && userDataLoaded)

  const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(isActive)

  console.log('_____________farmsLP111', farmsLP)
  // const activeFarms = farmsLP.filter(
  //   (farm) => farm.pid !== 0 && farm.multiplier !== '0X' && (!poolLength || poolLength > farm.pid),
  // )
  // const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  // const archivedFarms = farmsLP

  // const stakedOnlyFarms = activeFarms.filter(
  //   (farm) =>
  //     farm.userData &&
  //     (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
  //       new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  // )

  // const stakedInactiveFarms = inactiveFarms.filter(
  //   (farm) =>
  //     farm.userData &&
  //     (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
  //       new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  // )

  // const stakedArchivedFarms = archivedFarms.filter(
  //   (farm) =>
  //     farm.userData &&
  //     (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
  //       new BigNumber(farm.userData.proxy?.stakedBalance).isGreaterThan(0)),
  // )

  // const farmsList = useCallback(
  //   (farmsToDisplay: DeserializedFarm[]): FarmWithStakedValue[] => {
  //     console.log('___________________farmsToDisplay111', farmsToDisplay)
  //     let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
  //       if (!farm.lpTotalInQuoteToken || !farm.quoteTokenPriceBusd) {
  //         return farm
  //       }

  //       const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceBusd)
  //       const { cakeRewardsApr, lpRewardsApr } = isActive
  //         ? getFarmApr(
  //             chainId,
  //             new BigNumber(farm.poolWeight),
  //             cakePrice,
  //             totalLiquidity,
  //             farm.lpAddress,
  //             regularCakePerBlock,
  //           )
  //         : { cakeRewardsApr: 0, lpRewardsApr: 0 }

  //       return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
  //     })

  //     console.log('______________farmsToDisplayWithAPR', farmsToDisplayWithAPR)
  //     return farmsToDisplayWithAPR
  //   },
  //   [chainId, cakePrice, regularCakePerBlock],
  // )

  // const chosenFarms: FarmWithStakedValue[] = useMemo(() => {
  //   let chosenFs: FarmWithStakedValue[] = []
  //   if (isActive) {
  //     chosenFs = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
  //   }
  //   if (isInactive) {
  //     chosenFs = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
  //   }
  //   if (isArchived) {
  //     chosenFs = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms)
  //   }
  //   console.log('________________', chosenFs);
  //   return chosenFs
  // }, [
  //   farmsList,

  // ])

  return (
    <MainArea>
      <ItemArea>
        {/* <Table farms={chosenFarms} cakePrice={cakePrice} userDataReady={userDataReady} /> */}
        <Farms />
        {account && !userDataLoaded && stakedOnly && (
          <Flex justifyContent="center">
            <Loading />
          </Flex>
        )}
      </ItemArea>
      <ItemArea style={{ backgroundColor: '#2F4DA0' }}>
        <RightIteam>
          <img src="/images/binanceImage.png" alt="lastesFeeImage" />
          <div>
            <p>Total Value Locked</p>
            <h2>$948 561 357</h2>
          </div>
        </RightIteam>
        <RightIteam>
          <div>
            <p>Total Trading Volume</p>
            <h2>$47721756347</h2>
          </div>
        </RightIteam>
      </ItemArea>
    </MainArea>
  )
}

export const FarmsContext = createContext({ chosenFarms: [] })

export default FarmsPoolsTables
