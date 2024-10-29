import { Box, linkClasses, Typography } from '@mui/material'
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../../utilities/constants/SideBarLinks'
import SideNavbarLinks from './SideNavbarLinks'
import { HiOutlineLogout } from 'react-icons/hi'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const typoStyles = {
  fontWeight: 'bold',
  color: 'white', // White text to stand out against the gradient
  animation: 'fadeInScale 1s forwards', // Apply animation
}

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const SideNavbar = () => {
  return (
    <>
      <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white ">
        <div className="flex items-start px-1 py-3">
          <Typography variant="h6" sx={{ ...typoStyles }}>
            MediCare
          </Typography>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => {
            return <SideNavbarLinks item={item} key={item.key} />
          })}
        </div>
        <div className="flex flex-col gap-0.5 pt border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
            return <SideNavbarLinks item={item} key={item.key} />
          })}
          <div className={classNames('text-red-700', linkClass)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            <Typography variant="subtitle1">Logout</Typography>
          </div>
        </div>
      </div>
    </>
  )
}
export default SideNavbar
