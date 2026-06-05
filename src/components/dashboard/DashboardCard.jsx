import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'

export default function DashboardCard({ stat, index = 0 }) {
  const Icon = stat.icon

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        className="card-shadow rounded-xl bg-card p-6 transition-shadow hover:card-shadow-hover"
      >
        <div className="flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              stat.changeType === 'positive'
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-red-50 text-red-600'
            }`}
          >
            {stat.change}
          </span>
        </div>
        <p className="mt-4 text-2xl font-bold text-text">{stat.value}</p>
        <p className="mt-1 text-sm text-muted">{stat.label}</p>
      </motion.div>
    </FadeIn>
  )
}
