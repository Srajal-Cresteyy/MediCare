import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}
export default MainLayout
