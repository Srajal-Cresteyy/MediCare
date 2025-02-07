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
    solvedCases: 4000,
    onGoingCases: 2400,
  },
  {
    name: 'Ricky',
    solvedCases: 3000,
    onGoingCases: 1398,
  },
  {
    name: 'Anu',
    solvedCases: 2400,
    onGoingCases: 1498,
  },
  {
    name: 'Alex',
    solvedCases: 3320,
    onGoingCases: 1198,
  },
  {
    name: 'Aren',
    solvedCases: 1200,
    onGoingCases: 298,
  },
  {
    name: 'Ani',
    solvedCases: 4500,
    onGoingCases: 1313,
  },
  {
    name: 'Sid',
    solvedCases: 3420,
    onGoingCases: 1198,
  },
  {
    name: 'Ari',
    solvedCases: 3130,
    onGoingCases: 198,
  },
  {
    name: 'Avi',
    solvedCases: 3130,
    onGoingCases: 398,
  },
]

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <AdminStatsGrid stats={stats} />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart transactionData={data} roleAccess={'ADMIN'} />
        <DiversityChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentCases />
        <PopularDoctors />
      </div>
    </div>
  )
}
export default Dashboard
