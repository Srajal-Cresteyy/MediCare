import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Tabs, Tab } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import AuthService from '../axios_auth' // Adjust the path as needed

const LoginSignup = () => {
  const [tab, setTab] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user') // Initialize the role
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const theme = useTheme()
  const navigate = useNavigate()

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await AuthService.login({
        userName: username,
        password,
        role,
      })
      if (response.data !== 'Invalid credentials') {
        localStorage.setItem('token', response.data) // Store token
        navigate('/auth/dashboard') // Navigate to dashboard
      } else {
        setMessage('Invalid credentials')
      }
    } catch (error) {
      setMessage('Invalid credentials')
    }
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // Handle signup logic here (if needed)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #2196F3, #21CBF3)',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '15px',
          boxShadow: 3,
          padding: 3,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          animation: 'fadeIn 1s forwards',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: '#2196F3' }}>
          {tab === 'login' ? 'Login' : 'SIGN UP'}
        </Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={{
            marginBottom: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Tab label="Login" value="login" />
          <Tab label="Sign up" value="sign up" />
        </Tabs>
        {message && <Typography color="error">{message}</Typography>}
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          onSubmit={tab === 'login' ? handleLogin : handleSignup}
        >
          <TextField
            label="Email"
            variant="outlined"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {tab === 'login' && (
            <TextField
              label="Role"
              variant="outlined"
              required
              fullWidth
              select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              SelectProps={{
                native: true,
              }}
            >
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
              <option value="DOCTOR">Doctor</option>
              <option value="STAFF">Staff</option>
            </TextField>
          )}
          {tab === 'sign up' && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <Button type="submit" variant="contained" color="primary">
            {tab === 'login' ? 'Login' : 'Sign up'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginSignup
