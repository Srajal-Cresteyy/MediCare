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
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const [activeNav, setActiveNav] = useState('#')

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="fixed"
      elevation={-1}
      sx={{
        background: 'linear-gradient(to right, #2196F3, #21CBF3)',
      }}
    >
      <Toolbar
        sx={{
          mx: {
            xs: 0,
            sm: 5,
            md: 30,
          },
          my: 1,
          display: 'flex',
          justifyContent: 'space-between',
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
              xs: 'none',
              md: 'flex',
            },
            gap: 2,
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
        >
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <a
              href="/#"
              onClick={() => setActiveNav('#')}
              className={activeNav === '/#' ? 'active' : ''}
            >
              Home
            </a>
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <a
              href="/#About"
              onClick={() => setActiveNav('#About')}
              className={activeNav === '/#About' ? 'active' : ''}
            >
              About
            </a>
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <a
              href="/#Services"
              onClick={() => setActiveNav('#Services')}
              className={activeNav === '/#Services' ? 'active' : ''}
            >
              Services
            </a>
          </Button>
          <Button
            sx={{
              color: 'white',
              textTransform: 'none',
              fontWeight: 'thin',
              borderRadius: 2,
              border: '1px solid white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <Link to={'/LoginSignUp'}>Login/Signup</Link>
          </Button>
        </Box>
        <IconButton
          edge="end"
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
          sx={{ display: { xs: 'block', md: 'none' }, borderRadius: 2 }}
        >
          <MenuItem onClick={handleMenuClose}>
            <a href="/#Home">Home</a>{' '}
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/#About">About</a>{' '}
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/#Services">Services</a>{' '}
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/LoginSignUp">Login/Signup</a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
