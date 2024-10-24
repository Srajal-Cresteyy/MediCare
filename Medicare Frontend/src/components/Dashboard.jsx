import React from 'react'
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  // Dummy admin data
  const adminData = [
    { id: 1, title: 'Total Users', value: 150 },
    { id: 2, title: 'Total Appointments', value: 75 },
    { id: 3, title: 'Pending Requests', value: 10 },
    { id: 4, title: 'Total Revenue', value: '$5,000' },
  ]

  const handleLogout = () => {
    // Perform logout logic (e.g., clearing token)
    localStorage.removeItem('token') // Remove token
    navigate('/login') // Redirect to login page
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
          maxWidth: '800px',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '15px',
          boxShadow: 3,
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: '#2196F3' }}>
          Admin Dashboard
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>

        <Grid container spacing={2} sx={{ marginTop: 3 }}>
          {adminData.map((data) => (
            <Grid item xs={12} sm={6} md={3} key={data.id}>
              <Card variant="outlined" sx={{ borderRadius: '10px' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {data.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
