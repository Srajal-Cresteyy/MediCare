import React from 'react'
import { Box, Typography, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        background: 'linear-gradient(to right, #2196F3, #21CBF3)', // Consistent gradient
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        animation: 'fadeInUp 1s forwards',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        MediCare - Your Health, Our Priority
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/about" color="inherit" underline="hover">
          About
        </Link>
        <Link href="/services" color="inherit" underline="hover">
          Services
        </Link>
        <Link href="/login" color="inherit" underline="hover">
          Login
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        &copy; {new Date().getFullYear()} MediCare. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
