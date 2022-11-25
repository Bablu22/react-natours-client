import {
    HiUser,
    HiViewGridAdd
} from 'react-icons/hi'
import { FaRegEdit, FaUserLock, FaBookmark, FaUsers, FaUsersSlash, FaCartArrowDown } from "react-icons/fa"
import { ImStatsDots } from "react-icons/im"

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'profile',
        label: 'Your Profile',
        path: '/dashboard',
        icon: <HiUser />
    },
    {
        key: 'edit',
        label: 'Update Profile',
        path: '/dashboard/edit-profile',
        icon: <FaRegEdit />
    },
    {
        key: 'password',
        label: 'Change Password',
        path: '/dashboard/change-password',
        icon: <FaUserLock />
    },
    {
        key: 'bookings',
        label: 'Bookings',
        path: '/dashboard/bookings',
        icon: <FaBookmark />
    },

]

export const DASHBOARD_SIDEBAR_ADMIN = [
    {
        key: 'addtour',
        label: 'Upload Tour',
        path: '/dashboard/add-tour',
        icon: <HiViewGridAdd />
    },
    {
        key: 'users',
        label: 'Active Users',
        path: '/dashboard/all-users',
        icon: <FaUsers />
    },
    {
        key: 'users',
        label: 'Deactivated Users',
        path: '/dashboard/deactive-users',
        icon: <FaUsersSlash />
    },
    {
        key: 'allbookings',
        label: 'All Bookings',
        path: '/dashboard/all-bookings',
        icon: <FaCartArrowDown />
    },
    {
        key: 'stats',
        label: 'Tour Stats',
        path: '/dashboard/stats',
        icon: <ImStatsDots />
    },
]
