import { Typography } from '@mui/material'
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_LINKS_ADMIN,
  DASHBOARD_SIDEBAR_LINKS_PATIENT,
  DASHBOARD_SIDEBAR_LINKS_DOCTOR,
} from '../../utilities/constants/SideBarLinks'
import SideNavbarLinks from './SideNavbarLinks'
import { HiOutlineLogout } from 'react-icons/hi'
import classNames from 'classnames'
import { useLogout } from '../../authUtils'
import { useEffect, useState } from 'react'

const typoStyles = {
  fontWeight: 'bold',
  color: 'white', // White text to stand out against the gradient
  animation: 'fadeInScale 1s forwards', // Apply animation
}

const role = localStorage.getItem('role')
console.log('Role : ' + role)

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 rounded-lg text-base transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#2196F3] hover:via-[#2196F3] hover:to-[#2196F3] hover:text-white active:bg-[#2196F3]'

const SideNavbar = () => {
  const [sideNavbarLinks, setSideNavLinks] = useState([])

  useEffect(() => {
    if (role === 'ROLE_USER') setSideNavLinks(DASHBOARD_SIDEBAR_LINKS_PATIENT)
    else if (role === 'ROLE_DOCTOR')
      setSideNavLinks(DASHBOARD_SIDEBAR_LINKS_DOCTOR)
    else if (role === 'ROLE_ADMIN')
      setSideNavLinks(DASHBOARD_SIDEBAR_LINKS_ADMIN)
    else setSideNavLinks(DASHBOARD_SIDEBAR_LINKS)
  }, [role])

  const handleLogOut = useLogout()

  return (
    <div className="bg-gradient-to-r from-[#2196F3] 80% via-[#64B5F6] 10% to-[#21CBF3] w-60 p-3 flex flex-col text-white shadow-2xl">
      <div className="flex items-start px-1 py-3">
        <Typography variant="h6" sx={{ ...typoStyles }}>
          MediCare
        </Typography>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {sideNavbarLinks.map((item) => (
          <SideNavbarLinks item={item} key={item.key} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-4">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideNavbarLinks item={item} key={item.key} />
        ))}
        <div
          className={classNames('text-red-700 cursor-pointer', linkClass)}
          onClick={handleLogOut}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          <Typography variant="subtitle1">Logout</Typography>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
