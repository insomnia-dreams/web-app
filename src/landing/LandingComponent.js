import React, { Component } from 'react'
import styled from 'styled-components'

import CatalogContainer from "./CatalogContainer"
import MaxWidthWrapper from '../_ui/MaxWidthWrapper'

class LandingComponent extends Component {
  render() {
    return (
      <MaxWidthWrapper>
        <CatalogContainer />
      </MaxWidthWrapper>
    )
  }
}

export default LandingComponent