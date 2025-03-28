import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_BACKEND_URL } from '../../../apiConfig'

const RecentCases = () => {
  const [recentCases, setRecentCases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecentCases = async () => {
      try {
        const token = localStorage.getItem('token') // Assume the JWT is stored in localStorage
        if (!token) {
          setError('No token found. Please log in again.')
          setLoading(false)
          return
        }

        console.log('Token : ' + token)

        const response = await axios.get(
          `${API_BACKEND_URL}/doctor/recentCases`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setRecentCases(response.data) // Set the correct state here
      } catch (err) {
        setError(
          err.response?.data?.error || err.message || 'Failed to fetch data.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchRecentCases()
  }, [])

  if (loading) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Cases
        </h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Cases
        </h2>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (recentCases.length === 0) {
    return (
      <div className="bg-white px-6 py-6 rounded-lg shadow-md border border-gray-300 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Cases
        </h2>
        <p>No recent cases found for the logged-in doctor.</p>
      </div>
    )
  }

  return (
    <div className="bg-white px-6 pt-4 pb-6 rounded-lg shadow-md border border-gray-300 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Cases</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-gray-700 font-medium">Doctor ID</th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Patient ID
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Patient Name
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">
                Appointment Date
              </th>
              <th className="px-4 py-2 text-gray-700 font-medium">Status</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Address</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Phone</th>
            </tr>
          </thead>
          <tbody>
            {recentCases.map((recentCase, index) => (
              <tr
                key={recentCase.patientID}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-2">
                  <Link to={`doctors/${recentCase.staffID}`}>
                    {recentCase.staffID}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <Link to={`patients/${recentCase.patientID}`}>
                    {recentCase.patientID}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  {recentCase.firstName} {recentCase.lastName}
                </td>
                <td className="px-4 py-2">
                  {new Date(recentCase.dateOfAppointment).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {recentCase.appointmentStatus || 'N/A'}
                </td>
                <td className="px-4 py-2">{recentCase.address}</td>
                <td className="px-4 py-2">{recentCase.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentCases
