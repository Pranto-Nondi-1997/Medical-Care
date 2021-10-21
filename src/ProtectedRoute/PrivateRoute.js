import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        return user.displayName ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }}
    ></Route>
  )
}
