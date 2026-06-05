import { motion } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi2'
import Button from '../common/Button'
import { COMPANY } from '../../utils/constants'

export default function HeroSection() {
  return (
    <section className="gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="section-container relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-cyan-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Enterprise IT Solutions — Hyderabad
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart Client &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Employee Management
              </span>{' '}
              Portal
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {COMPANY.legalName} delivers enterprise software, CRM, ERP/BaaN, and digital transformation solutions that empower modern businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="white" size="lg">
                Get Started
                <HiOutlineArrowRight className="h-5 w-5" />
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <HiOutlinePlay className="h-5 w-5" />
                Explore Services
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-sm text-slate-400">Clients</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-slate-400">Projects</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="text-2xl font-bold text-white">17+</p>
                <p className="text-sm text-slate-400">Years</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Employees', value: '248', color: 'from-blue-500 to-blue-600' },
                  { label: 'Active Clients', value: '156', color: 'from-cyan-500 to-cyan-600' },
                  { label: 'Projects', value: '34', color: 'from-violet-500 to-violet-600' },
                  { label: 'Tickets', value: '18', color: 'from-amber-500 to-amber-600' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <div className={`mb-3 h-1 w-12 rounded-full bg-gradient-to-r ${item.color}`} />
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Project Completion</span>
                  <span className="font-semibold text-cyan-300">78%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary-light/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
