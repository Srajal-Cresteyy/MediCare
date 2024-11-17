import AdminStatsGrid from './LoggedInLayoutComps/adminDashboard/AdminStatsGrid'
import DiversityChart from './LoggedInLayoutComps/adminDashboard/DiversityChart'
import TransactionChart from './LoggedInLayoutComps/adminDashboard/TransactionChart'
import RecentCases from './LoggedInLayoutComps/adminDashboard/RecentCases'
import PopularDoctors from './LoggedInLayoutComps/adminDashboard/PopularDoctors'

const stats = [
  {
    attribute: 'Doctors',
    value: 100,
  },
  {
    attribute: 'Nurses',
    value: 200,
  },
  {
    attribute: 'Support Staff',
    value: 300,
  },
  {
    attribute: 'Branches',
    value: 400,
  },
]

const data = [
  {
    name: 'John',
    feedback: 100,
  },
  {
    name: 'Ricky',
    feedback: 100,
  },
  {
    name: 'Anu',
    feedback: 100,
  },
  {
    name: 'Alex',
    feedback: 100,
  },
  {
    name: 'Aren',
    feedback: 100,
  },
  {
    name: 'Ani',
    feedback: 100,
  },
  {
    name: 'Sid',
    feedback: 100,
  },
  {
    name: 'Ari',
    feedback: 100,
  },
  {
    name: 'Avi',
    feedback: 100,
  },
]

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <AdminStatsGrid stats={stats} />
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
