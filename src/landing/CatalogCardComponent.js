import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 490px;
  height: 290px;
  border: 1px solid black;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const CatalogCardComponent = ({ category }) => {
  const { title } = category
  return (
    <Wrapper>
      <Span>
        {title}
      </Span>
      <Image src="/images/catalog_cards/card1.jpg" alt="catalog card image" />
    </Wrapper>
  )
}

export default CatalogCardComponent