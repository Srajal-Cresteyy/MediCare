import { Typography } from '@mui/material'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const SideNavbarLinks = ({ item }) => {
  const { pathname } = useLocation()

  return (
    <NavLink
      to={item.path}
      className={classNames(
        pathname === item.path ? 'bg-neutral-700 text-white' : 'text-gray-400',
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
