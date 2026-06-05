import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineFolderOpen,
  HiOutlineLifebuoy,
  HiOutlineChartBarSquare,
  HiOutlineCog6Tooth,
  HiOutlineXMark,
} from 'react-icons/hi2'
import { dashboardNavLinks } from '../../data/navigation'
import { COMPANY } from '../../utils/constants'

const iconMap = {
  dashboard: HiOutlineSquares2X2,
  employees: HiOutlineUsers,
  clients: HiOutlineBuildingOffice2,
  projects: HiOutlineFolderOpen,
  support: HiOutlineLifebuoy,
  analytics: HiOutlineChartBarSquare,
  settings: HiOutlineCog6Tooth,
}

export default function Sidebar({ isOpen, onClose }) {
  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center gap-2.5 border-b border-slate-200 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
          AT
        </div>
        <div>
          <span className="text-sm font-bold text-text">{COMPANY.name}</span>
          <span className="block text-[10px] font-medium uppercase tracking-wider text-muted">
            Portal
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded-lg p-1.5 text-muted hover:bg-slate-100 lg:hidden"
          aria-label="Close sidebar"
        >
          <HiOutlineXMark className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {dashboardNavLinks.map((link) => {
          const Icon = iconMap[link.icon]
          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted hover:bg-slate-100 hover:text-text'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {link.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="rounded-lg bg-surface p-3">
          <p className="text-xs font-medium text-muted">Logged in as</p>
          <p className="text-sm font-semibold text-text">Admin User</p>
          <p className="text-xs text-muted">admin@avontechnologies.in</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
