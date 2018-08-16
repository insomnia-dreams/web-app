import React from 'react'
import styled from 'styled-components'
//import { Link } from 'react-router-dom'

const Image = styled.img`
  width: 50%;
  border-radius: 4px;
`

const Wrapper = styled.div`
  margin: 4px 0;
`

const BannerRowComponent = () => {
  return (
    <Wrapper>
      <a>
        <Image src="/images/banner_row/banner_row1.png" alt="banner" />
      </a>
      <a>
        <Image src="/images/banner_row/banner_row2.png" alt="banner" />
      </a>
    </Wrapper>
  )
}

export default BannerRowComponent