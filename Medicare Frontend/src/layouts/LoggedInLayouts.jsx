import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/LoggedInLayoutComps/SideNavbar'

const LoggedInLayouts = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SideNavbar />
      <div className="p-4">
        <div>{<Outlet />}</div>
      </div>
    </div>
  )
}
export default LoggedInLayouts
