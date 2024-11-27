import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BACKEND_URL } from '../apiConfig'

const TestComponentDashboard = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = localStorage.getItem('token') // Assume the JWT is stored in localStorage
        const response = await axios.get(`${API_BACKEND_URL}/doctor/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setData(response.data)
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch data.')
      }
    }

    fetchDoctorData()
  }, [])

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div className="doctor-dashboard">
      {data ? (
        <>
          <h1>{data.message}</h1>
          <p>{data.data}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default TestComponentDashboard
