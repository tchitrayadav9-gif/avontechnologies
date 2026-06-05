import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { publicNavLinks } from '../../data/navigation'
import { COMPANY } from '../../utils/constants'
import Button from './Button'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-muted hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="section-container flex h-16 items-center justify-between lg:h-18">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            AT
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-text">{COMPANY.name}</span>
            <span className="block text-[10px] font-medium uppercase tracking-wider text-muted">
              India Pvt. Ltd.
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {publicNavLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/dashboard" variant="ghost" size="sm">
            Portal
          </Button>
          <Button to="/contact" variant="primary" size="sm">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <HiOutlineXMark className="h-6 w-6" />
          ) : (
            <HiOutlineBars3 className="h-6 w-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {publicNavLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="block rounded-lg px-4 py-3 hover:bg-slate-50">
                    {link.label}
                  </span>
                </NavLink>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-4">
                <Button to="/dashboard" variant="outline" size="sm" onClick={() => setMobileOpen(false)}>
                  Portal
                </Button>
                <Button to="/contact" variant="primary" size="sm" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
