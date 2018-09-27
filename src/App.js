import React from 'react'
import { connect } from 'react-redux'

import ErrorBoundary from 'containers/ErrorBoundary'
import Growl from 'containers/Growl'

class App extends React.Component {
  render() {
    return (
      <main>
        <Growl />
        <ErrorBoundary>
          {this.props.children}
        </ErrorBoundary>
      </main>
    )
  }
}

export default connect(
  state => ({ router: state.router })
)(App)
