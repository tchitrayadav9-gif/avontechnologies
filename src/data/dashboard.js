import {
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineFolderOpen,
  HiOutlineTicket,
  HiOutlineCurrencyRupee,
} from 'react-icons/hi2'

export const dashboardStats = [
  {
    label: 'Total Employees',
    value: '248',
    change: '+8',
    changeType: 'positive',
    icon: HiOutlineUsers,
    color: 'bg-blue-50 text-primary',
  },
  {
    label: 'Active Clients',
    value: '156',
    change: '+12',
    changeType: 'positive',
    icon: HiOutlineBuildingOffice2,
    color: 'bg-cyan-50 text-accent-dark',
  },
  {
    label: 'Ongoing Projects',
    value: '34',
    change: '+3',
    changeType: 'positive',
    icon: HiOutlineFolderOpen,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    label: 'Open Tickets',
    value: '18',
    change: '-5',
    changeType: 'negative',
    icon: HiOutlineTicket,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Revenue (MTD)',
    value: '₹2.4Cr',
    change: '+18%',
    changeType: 'positive',
    icon: HiOutlineCurrencyRupee,
    color: 'bg-emerald-50 text-emerald-600',
  },
]

export const recentActivity = [
  {
    id: 1,
    action: 'New client onboarded',
    detail: 'TechNova Industries signed enterprise contract',
    time: '2 hours ago',
    type: 'client',
  },
  {
    id: 2,
    action: 'Project milestone completed',
    detail: 'CRM Migration Phase 2 — FinServe India',
    time: '4 hours ago',
    type: 'project',
  },
  {
    id: 3,
    action: 'Support ticket resolved',
    detail: 'ERP module sync issue — MedTech Solutions',
    time: '6 hours ago',
    type: 'support',
  },
  {
    id: 4,
    action: 'New employee joined',
    detail: 'Rahul Verma — Senior React Developer',
    time: '1 day ago',
    type: 'employee',
  },
  {
    id: 5,
    action: 'Project kickoff',
    detail: 'Mobile App Development — LogiChain Corp',
    time: '2 days ago',
    type: 'project',
  },
]

export const projectProgress = [
  {
    id: 1,
    name: 'Enterprise Portal — FinServe',
    client: 'FinServe India',
    progress: 78,
    status: 'On Track',
    deadline: 'Jun 30, 2026',
  },
  {
    id: 2,
    name: 'CRM Implementation — MedTech',
    client: 'MedTech Solutions',
    progress: 45,
    status: 'In Progress',
    deadline: 'Aug 15, 2026',
  },
  {
    id: 3,
    name: 'BI Dashboard — LogiChain',
    client: 'LogiChain Corp',
    progress: 92,
    status: 'Near Completion',
    deadline: 'Jun 20, 2026',
  },
  {
    id: 4,
    name: 'Mobile App — RetailMax',
    client: 'RetailMax Pvt Ltd',
    progress: 32,
    status: 'In Progress',
    deadline: 'Sep 10, 2026',
  },
]
