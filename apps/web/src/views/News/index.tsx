import { Box } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import InviteSection from './components/InviteSection'

const NewsPage = styled.div`
  min-height: calc(100vh-64px);
`
const MainContent = styled(Box)`
  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 16px;
    padding-right: 16px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
`
const ContentWrapper = styled.div`
  width: 100%;
  background: #ecf1ff;
  padding-top: 49px;
  padding-bottom: 129px;
`

const News = () => {
  return (
    <>
      <PageMeta />
      <NewsPage>
        <HeroSection />
        <MainContent>
          <ContentWrapper>
            <InviteSection />    
          </ContentWrapper>
        </MainContent>
      </NewsPage>
    </>
  )
}
export default News
