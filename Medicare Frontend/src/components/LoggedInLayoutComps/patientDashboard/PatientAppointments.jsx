import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { API_BACKEND_URL } from '../../../apiConfig'
import './patientDashboardStyles/calendarStyles.css' // Custom styles for better UI

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          setError('No token found. Please log in again.')
          setLoading(false)
          return
        }

        const response = await axios.get(`/patientsApi/myAppointments`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        setAppointments(response.data)
      } catch (err) {
        setError(
          err.response?.data?.error || err.message || 'Failed to fetch data.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  const handleDateClick = (date) => {
    setSelectedDate(date)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const formattedAppointments = appointments.map((appointment) => {
    const [year, month, day] = appointment.appointmentDate
    return { ...appointment, date: new Date(year, month - 1, day) }
  })

  const tileClassName = ({ date }) => {
    return formattedAppointments.some(
      (appt) => appt.date.toDateString() === date.toDateString()
    )
      ? 'highlighted-date'
      : 'un-highlighted-date'
  }

  const selectedAppointments = formattedAppointments.filter(
    (appt) => appt.date.toDateString() === selectedDate?.toDateString()
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Your Appointments
      </h2>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={tileClassName}
        className="custom-calendar"
      />

      <Modal open={open} onClose={handleClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition duration-300"
          >
            ✖
          </button>

          {/* Modal Title */}
          <Typography
            variant="h6"
            component="h2"
            className="text-lg font-semibold text-gray-800 mb-4"
          >
            📅{selectedDate?.toDateString()}
          </Typography>

          {/* Appointment List */}
          {selectedAppointments.length > 0 ? (
            <ul className="space-y-3">
              {selectedAppointments.map((appt) => (
                <li
                  key={appt.appointmentId}
                  className="border p-3 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-300"
                >
                  <p className="text-gray-700">
                    <strong className="text-blue-600">Doctor ID:</strong>{' '}
                    {appt.doctorId}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Time:</strong>{' '}
                    {appt.appointmentTime}
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-red-500">Notes:</strong>{' '}
                    {appt.appointmentNotes || 'N/A'}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 mt-3">
              No appointments on this day.
            </p>
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default PatientAppointments
