import { Link } from 'react-router-dom'
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from 'react-icons/hi2'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { publicNavLinks } from '../../data/navigation'
import { COMPANY } from '../../utils/constants'

const socialLinks = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                AT
              </div>
              <div>
                <span className="text-lg font-bold text-text">{COMPANY.name}</span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-muted">
                  India Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {COMPANY.tagline}. Delivering enterprise software solutions from Hyderabad to businesses worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-muted transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {publicNavLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/dashboard"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Management Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>Enterprise Software</li>
              <li>CRM Solutions</li>
              <li>ERP/BaaN Services</li>
              <li>Web & Mobile Development</li>
              <li>BI Tools & Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <HiOutlineMapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <HiOutlineEnvelope className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <HiOutlinePhone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-primary">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </footer>
  )
}
