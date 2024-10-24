import React, { useState, useEffect } from 'react'
import { request } from '../axios_helper'

const TestComponent = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    request('GET', 'getTestData', {})
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="row justify-content-md-center">
      <div className="col-4">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Backend response</h5>

            {Object.keys(data).length ? (
              <ul className="list-group list-group-flush">
                {Object.entries(data).map(([key, value]) => (
                  <li className="list-group-item" key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="card-text">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestComponent
