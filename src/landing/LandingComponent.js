import React, { Component } from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from '../_ui/MaxWidthWrapper'
import CatalogContainer from "./CatalogContainer"
import CarouselComponent from './CarouselComponent'
import BannerRowComponent from './BannerRowComponent'
import BannerSideComponent from './BannerSideComponent'
import ExcellenceComponent from './ExcellenceComponent'
import SideNavigationContainer from '../_ui/SideNavigationContainer'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 10px;
`

const LeftSidebar = styled.aside`
  flex-basis: 15%;
  border: 1px solid goldenrod;
  flex-shrink: 0;
`

const RightSidebar = styled.aside`
  flex-basis: 15%;
  border: 1px solid goldenrod;
  flex-shrink: 0;
`

const Content = styled.section`
  flex-basis: 69%;
  border: 1px solid red;
  flex-shrink: 0;
`

class LandingComponent extends Component {
  render() {
    return (
      <MaxWidthWrapper>
        <Wrapper>
          <LeftSidebar>
            <SideNavigationContainer />
          </LeftSidebar>
          <Content>
            <CarouselComponent />
            <BannerRowComponent />
            <ExcellenceComponent />
            <CatalogContainer />
          </Content>
          <RightSidebar>
            <BannerSideComponent />
            <BannerSideComponent />
          </RightSidebar>
        </Wrapper>
      </MaxWidthWrapper>
    )
  }
}

export default LandingComponent