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
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 ">
      <strong className="text-gray-700 font-medium">Recent Cases</strong>
      <div className="mt-3">
        <table>
          <thead>
            <td>Doctor Id</td>
            <td>Patient Id</td>
            <td>Patient Name</td>
            <td>Date</td>
            <td>Total</td>
            <td>Current Status</td>
            <td>Patient Address</td>
          </thead>
          <tbody>
            {recentCases.map((recentCase) => {
              return (
                <tr key={recentCase.id}>
                  <td>{recentCase.doctor_id}</td>
                  <td>{recentCase.patient_id}</td>
                  <td>{recentCase.patient_name}</td>
                  <td>{recentCase.date}</td>
                  <td>{recentCase.total}</td>
                  <td>{recentCase.current_status}</td>
                  <td>{recentCase.patient_address}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default RecentCases
