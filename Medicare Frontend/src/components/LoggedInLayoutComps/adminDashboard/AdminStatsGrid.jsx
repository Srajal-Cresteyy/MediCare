import BoxWrapperAnalytics from './BoxWrapperAnalytics'
import { IoBagHandle, IoPieChart } from 'react-icons/io5'

const AdminStatsGrid = ({ stats = [] }) => {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      {stats.map((stat, index) => (
        <BoxWrapperAnalytics key={index}>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            {stat.icon || <IoBagHandle className="text-2xl text-white" />}
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              {stat.attribute}
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {stat.value}
              </strong>
            </div>
          </div>
        </BoxWrapperAnalytics>
      ))}
    </div>
  )
}

export default AdminStatsGrid
