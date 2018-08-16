import React, { Component } from 'react'

class LandingComponent extends Component {
  render() {
    const { isFetching, categories, lastUpdated } = this.props
    return (
      <div>
        {isFetching && <span>Loading...</span>}
        {(!isFetching && lastUpdated) && categories.map(category => <div key={category.id}>{category.title}</div>)}
      </div>
    )
  }

  componentDidMount() {
    const { fetchCatalog } = this.props
    fetchCatalog()
  }
}

export default LandingComponent