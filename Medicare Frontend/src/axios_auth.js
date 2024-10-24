import axios from 'axios'

const API_BASE_URL = 'http://localhost:8088/auth'

class AuthService {
  login(credentials) {
    return axios.post(`${API_BASE_URL}/login`, credentials)
  }
}

export default new AuthService()
