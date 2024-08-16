import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}
export default MainLayout
