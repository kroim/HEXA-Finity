import { Flex, Heading, Skeleton, Text, Balance, Button, Link, ArrowForwardIcon, ArrowBackIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from '@pancakeswap/localization'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { useMatchBreakpoints } from '@pancakeswap/uikit'

const resourcesList = [
  { 
    id: 1, 
    imageUrl: 'images/hexa/resources/DappRadar_logo.png',
    name: 'DappRadar',
    description: 'Prices are set when the round starts, equal to $1 in HEXA per ticket.'
  },
  { 
    id: 2, 
    imageUrl: 'images/hexa/resources/Cryptocurrency.png',
    name: 'Binance',
    description: 'Invite your friends to register via your referral link'
  },
  // { 
  //   id: 3, 
  //   imageUrl: 'images/banners/doubleEternal.png',
  //   name: 'DappRadar',
  //   description: 'Prices are set when the round starts, equal to $1 in HEXA per ticket.'
  // }
]

const ResourcesPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: unset;
  }
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #000000;
  line-height: 35px;
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
  }
`

const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #061E63;
  line-height: 26px;
  margin-bottom: 10px;
   
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 20px;
  }
`

const ArrowButton = styled.div`
  border-radius: ${({ theme }) => theme.radii.small};
  padding: 5px 5px 3px 5px;
  background-color: #041647;
`;

const ArrowButtonGroup = styled.div`
  display: flex;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 30px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    width: 108px;
    bottom: 0px;
  }
  .swiper-pagination-bullet {
    background-color: #aabef0;
  }
`

const ResourcesList = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: unset;
  }
`;

const ResourcesCard = styled.div`
  padding: 20px 20px 30px 20px;
  margin: 10px 0;
  background: #FFFFFF;
  box-shadow: 2px 14px 68px rgba(26, 35, 74, 0.11);
  border-radius: 20px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px 30px 50px 30px;
    margin: 10px 10px;
    width: 376px;
  }
`;

const CardTitle = styled.div`
  font-size: 24px;
  color: #061E63;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  display: flex;
  font-size: 16px;
  color: #5970B1;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  margin-bottom: 20px;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const CardButton = styled.div`
  display: flex;
  justify-content: center;
`

const Resources = () => {
  const { t } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()

  return (
    <ResourcesPage>
      <div style={{margin:'10px 0'}}>
        <Title>
          Reviews From Reputable<br></br> Crypto Resources
        </Title>
        <Content>
          Read more about the accomplishments of Biswap on the most reputable crypto resources.
        </Content>
        <ArrowButtonGroup>
          <ArrowButton style={{marginRight: 10}}>
            <ArrowBackIcon color="#798DC6" />
          </ArrowButton>
          <ArrowButton>
            <ArrowForwardIcon color="#798DC6" />
          </ArrowButton>
        </ArrowButtonGroup>
      </div>
      <ResourcesList>
        {resourcesList.map((item, index) => {
          return (
            <ResourcesCard key={index}>
              <CardImage>
                <img src={item.imageUrl} alt="resource image" />
              </CardImage>
              <CardTitle>{item.name}</CardTitle>
              <CardContent>{item.description}</CardContent>
              <CardButton>
                {/* <Link href={perpetualUrl} external> */}
                  <Button>
                    <Text color="invertedContrast" bold fontSize="12px" mr="4px">
                      {t('Read More')}
                    </Text>
                    <ArrowForwardIcon color="invertedContrast" />
                  </Button>
                {/* </Link> */}
              </CardButton>
            </ResourcesCard>
          )
        })}
      </ResourcesList>
      {/* <div style={{ marginTop: 20, paddingBottom: 50 }}>
        {isMobile ? (
          <StyledSwiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            loop
            pagination={{ clickable: true }}
          >
            {bannerImageList.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div style={{ display: 'flex' }}>
                    <img src={item.imageUrl} alt="banner image" />
                  </div>
                </SwiperSlide>
              )
            })}
          </StyledSwiper>
        ) : (
          <StyledSwiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={500}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            loop
            pagination={{ clickable: true }}
          >
            {bannerImageList.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div style={{ display: 'flex' }}>
                    <img src={item.imageUrl} alt="banner image" />
                  </div>
                </SwiperSlide>
              )
            })}
          </StyledSwiper>
        )}
      </div> */}
    </ResourcesPage>
  )
}

export default Resources
