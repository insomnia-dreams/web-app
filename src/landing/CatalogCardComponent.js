import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 490px;
  height: 290px;
  border: 1px solid black;
  background-image: url("/images/catalog_cards/card1.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
`
/* пробросим прорсы во флекс-базис, чтобы дать побольше места для текста */
const CardText = styled.span`
  flex-basis: ${props => props.id !== 7 ? '40%' : '60%'};
  text-align: center; 
  font: 600 25px 'Source Sans Pro', sans-serif;
  color: #fff;
`

const CatalogCardComponent = ({ category }) => {
  const { id, title } = category
  return (
    <CardWrapper>
      <CardText id={id}>
        {title}
      </CardText>
    </CardWrapper>
  )
}

export default CatalogCardComponent