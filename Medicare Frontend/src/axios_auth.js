import axios from 'axios'

const API_BASE_URL = 'http://localhost:8088/auth'

class AuthService {
  // Login method that accepts username and password as parameters
  async login(username, password) {
    try {
      // Create credentials object
      const credentials = {
        userName: username,
        password: password,
      }

      // Make the POST request to the login endpoint
      const response = await axios.post(`${API_BASE_URL}/login`, credentials)
      const token = response.data // Assuming the response contains the JWT

      // Store the token in local storage for future requests
      if (token) {
        localStorage.setItem('token', token)
      }

      return token // Return the token or response data
    } catch (error) {
      console.error('Login failed:', error)
      throw error // Rethrow the error for further handling
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
