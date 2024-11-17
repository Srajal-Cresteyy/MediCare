// src/components/ProtectedRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem('token') // Check for token in local storage
  const role = localStorage.getItem('role') // Check for the Role for which the dashboard should be displayed

  return token && role.match(roleRequired) ? (
    children
  ) : (
    <Navigate to="/LoginSignUp" />
  )
}

export default ProtectedRoute
