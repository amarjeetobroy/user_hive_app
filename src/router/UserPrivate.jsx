import React, { Children, Fragment } from 'react'
import { Navigate } from 'react-router-dom'

const UserPrivate = ({children}) => {
    let userID = sessionStorage.getItem("authuser")
  return (
    <Fragment>{userID? <>{children}</>:<Navigate to="/" />}</Fragment>
  )
}

export default UserPrivate
