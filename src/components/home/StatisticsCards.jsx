import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'
import { homeStats } from '../../data/stats'

export default function StatisticsCards() {
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <div className="section-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-shadow rounded-xl bg-card p-6 transition-shadow hover:card-shadow-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-text">{stat.value}</p>
                <p className="mt-1 font-medium text-text">{stat.label}</p>
                <p className="mt-2 text-sm text-accent">{stat.change}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
