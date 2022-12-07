import { Flex, Heading, Skeleton, Text, Balance } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { ArrowForwardIcon, ArrowBackIcon } from '@pancakeswap/uikit'

const ResourcesPage = styled.div`
  padding: 95px 0 95px 95px;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #000000;
  line-height: 35px;
  margin-bottom: 20px;
`

const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #061E63;
  line-height: 26px;
  margin-bottom: 20px;
`

const ArrowButton = styled.div`
  border-radius: ${({ theme }) => theme.radii.small};
  padding: 5px 5px 3px 5px;
  background-color: #041647;
`;

const ArrowButtonGroup = styled.div`
  display: flex;
`;

const Resources = () => {
  const { t } = useTranslation()

  return (
    <ResourcesPage>
      <Title>
        Reviews From Reputable<br></br> Crypto Resources
      </Title>
      <Content>
        Read more about the accomplishments of Biswap<br></br> on the most reputable crypto resources.
      </Content>
      <ArrowButtonGroup>
        <ArrowButton style={{marginRight: 10}}>
          <ArrowBackIcon color="#798DC6" />
        </ArrowButton>
        <ArrowButton>
          <ArrowForwardIcon color="#798DC6" />
        </ArrowButton>
      </ArrowButtonGroup>
    </ResourcesPage>
  )
}

export default Resources
