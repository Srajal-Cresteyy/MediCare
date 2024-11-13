import BoxWrapperAnalytics from './BoxWrapperAnalytics'
import { IoBagHandle, IoPieChart } from 'react-icons/io5'

const AdminStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapperAnalytics>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Doctors</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">200</strong>
          </div>
        </div>
      </BoxWrapperAnalytics>
      <BoxWrapperAnalytics>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Nurses</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">200</strong>
          </div>
        </div>
      </BoxWrapperAnalytics>
      <BoxWrapperAnalytics>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Support Staff
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">200</strong>
          </div>
        </div>
      </BoxWrapperAnalytics>
      <BoxWrapperAnalytics>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Branches</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">200</strong>
          </div>
        </div>
      </BoxWrapperAnalytics>
    </div>
  )
}
export default AdminStatsGrid
