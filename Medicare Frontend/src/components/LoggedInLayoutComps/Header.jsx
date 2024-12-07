import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from 'react-icons/hi'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLogout } from '../../authUtils'

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = useLogout()
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search....."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
        ></input>
      </div>
      <div className="flex  items-center gap-2 mr-3">
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'p-1.2 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">Messages Para</div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'p-1.2 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      Sample Notifications
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="ml-2  inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open User Menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
              >
                <span className="sr-only">Srajal Dwivedi</span>
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate('/profile')}
                    className={classNames(
                      active && 'bg-gray-100',
                      'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                    )}
                  >
                    Profile
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => navigate('/Settings')}
                    className={classNames(
                      active && 'bg-gray-100',
                      'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                    )}
                  >
                    Settings
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={handleLogout}
                    className={classNames(
                      active && 'bg-gray-100',
                      'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                    )}
                  >
                    Logout
                  </div>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
export default Header
