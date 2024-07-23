import {
	HiOutlineCog,
	HiOutlineCube,
	HiOutlineExclamation,
	HiOutlineMap,
	HiOutlineQuestionMarkCircle,
	HiOutlineUsers,
	HiOutlineViewGrid
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'sites',
		label: 'Sites',
		path: '/sites',
		icon: <HiOutlineMap />
	},
	{
		key: 'equipements',
		label: 'Equipements',
		path: '/equipments',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
/*
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	}
*/,
	{
		key: 'alert',
		label: 'Alerts',
		path: '/alerts',
		icon: <HiOutlineExclamation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'HelpAndSupports',
		path: '/helpandsupports',
		icon: <HiOutlineQuestionMarkCircle />
	},
]
