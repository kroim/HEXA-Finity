import { useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const ExchangesPage = styled.div`
  margin-top: 40px;
`

const Title = styled.div`
  text-align: center;
  font-size: 26px;
  color: #000000;
  font-weight: 600;
  line-height: 39px;
  margin-bottom: 40px;
`

const Beniefits = styled.div`
  grid-gap: 50px;
  display: grid;
  grid-template-columns: auto auto auto auto ;
`

const BeniefitItem = styled.div`
  flex: 25%;
  @media (max-width: 674px) {
    flex: 100%;
  }
`

const BeniefitTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #061E63;
  margin-bottom:20px;
`

const BeniefitContent = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #061E63;
  line-height: 24px;
`

const Exchanges = ({}) => {

  const exchanges = [
    {
      img: "/images/hexa/exchanges/Exchanges1.png"
    },
    {
      img: "/images/hexa/exchanges/Exchanges2.png"
    },
    {
      img: "/images/hexa/exchanges/Exchanges3.png"
    },
    {
      img: "/images/hexa/exchanges/Exchanges4.png"
    },
    {
      img: "/images/hexa/exchanges/Exchanges5.png"
    },
    {
      img: "/images/hexa/exchanges/Exchanges6.png"
    },
  ]

  return (
    <ExchangesPage>
      <Title>
        Exchanges
      </Title>
      <Beniefits>
        {exchanges.map(function (item, index) {
          return (
            <img style={{height: 74}} src={item.img} />
          )
        })}
       </Beniefits>
    </ExchangesPage>
  )
}

export default Exchanges
