import React from 'react'
import { Box, Typography } from '@mui/material'

const typoStyles = {
  fontWeight: 'bold',
  color: 'white', // White text to stand out against the gradient
  margin: '0 auto', // Center the text horizontally
  opacity: 0, // Start with text hidden
  animation: 'fadeInScale 1s forwards', // Apply animation
}

const HomePage = () => {
  return (
    <Box
      id="Home"
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: {
          xs: '120vh',
          sm: '120vh',
          md: '100vh',
        }, // Full viewport height
        background: 'linear-gradient(to right, #2196F3, #21CBF3)', // Same gradient background as the Navbar
        textAlign: 'center', // Center text
        padding: 2, // Add some padding
        '@keyframes fadeInScale': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      }}
    >
      <Typography variant="h1" sx={{ ...typoStyles, animationDelay: '0s' }}>
        Medi-Care
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ...typoStyles,
          marginTop: -1,
          animationDelay: '0.5s',
          fontWeight: 'thin',
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        A system to make Medical Records easier
      </Typography>
    </Box>
  )
}

export default HomePage
