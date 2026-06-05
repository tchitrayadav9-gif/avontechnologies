import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'
import { departments } from '../../data/company'

export default function Departments() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {departments.map((dept, index) => (
        <FadeIn key={dept.name} delay={index * 0.06}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-shadow rounded-xl bg-card p-5 transition-shadow hover:card-shadow-hover"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-text">{dept.name}</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                {dept.count}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{dept.focus}</p>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  )
}
