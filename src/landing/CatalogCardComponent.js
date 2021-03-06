import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  width: 465px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("/images/catalog_cards/${props => props.url}.jpg"); */
  background-image: url("/images/catalog_cards/${props => props.id % 2 === 0 ? 'card1' : 'card2'}.jpg");
  border-radius: 4px;
  border: 1px solid black;
  margin: 0  0 8px;
`
/* пробросим прорсы во флекс-базис, чтобы дать побольше места для текста для категории */
/* Упаковочные материалы и полиэтиленовые пакеты */
const CardText = styled.span`
  flex-basis: ${props => props.id !== 7 ? '40%' : '61%'};
  text-align: center; 
  font: 600 25px 'Source Sans Pro', sans-serif;
  color: #fff;
`

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const CatalogCardComponent = ({ category }) => {
  const { id, title } = category
  return (
    <CardWrapper id={id}>
      <StyledLink to={category.link}>
        <CardText id={id}>
          {title}
        </CardText>
      </StyledLink>
    </CardWrapper>
  )
}

export default CatalogCardComponent