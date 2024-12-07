// src/utilities/authUtils.js
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_BACKEND_URL } from './apiConfig'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      // Debugging: Check if the token exists in localStorage
      console.log('LocalStorage:', localStorage)
      const token = localStorage.getItem('token') // Assume the JWT is stored in localStorage
      if (!token) {
        console.error('No token found. Please log in again.')
        setError('No token found. Please log in again.')
        setLoading(false)
        return
      }

      console.log('Token found:', token)

      const response = await axios.post(
        `${API_BACKEND_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // Clear stored user authentication data
      localStorage.removeItem('token')
      sessionStorage.clear()

      // Redirect to sign-in page
      navigate('/LoginSignUp')
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return handleLogout
}
