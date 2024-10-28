import React, { useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Toolbar,
  AppBar,
  CssBaseline,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardContent from './DashboardContent'

const drawerWidth = 240

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        background: 'linear-gradient(to right, #2196F3, #21CBF3)',
        color: 'white',
        height: '100%',
        padding: 2,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          MediCare Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {['Overview', 'Patients', 'Appointments', 'Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* App Bar for mobile drawer toggle button */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'linear-gradient(to right, #2196F3, #21CBF3)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MediCare Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Dashboard Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: 'linear-gradient(to right, #f7f9fc, #e3f2fd)',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <DashboardContent />
      </Box>
    </Box>
  )
}

export default Dashboard
