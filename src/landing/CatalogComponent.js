import React, { Component } from 'react'

import CatalogCardComponent from "./CatalogCardComponent"

class CatalogComponent extends Component {
  componentDidMount() {
    const { fetchCatalog } = this.props
    fetchCatalog()
  }

  render() {
    const { isFetching, catalog, lastUpdated } = this.props
    return (
      <div>
         {isFetching && <span>Loading...</span>}
         {(!isFetching && lastUpdated) && 
          catalog.map(category => (
            <CatalogCardComponent key={category.id} category={category}/>
          ))}
      </div>
    )
  }
}

export default CatalogComponent