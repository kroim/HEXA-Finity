import { Flex, Heading, Skeleton, Text, Balance } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { ArrowForwardIcon, RowType } from '@pancakeswap/uikit'

const BenefitTotalPage = styled.div`
  background-color: #DAE4FF;
  border-radius: 20px;
  padding 24px 0 40px; 
  margin-top: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(5, auto);
  grid-template-areas:
    'a d b e c';

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-areas:
      'a b c d e';
    grid-gap: 32px;
    grid-template-columns: repeat(5, auto);
  }
`

const ItemTitle = styled.div`
  text-align: center;
  font-size: 14px;
  color: #798DC6;
  font-weight: 400;
  margin-bottom: 10px;
`

const ItemValue = styled.div`
  text-align: center;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`

const ItemImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
 
`

const ItemImageGround = styled.div`
  width: 40px;
  height: 40px;
  background-color: #224DDA;
  padding: 8px 7px;
  border-radius: 50%;
`

const Item = styled.div`
  border-right: 1px solid #061E63;
`

const BenefitTotal = () => {
  const { t } = useTranslation()

  return (
    <BenefitTotalPage>
      <Grid>
        <Flex flexDirection="column" style={{ gridArea: 'a' }}>
          <Item>
            <ItemImage>
              <ItemImageGround>
                <img style={{height: 24, width: 24}} src="/images/hexa/benefit/benefit21.png" />
              </ItemImageGround>
            </ItemImage>
            <ItemTitle color="textSubtle">{t('Total Volume')}</ItemTitle>
            <ItemValue color="textSubtle">$47.91B</ItemValue>
          </Item>
        </Flex>
        <Flex flexDirection="column" style={{ gridArea: 'b' }}>
          <Item>
            <ItemImage>
              <ItemImageGround>
                <img style={{height: 24, width: 24}} src="/images/hexa/benefit/benefit22.png" />
              </ItemImageGround>
            </ItemImage>
            <ItemTitle color="textSubtle">{t('24H Volume')}</ItemTitle>
            <ItemValue color="textSubtle">$189.80M</ItemValue>
          </Item>
        </Flex>
        <Flex flexDirection="column" style={{ gridArea: 'c' }}>
          <Item>
            <ItemImage>
              <ItemImageGround>
                <img style={{height: 24, width: 24}} src="/images/hexa/benefit/benefit23.png" />
              </ItemImageGround>
            </ItemImage>
            <ItemTitle color="textSubtle">{t('Active users')}</ItemTitle>
            <ItemValue color="textSubtle">433.72K</ItemValue>
          </Item>
        </Flex>
        <Flex flexDirection="column" style={{ gridArea: 'd' }}>
          <Item>
            <ItemImage>
              <ItemImageGround>
                <img style={{height: 24, width: 24}} src="/images/hexa/benefit/benefit24.png" />
              </ItemImageGround>
            </ItemImage>
            <ItemTitle color="textSubtle">{t('Trade Fee Saved')}</ItemTitle>
            <ItemValue color="textSubtle">$115.12M</ItemValue>
          </Item>
        </Flex>
        <Flex flexDirection="column" style={{ gridArea: 'e' }}>
          <ItemImage>
            <ItemImageGround>
              <img style={{height: 24, width: 24}} src="/images/hexa/benefit/benefit25.png" />
            </ItemImageGround>
          </ItemImage>
          <ItemTitle color="textSubtle">{t('LP Earned')}</ItemTitle>
          <ItemValue color="textSubtle">$23.98M</ItemValue>
        </Flex>
      </Grid>
    </BenefitTotalPage>
   
  )
}

export default BenefitTotal
