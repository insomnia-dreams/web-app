import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as routes from '../_constants/routes'
import MaxWidthWrapper from '../_ui/MaxWidthWrapper'
import { COLORS } from '../_constants/styles'

const Background = styled.div`
  background: ${COLORS.HEADER};
`

const FlexWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`
const PositionWrapper = styled.div`
  margin-left: 14%;
  flex-basis: 68%;
  display: flex;
`
const Column = styled.div`
  border: 1px solid DeepSkyBlue;
  flex-grow: 1;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: column;
`
const ColumnHeader = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  color: ${COLORS.FOOTER_HEADER};
  font-size: 14px;
  line-height: 30px;
`

const ColumnLink = styled(Link)`
  color: ${COLORS.FOOTER_HEADER};
  font-size: 14px;
  line-height: 30px;
`

const FooterComponent = () => {
  return (
    <MaxWidthWrapper>
      <FlexWrapper>
        <PositionWrapper>
          <Column>
            <ColumnHeader>компания</ColumnHeader>
            {/* информация о компании => нужно придумать название!!! */}
            <ColumnLink to={routes.ABOUT}>О нас</ColumnLink>
            <ColumnLink to={routes.CAREERS}>Вакансии</ColumnLink>
            <ColumnLink to={routes.NEWS}>Hовости</ColumnLink>
          </Column>
          <Column>
            <ColumnHeader>контакты</ColumnHeader>
          </Column>
          <Column>
            <ColumnHeader>помощь</ColumnHeader>
            <ColumnLink to={routes.PRIVACY_POLICY}>Политика конфиденциальности</ColumnLink>
          </Column>
          <Column>
            <ColumnHeader>бизнес</ColumnHeader>
          </Column>
          {/* компания */}
          {/* контакты */}
          {/* помощь */}
          {/* бизнес | Юридическим лица */}
          {/* **новости */}
          {/* ************** */}
          {/* соцсети */}
          {/* способы оплаты */}
        </PositionWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <PositionWrapper>
          Способы оплаты => ДНС
        </PositionWrapper>
      </FlexWrapper>
    </MaxWidthWrapper>
  )
}

export default FooterComponent