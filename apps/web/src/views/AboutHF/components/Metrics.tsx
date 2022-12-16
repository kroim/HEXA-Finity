import { Box, Button, Flex, Heading, Text, LinkExternal, ArrowForwardIcon } from '@pancakeswap/uikit'
import { ResponsiveContainer, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, Legend } from 'recharts'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import ButtonCustom from 'views/Lottery/components/ButtonCustom'

const StyledHero = styled(Box)`
  background: #ECF1FF;
  padding-bottom: 32px;
  padding-top: 32px;
  font-family: 'Poppins';
  font-style: normal;
`
const MetricsCard = styled(Box)`
  flex: 1;
  background: #FFF;
  border-radius: 20px;
  padding: 36px 24px;
  .hf-header {
    text-align: center;
    color: #000;
    font-size: 22px;
    padding: 12px 0;
  }
`
const MetricsList = styled(Flex)`
  padding: 4px;
  * {
    font-size: 14px;
  }
`
const MetricsLeft = styled(Flex)`
  flex: 3;
  color: var(--colors-poolText);
  padding-top: 12px;
`
const MetricsRight = styled(Flex)`
  flex: 2;
  color: var(--colors-aboutText);
  font-weight: bold;
  padding-top: 12px;
  .pre-icon {
    height: 14px;
    margin-right: 3px;
    margin-left: -20px;
  }
`
const ExternalLinkIcon = styled(LinkExternal)`
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
  }
`

const ChartCard = styled(Box)`
  flex: 2;
  background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 82.34%);
  filter: drop-shadow(2px 14px 68px rgba(26, 35, 74, 0.11));
  border-radius: 20px;
  padding: 36px;
  margin-top: 12px;
  margin-bottom: 12px;
  .recharts-wrapper {
    transform: scale(0.7);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
    margin-bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    .recharts-wrapper {
      transform: scale(1);
    }
  }
`
const ChartContainer = styled(Flex)`

`
const ChartLegend = styled.div`

`
const Metrics = () => {
  const { t } = useTranslation()
  const ellipsisAddress = (_address: string) => {
    return _address ? `${_address.substring(0, 4)}...${_address.substring(_address.length - 4)}` : '';
  }
  const onExternal = () => {
    window.open("https://bscscan.com/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1", "_blank");
  }
  const data = [
    {
      name: "Investment Fund",
      uv: 5,
      pv: 9800,
      fill: "#72B88D"
    },
    {
      name: "SAFU",
      uv: 1,
      pv: 9800,
      fill: "#E6C665"
    },
    {
      name: "Team",
      uv: 9,
      pv: 1398,
      fill: "#D42F68"
    },
    {
      name: "Referral Program",
      uv: 4.3,
      pv: 4567,
      fill: "#8950CF"
    },
    {
      name: "Farms/Launchpools",
      uv: 80.07,
      pv: 2400,
      fill: "#041647"
    },
    // {
    //   name: "Unknown",
    //   uv: 100,
    //   pv: 2400,
    //   fill: "transparent"
    // },
  ];
  const style = {
    left: 350,
    lineHeight: "24px"
  };
  return (
    <StyledHero>
      <Container>
        <Flex alignItems="center" justifyContent="space-between" flexDirection={['column', 'column', 'column', 'row']}>
          <MetricsCard>
            <Heading className='hf-header'>{t('Hexa Finity Token Metrics')}</Heading>
            <MetricsList>
              <MetricsLeft>{t('Price')}</MetricsLeft>
              <MetricsRight>$1.12</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Ticker Symbol')}</MetricsLeft>
              <MetricsRight><img className='pre-icon' src='/img/about_hf/hexa-token-logo.svg' alt='hexa' /> Hexa</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Chain')}</MetricsLeft>
              <MetricsRight><img className='pre-icon' src='/img/about_hf/bnb-token-logo.svg' alt='bnb' /> BNB(BEP-20)</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Contract Address')}</MetricsLeft>
              <MetricsRight>{ellipsisAddress('0x968C818CA8B9251b393131C08a736A67ccB10dD1')}<ExternalLinkIcon onClick={() => onExternal()} /></MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Max Supply')}</MetricsLeft>
              <MetricsRight>700 000 000</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Total Supply')}</MetricsLeft>
              <MetricsRight>274 787 288</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Circulation Supply')}</MetricsLeft>
              <MetricsRight>226 648 386</MetricsRight>
            </MetricsList>
            <MetricsList>
              <MetricsLeft>{t('Burned')}</MetricsLeft>
              <MetricsRight>30 369 628</MetricsRight>
            </MetricsList>
          </MetricsCard>
          <ChartCard>
            {/* <img src='/img/about_hf/metrics-chart.svg' alt='metrics' /> */}
            <ChartContainer>
              <RadialBarChart
                width={320}
                height={320}
                cx={150}
                cy={150}
                innerRadius={80}
                outerRadius={160}
                barSize={12}
                data={data}
                startAngle={90}
                endAngle={-270}
                
              >
                <RadialBar
                  background
                  dataKey="uv"
                  
                />
              </RadialBarChart>
              <ChartLegend>

              </ChartLegend>
            </ChartContainer>

            <Text color='poolButtonText' style={{ fontSize: 12, textAlign: 'right' }}>{t('Hexa Finity will also allocate 100 million Hexa Finity tokens for Transaction Fee Mining.')}</Text>
          </ChartCard>
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Metrics
