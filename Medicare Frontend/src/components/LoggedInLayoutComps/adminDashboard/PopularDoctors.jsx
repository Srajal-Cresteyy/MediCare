import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularDoctors = [
  {
    id: '101',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    thumbnail: 'https://source.unsplash.com/100x100?doctor',
    rating: '4.8',
    patients: 250,
  },
  {
    id: '102',
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    thumbnail: 'https://source.unsplash.com/100x100?dermatologist',
    rating: '4.5',
    patients: 180,
  },
  {
    id: '103',
    name: 'Dr. Emily Johnson',
    specialty: 'Pediatrician',
    thumbnail: 'https://source.unsplash.com/100x100?pediatrician',
    rating: '4.9',
    patients: 320,
  },
  {
    id: '104',
    name: 'Dr. Michael Brown',
    specialty: 'Neurologist',
    thumbnail: 'https://source.unsplash.com/100x100?neurologist',
    rating: '4.6',
    patients: 140,
  },
  {
    id: '105',
    name: 'Dr. Sarah Davis',
    specialty: 'Orthopedic Surgeon',
    thumbnail: 'https://source.unsplash.com/100x100?orthopedic',
    rating: '4.7',
    patients: 200,
  },
]

const PopularDoctors = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]">
      <strong className="text-gray-700 font-medium">Popular Doctors</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularDoctors.map((doctor) => (
          <Link
            key={doctor.id}
            to={`/doctor/${doctor.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={doctor.thumbnail}
                alt={doctor.name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{doctor.name}</p>
              <p className="text-xs text-gray-600">{doctor.specialty}</p>
              <span
                className={classNames(
                  doctor.rating >= 4.8
                    ? 'text-green-500'
                    : doctor.rating >= 4.5
                    ? 'text-orange-500'
                    : 'text-gray-500',
                  'text-xs font-medium'
                )}
              >
                {`Rating: ${doctor.rating}`}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {doctor.patients} patients
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularDoctors
