import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as routes from '../_constants/routes'

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Wrapper = styled.div`
  margin: 4px 0;
`

const CarouselComponent = () => {
  return (
    <Wrapper>
      <Link to={routes.SALES}>
        <Image src="/images/carousel/carousel1.jpg" alt="banner" />
      </Link>
    </Wrapper>
  )
}

export default CarouselComponent