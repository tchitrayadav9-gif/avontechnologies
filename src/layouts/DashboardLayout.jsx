import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { HiOutlineBars3, HiOutlineBell, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import Sidebar from '../components/dashboard/Sidebar'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-muted hover:bg-slate-100 lg:hidden"
              aria-label="Open sidebar"
            >
              <HiOutlineBars3 className="h-5 w-5" />
            </button>

            <div className="hidden items-center gap-2 rounded-lg bg-surface px-3 py-2 sm:flex">
              <HiOutlineMagnifyingGlass className="h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 bg-transparent text-sm text-text outline-none placeholder:text-muted lg:w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative rounded-lg p-2 text-muted hover:bg-slate-100"
              aria-label="Notifications"
            >
              <HiOutlineBell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <Link
              to="/"
              className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/5 sm:block"
            >
              Back to Website
            </Link>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              AU
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
