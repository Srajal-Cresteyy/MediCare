import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BACKEND_URL } from '../../../apiConfig'

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token') // JWT from localStorage
        if (!token) {
          setError('No token found. Please log in again.')
          setLoading(false)
          return
        }

        const response = await axios.get(
          `/patientsApi/myAppointments`, // Endpoint for fetching appointment data
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setAppointments(response.data) // Assuming response is a list of AppointmentRequest objects
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

  if (loading) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Appointment Details
        </h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Appointment Details
        </h2>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (appointments.length === 0) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Appointment Details
        </h2>
        <p>No appointments found.</p>
      </div>
    )
  }

  console.log('Appointments : ', appointments)
  return (
    <div className="bg-white px-6 pt-4 pb-6 rounded-lg shadow-md border border-gray-300 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Appointment Details
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-gray-700 font-medium">Doctor ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Appointment Date
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Appointment Time
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={appointment.appointmentId}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-2">{appointment.doctorId}</td>
                <td className="px-4 py-2">
                  {appointment.appointmentDate[0]} -
                  {appointment.appointmentDate[1]} -
                  {appointment.appointmentDate[2]}
                </td>
                <td className="px-4 py-2">{appointment.appointmentTime}</td>
                <td className="px-4 py-2">{appointment.appointmentNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PatientAppointments