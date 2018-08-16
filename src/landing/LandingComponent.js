import React, { Component } from 'react'
import styled from 'styled-components'

import CatalogContainer from "./CatalogContainer"
import MaxWidthWrapper from '../_ui/MaxWidthWrapper'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

const LeftSidebar = styled.aside`
  flex-basis: 14%;
  border: 1px solid goldenrod;
  flex-shrink: 0;
`

const RightSidebar = styled.aside`
  flex-basis: 18%;
  border: 1px solid blue;
  flex-shrink: 0;
`

const Content = styled.section`
  flex-basis: 68%;
  border: 1px solid red;
  flex-shrink: 0;
`

class LandingComponent extends Component {
  render() {
    return (
      <MaxWidthWrapper>
        <Wrapper>
          <LeftSidebar></LeftSidebar>
          <Content>
            <CatalogContainer />
          </Content>
          <RightSidebar></RightSidebar>
        </Wrapper>
      </MaxWidthWrapper>
    )
  }
}

export default LandingComponent