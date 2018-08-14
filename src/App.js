import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeContainer from "./home/HomeContainer"
import TestComponent from "./home/TestComponent"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/test" component={TestComponent} />
        </div>
      </Router>
    )
  }
}

export default App
