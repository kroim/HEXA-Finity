import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 20px;
  padding-bottom: 0px;
`
const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px 30px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }
`
const DeActivedTabItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`

export default function SwapTab() {
  const router = useRouter()

  const [tapIndex, setTapIndex] = useState(0)

  const handleClick = (href) => {
    let url = href.toLowerCase()
    router.push(url)
  }

  return (
    <TabContainer>
      {['Swap', 'Liquidity', 'Transactions'].map((item, index) => {
        return (
          <div onClick={()=>handleClick(item)}>
            {tapIndex == index ? (
              <TabItem onClick={() => setTapIndex(index)} key={item}>
                {item}
              </TabItem>
            ) : (
              <DeActivedTabItem onClick={() => setTapIndex(index)} key={item}>
                {item}
              </DeActivedTabItem>
            )}
          </div>
        )
      })}
    </TabContainer>
  )
}
