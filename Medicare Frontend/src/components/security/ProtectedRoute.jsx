// src/components/ProtectedRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token') // Check for token in local storage

  return token ? children : <Navigate to="/LoginSignUp" />
}

export default ProtectedRoute
