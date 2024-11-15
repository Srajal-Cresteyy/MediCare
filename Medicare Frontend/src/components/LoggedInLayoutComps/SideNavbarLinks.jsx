import { Typography } from '@mui/material'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 rounded-lg text-base transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#2196F3] hover:via-[#2196F3] hover:to-[#2196F3] hover:text-white active:bg-[#2196F3]'

const SideNavbarLinks = ({ item }) => {
  const { pathname } = useLocation()

  return (
    <NavLink
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'bg-[#2196F3] rounded-lg text-white'
          : 'text-white-400',
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 'thin' }}
        key={item.key}
      >
        {item.label}
      </Typography>
    </NavLink>
  )
}

export default SideNavbarLinks
