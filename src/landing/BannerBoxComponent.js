import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Wrapper = styled.div`
  margin: 4px 0;
`

/* Make Banner! */
const BannerBoxComponent = () => {
  return (
    <Wrapper>
      <a>
        <Image src="/images/banner_box/banner_box3.jpg" alt="banner" />
      </a>
    </Wrapper>
  )
}

export default BannerBoxComponent