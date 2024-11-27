import axios from 'axios'
import { API_BACKEND_URL } from './apiConfig'

const API_BASE_URL = `${API_BACKEND_URL}/auth`

class AuthService {
  // Login method that accepts username and password as parameters
  async login(username, password, role) {
    try {
      const credentials = { userName: username, password: password, role } // Include role in the payload

      const response = await axios.post(`${API_BASE_URL}/login`, credentials)
      const { token, role: userRole } = response.data // Destructure token and role

      if (token) {
        localStorage.setItem('token', token) // Store token
        localStorage.setItem('role', userRole) // Store user role for further use
      }

      return response.data // Return the full response for navigation
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  // Method to logout
  logout() {
    localStorage.removeItem('token') // Remove token from local storage
  }

  // Method to check if user is logged in
  isLoggedIn() {
    return !!localStorage.getItem('token') // Returns true if token exists
  }
}

export default new AuthService()
