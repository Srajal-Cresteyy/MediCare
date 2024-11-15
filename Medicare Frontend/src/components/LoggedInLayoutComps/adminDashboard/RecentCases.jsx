import { Link } from 'react-router-dom'

const recentCases = [
  {
    id: '1',
    doctor_id: '4324',
    patient_id: '23143',
    patient_name: 'Shirley A. Lape',
    date: '2022-05-17T03:24:00',
    total: '$435.50',
    current_status: 'Closed',
    patient_address: 'Cottage Grove, OR 97424',
  },
  {
    id: '7',
    doctor_id: '7453', // Renamed from 'product_id'
    patient_id: '96453', // Renamed from 'customer_id'
    patient_name: 'Ryan Carroll', // Renamed from 'customer_name'
    date: '2022-05-14T05:24:00', // Renamed from 'order_date'
    total: '$96.35', // Renamed from 'order_total'
    current_status: 'CONFIRMED', // Renamed from 'current_order_status'
    patient_address: 'Los Angeles, CA 90017', // Renamed from 'shipment_address'
  },
  {
    id: '2',
    doctor_id: '5434',
    patient_id: '65345',
    patient_name: 'Mason Nash',
    date: '2022-05-17T07:14:00',
    total: '$836.44',
    current_status: 'SHIPPED',
    patient_address: 'Westminster, CA 92683',
  },
  {
    id: '3',
    doctor_id: '9854',
    patient_id: '87832',
    patient_name: 'Luke Parkin',
    date: '2022-05-16T12:40:00',
    total: '$334.50',
    current_status: 'SHIPPED',
    patient_address: 'San Mateo, CA 94403',
  },
  {
    id: '4',
    doctor_id: '8763',
    patient_id: '09832',
    patient_name: 'Anthony Fry',
    date: '2022-05-14T03:24:00',
    total: '$876.00',
    current_status: 'OUT_FOR_DELIVERY',
    patient_address: 'San Mateo, CA 94403',
  },
  {
    id: '5',
    doctor_id: '5627',
    patient_id: '97632',
    patient_name: 'Ryan Carroll',
    date: '2022-05-14T05:24:00',
    total: '$96.35',
    current_status: 'DELIVERED',
    patient_address: 'Los Angeles, CA 90017',
  },
]

const RecentCases = () => {
  return (
    <div className="bg-white px-6 pt-4 pb-6 rounded-lg shadow-md border border-gray-300 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Cases</h2>
      {/* Add max-width and horizontal scroll */}
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
              <th className="px-4 py-2 text-gray-700 font-medium">Date</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Total</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Status</th>
              <th className="px-4 py-2 text-gray-700 font-medium">Address</th>
            </tr>
          </thead>
          <tbody>
            {recentCases.map((recentCase, index) => (
              <tr
                key={recentCase.id}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-2">
                  <Link to={`doctors/${recentCase.doctor_id}`}>
                    {recentCase.doctor_id}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <Link to={`doctors/${recentCase.patient_id}`}>
                    {recentCase.patient_id}
                  </Link>
                </td>
                <td className="px-4 py-2">{recentCase.patient_name}</td>
                <td className="px-4 py-2">
                  {new Date(recentCase.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{recentCase.total}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    recentCase.current_status === 'Closed'
                      ? 'text-green-600'
                      : recentCase.current_status === 'OUT_FOR_DELIVERY'
                      ? 'text-orange-600'
                      : 'text-gray-600'
                  }`}
                >
                  {recentCase.current_status}
                </td>
                <td className="px-4 py-2">{recentCase.patient_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentCases
