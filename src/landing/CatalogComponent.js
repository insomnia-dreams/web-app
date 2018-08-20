import React, { Component } from 'react'
import styled from 'styled-components'

import CatalogCardComponent from "./CatalogCardComponent"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

class CatalogComponent extends Component {
  componentDidMount() {
    const { fetchCatalog } = this.props
    fetchCatalog()
  }

  render() {
    const { isFetching, catalog, lastUpdated } = this.props
    return (
      <Wrapper>
        {isFetching && <span>Loading...</span>}
        {(!isFetching && lastUpdated) &&
          catalog.filter(category => category.path.length === 1)
            .map(category => (
              <CatalogCardComponent key={category.id} category={category} />
            ))}
      </Wrapper>
    )
  }
}

export default CatalogComponent