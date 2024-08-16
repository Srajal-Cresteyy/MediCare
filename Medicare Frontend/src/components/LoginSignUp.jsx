import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Tabs, Tab } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const LoginSignup = () => {
  const [tab, setTab] = useState('login')
  const theme = useTheme()

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #2196F3, #21CBF3)', // Background gradient
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '8px',
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
          {tab === 'login' ? 'Login' : 'Signup'}
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
          <Tab label="Signup" value="signup" />
        </Tabs>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField label="Email" variant="outlined" required fullWidth />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            fullWidth
          />
          {tab === 'signup' && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
              fullWidth
            />
          )}
          <Button variant="contained" color="primary">
            {tab === 'login' ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginSignup
