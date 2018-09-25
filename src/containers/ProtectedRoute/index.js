import React from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { getUser } from 'store/user'

const ProtectedRoute = ({ isAllowed, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAllowed() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/', // where user will be sent when disallowed
              state: { from: props.location },
            }}
          />
        )
    }
  />
)

export default connect(state => ({
  location: state.router.location,
  isAllowed: () => {
    const user = getUser(state)
    if (!!user && user.success) return true
    return false
  },
}))(ProtectedRoute)