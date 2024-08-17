import React from 'react'
import { Box, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import aboutAnimation from '../assets/About-Animation-Three.json'

// Styles for typography
const typoStyles = {
  fontWeight: 'bold',
  color: '#2196F3', // Bluish text color
  margin: '0 auto', // Center the text horizontally
  opacity: 0, // Start with text hidden
  animation: 'fadeInUp 1s forwards', // Apply animation
}

// Styles for the animation container
const animationContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
}

// Styles for the text container
const textContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: 3,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const About = () => {
  return (
    <Box
      id="About"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on medium and up
        height: {
          xs: '150vh',
          sm: '150vh',
          md: '100vh',
        }, // Full viewport height
        background:
          'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)', // Whitish gradient background
        padding: 2, // Add some padding
        position: 'relative',
        overflow: 'hidden', // Ensure any overflow is hidden
        '@keyframes rotateBackground': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-20%',
          width: '200%',
          height: '200%',
          background:
            'radial-gradient(circle at center, rgba(33,150,243,0.3), transparent)',
          animation: 'rotateBackground 40s linear infinite',
          zIndex: 0,
        }}
      />

      {/* Left Segment with Enhanced Animations */}
      <Box sx={{ flex: 0.6, ...animationContainerStyles, zIndex: 1 }}>
        <Box />
        <Lottie
          animationData={aboutAnimation}
          style={{ width: '50%', height: 'auto', marginTop: '30px' }}
        />
      </Box>

      {/* Right Segment with Improved Text Animations */}
      <Box sx={{ flex: 0.4, ...textContainerStyles, zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{ ...typoStyles, margin: '0 0', textAlign: 'left' }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            ...typoStyles,
            animationDelay: '0.5s',
            fontWeight: 'ultra-thin',
            textAlign: 'left',
          }}
        >
          MediCare is dedicated to simplifying medical record management. Our
          platform is designed to streamline and enhance the accessibility of
          patient information, ensuring a seamless experience for healthcare
          providers and patients alike.
        </Typography>
      </Box>
    </Box>
  )
}

export default About
