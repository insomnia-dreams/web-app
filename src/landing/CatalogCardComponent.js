import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 465px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/catalog_cards/${props => props.url}.jpg");
  border-radius: 4px;
  border: 1px solid black;
  margin: 0  0 8px;
`
/* пробросим прорсы во флекс-базис, чтобы дать побольше места для текста */
const CardText = styled.span`
  flex-basis: ${props => props.id !== 7 ? '40%' : '60%'};
  text-align: center; 
  font: 600 25px 'Source Sans Pro', sans-serif;
  color: #fff;
`

const CatalogCardComponent = ({ category }) => {
  const { id, title, img_url } = category
  return (
    <CardWrapper url={img_url}>
      <CardText id={id}>
        {title}
      </CardText>
    </CardWrapper>
  )
}

export default CatalogCardComponent