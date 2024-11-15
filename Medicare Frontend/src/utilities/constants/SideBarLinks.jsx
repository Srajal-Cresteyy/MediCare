import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineDeviceMobile,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/auth/dashboard',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'Doctors',
    label: 'Doctors',
    path: '/doctors',
    icon: <HiOutlineUser />,
  },
  {
    key: 'Patients',
    label: 'Patients',
    path: '/patients',
    icon: <HiOutlineDeviceMobile />,
  },
  {
    key: 'Staff',
    label: 'Staff',
    path: '/staff',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'transactions',
    label: 'Transactions',
    path: '/transactions',
    icon: <HiOutlineDocumentText />,
  },
  {
    key: 'Feedbacks',
    label: 'Feedbacks',
    path: '/feedbacks',
    icon: <HiOutlineAnnotation />,
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
]
