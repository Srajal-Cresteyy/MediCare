import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { API_BACKEND_URL } from '../../../apiConfig'

const DoctorsAvailable = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem('token') // JWT from localStorage
        if (!token) {
          setError('No token found. Please log in again.')
          setLoading(false)
          return
        }

        const response = await axios.get(
          `${API_BACKEND_URL}/medicareApi/doctorInfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setDoctors(response.data) // Assuming response is a list of DoctorDto objects
      } catch (err) {
        setError(
          err.response?.data?.error || err.message || 'Failed to fetch data.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const handleAction = (action, doctorId) => {
    switch (action) {
      case 'book':
        navigate(`/auth/book-appointment/${doctorId}`) // Correct path
        break
      case 'feedback':
        navigate(`/auth/give-feedback/${doctorId}`)
        break
      case 'testimonials':
        navigate(`/auth/doctor-testimonials/${doctorId}`)
        break
      default:
        break
    }
  }

  if (loading) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Doctors Available
        </h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Doctors Available
        </h2>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (doctors.length === 0) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Doctors Available
        </h2>
        <p>No doctors are currently available.</p>
      </div>
    )
  }

  return (
    <div className="bg-white px-6 pt-4 pb-6 rounded-lg shadow-md border border-gray-300 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Doctors Available
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-gray-700 font-medium">Doctor ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Name</th>
              <th className="px-4 py-2 text-gray-700 font-medium">UserName</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Position</th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Department
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">Contact</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={doctor.staffID}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-2">{doctor.staffID}</td>
                <td className="px-4 py-2">
                  {doctor.firstName} {doctor.lastName}
                </td>
                <td className="px-4 py-2">
                  <Link to={`doctors/${doctor.staffID}`}>
                    {doctor.staffUserName}
                  </Link>
                </td>
                <td className="px-4 py-2">{doctor.position}</td>
                <td className="px-4 py-2">{doctor.staffDepartment}</td>
                <td className="px-4 py-2">{doctor.contactNumber}</td>
                <td className="px-4 py-2">
                  <select
                    className="border border-gray-300 rounded px-2 py-1"
                    defaultValue=""
                    onChange={(e) =>
                      handleAction(e.target.value, doctor.staffID)
                    }
                  >
                    <option value="" disabled>
                      Action
                    </option>
                    <option value="book">Book Appointment</option>
                    <option value="feedback">Give Feedback</option>
                    <option value="testimonials">Doctor Testimonials</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DoctorsAvailable
