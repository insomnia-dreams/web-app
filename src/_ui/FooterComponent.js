import React from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from '../_ui/MaxWidthWrapper'
import { COLORS } from '../_constants/styles'

const Background = styled.div`
  background: ${COLORS.HEADER};
`

const Wrapper = styled.div`
  height: 100px;
`

const FooterComponent = () => {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <div>
          Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer
        </div>
        <div>
          Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer
        </div>
        <div>
          Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer
        </div>
        <div>
          Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer
        </div>
        <div>
          Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer
        </div>
      </Wrapper>
    </MaxWidthWrapper>
  )
}

export default FooterComponent