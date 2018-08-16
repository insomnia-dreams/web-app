import React from 'react'
import styled from 'styled-components'
//import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  margin: 8px 0;
  background: #fff;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Image = styled.img`
  width: 18%;
`

const ExcellenceComponent = () => {
  return (
    <Wrapper>
      <Image src='images/excellence/excellence1.png' />
      <Image src='images/excellence/excellence2.png' />
      <Image src='images/excellence/excellence1.png' />
      <Image src='images/excellence/excellence2.png' />
    </Wrapper>
  )
}

export default ExcellenceComponent