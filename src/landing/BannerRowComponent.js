import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as routes from '../_constants/routes'

const Image = styled.img`
  width: 50%;
  border-radius: 4px;
`

const Wrapper = styled.div`
  margin: 13px 0;
`

const BannerRowComponent = () => {
  return (
    <Wrapper>
      <Link to={routes.SALES}>
        <Image src="/images/banner_row/banner_row1.png" alt="banner" />
      </Link>
      <Link to={routes.SALES}>
        <Image src="/images/banner_row/banner_row2.png" alt="banner" />
      </Link>
    </Wrapper>
  )
}

export default BannerRowComponent