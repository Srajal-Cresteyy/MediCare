import AdminStatsGrid from './LoggedInLayoutComps/adminDashboard/AdminStatsGrid'
import DiversityChart from './LoggedInLayoutComps/adminDashboard/DiversityChart'
import TransactionChart from './LoggedInLayoutComps/adminDashboard/TransactionChart'
import RecentCases from './LoggedInLayoutComps/adminDashboard/RecentCases'
import PopularDoctors from './LoggedInLayoutComps/adminDashboard/PopularDoctors'

const data = [
  {
    name: 'John',
    'No Of Appointments': 100,
  },
  {
    name: 'Ricky',
    'No Of Appointments': 100,
  },
  {
    name: 'Anu',
    'No Of Appointments': 100,
  },
  {
    name: 'Alex',
    'No Of Appointments': 100,
  },
  {
    name: 'Aren',
    'No Of Appointments': 100,
  },
  {
    name: 'Ani',
    'No Of Appointments': 100,
  },
  {
    name: 'Sid',
    'No Of Appointments': 100,
  },
  {
    name: 'Ari',
    'No Of Appointments': 100,
  },
  {
    name: 'Avi',
    'No Of Appointments': 100,
  },
]

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart transactionData={data} roleAccess={'DOCTOR'} />
        <DiversityChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentCases />
        <PopularDoctors />
      </div>
    </div>
  )
}
export default DoctorDashboard
