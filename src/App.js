import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCatalog } from "./duck/actions"

class App extends Component {
  render() {
    //const { isFetching, categories, lastUpdated } = this.props
    return (
      <div>
        {this.props.categories.map(category => (<div key={category.id}>{category.title}</div>))}
      </div>
    )
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCatalog())
  }
}

const mapStateToProps = state => {
  const { catalog } = state
  const { isFetching, categories, lastUpdated } = catalog || { isFetching: true, catalog: [] }
  return {
    categories,
    isFetching,
    lastUpdated
  }
}

App = connect(mapStateToProps)(App)

export default App
