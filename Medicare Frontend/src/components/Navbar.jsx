import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="static"
      elevation={24}
      sx={{
        background: 'linear-gradient(to right, #2196F3, #21CBF3)', // Gradient background
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a modern look
      }}
    >
      <Toolbar
        sx={{
          mx: {
            xs: 0,
            sm: 5,
            md: 30,
          },
          my: 3,
          display: 'flex',
          justifyContent: 'space-between', // Space out items
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 0,
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          MediCare
        </Typography>
        <Box
          sx={{
            display: {
              xs: 'none', // Hide for xs (extra-small) viewports
              md: 'flex', // Show as flex for md (medium) viewports and up
            },
            gap: 2,
            flexGrow: 1, // Pushes the content to the right
            justifyContent: 'flex-end', // Align content to the right
          }}
        >
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2, // Rounded corners for buttons
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle hover effect
              },
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2, // Rounded corners for buttons
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle hover effect
              },
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2, // Rounded corners for buttons
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle hover effect
              },
            }}
          >
            Career
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2, // Rounded corners for buttons
              border: '1px solid white', // Outlined border
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Subtle hover effect
              },
            }}
          >
            Login/Signup
          </Button>
        </Box>
        <IconButton
          edge="end" // Move the icon to the end of the toolbar
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' }, borderRadius: 2 }} // Rounded corners for Menu
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Services</MenuItem>
          <MenuItem onClick={handleMenuClose}>Career</MenuItem>
          <MenuItem onClick={handleMenuClose}>Login/Signup</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
