import React from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { isAuth } from 'store/user'

const ProtectedRoute = ({ isAllowed, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAllowed() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login', // where user will be sent when disallowed
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default connect(state => ({
  location: state.router.location,
  isAllowed: () => isAuth(state),
}))(ProtectedRoute)
