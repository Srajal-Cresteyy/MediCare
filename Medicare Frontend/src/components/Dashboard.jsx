import AdminStatsGrid from './LoggedInLayoutComps/adminDashboard/AdminStatsGrid'
import DiversityChart from './LoggedInLayoutComps/adminDashboard/DiversityChart'
import TransactionChart from './LoggedInLayoutComps/adminDashboard/TransactionChart'
import RecentCases from './LoggedInLayoutComps/adminDashboard/RecentCases'
import PopularDoctors from './LoggedInLayoutComps/adminDashboard/PopularDoctors'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <AdminStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
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
