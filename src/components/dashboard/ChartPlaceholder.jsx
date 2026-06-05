import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'

const chartBars = [65, 45, 78, 52, 88, 70, 95, 60, 82, 55, 90, 72]

export default function ChartPlaceholder({ title = 'Revenue Overview', subtitle = 'Monthly performance (mock data)' }) {
  return (
    <FadeIn>
      <div className="card-shadow h-full rounded-xl bg-card p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>

        <div className="flex h-48 items-end justify-between gap-2">
          {chartBars.map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary-light"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between text-xs text-muted">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
            (month) => (
              <span key={month} className="hidden sm:inline">
                {month}
              </span>
            ),
          )}
        </div>
      </div>
    </FadeIn>
  )
}
