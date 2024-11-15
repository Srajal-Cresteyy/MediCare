import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/LoggedInLayoutComps/SideNavbar'
import Header from '../components/LoggedInLayoutComps/Header'

const LoggedInLayouts = () => {
  return (
    <div className=" bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <SideNavbar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="h-screen overflow-auto p-4">
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  )
}
export default LoggedInLayouts
