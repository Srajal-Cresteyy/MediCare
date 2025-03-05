import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios' // For API calls

const BookAppointments = () => {
  const { doctorId } = useParams() // Extract doctorId from the route
  const [username, setUsername] = useState('') // Logged-in patient's username
  const [appointmentDate, setAppointmentDate] = useState('') // Appointment date
  const [appointmentTime, setAppointmentTime] = useState('') // Appointment time
  const [appointmentNotes, setAppointmentNotes] = useState('') // Notes for the appointment
  const [message, setMessage] = useState('') // Feedback message for the user

  const theme = useTheme()
  const navigate = useNavigate()

  // Handle appointment form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    try {
      const appointmentDetails = {
        doctorId, // Extracted from the route
        appointmentDate,
        appointmentTime,
        appointmentNotes,
      }

      const response = await axios.post(
        '/patientsApi/bookAppointment',
        appointmentDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      ) // Replace with your backend endpoint

      if (response.status === 200) {
        setMessage('Appointment booked successfully!')
        navigate('/auth/yourAppointments') // Redirect to the patient dashboard
      }
    } catch (error) {
      setMessage('Failed to book appointment. Please try again.')
      console.error('Error booking appointment:', error)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
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
          Book Appointment
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Doctor ID"
            variant="outlined"
            fullWidth
            disabled
            value={doctorId} // Auto-filled doctor ID
          />
          <TextField
            label="Appointment Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
            fullWidth
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
          <TextField
            label="Appointment Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
            fullWidth
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
          <TextField
            label="Appointment Notes"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            value={appointmentNotes}
            onChange={(e) => setAppointmentNotes(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Book Appointment
          </Button>
        </Box>
        {message && (
          <Typography
            sx={{
              marginTop: 2,
              color: message.includes('success') ? 'green' : 'red',
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default BookAppointments
