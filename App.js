import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './src/publics/store'
import MainNavigation from './src/navigations/mainNavigation'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}

export default App
