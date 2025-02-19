import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivate = ({children}) => {
    let adminID = sessionStorage.getItem("adminID")
    return (
      <div>
        {adminID? <>{children}</>:<Navigate to="/" />}
      </div>
  )
}

export default AdminPrivate
