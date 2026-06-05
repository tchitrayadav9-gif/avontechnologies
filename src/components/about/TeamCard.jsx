import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'

export default function TeamCard({ member, index = 0 }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        className="card-shadow group rounded-xl bg-card p-6 text-center transition-shadow hover:card-shadow-hover"
      >
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${member.color} text-2xl font-bold text-white transition-transform group-hover:scale-105`}
        >
          {member.initials}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-text">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
        <p className="mt-2 text-xs text-muted">{member.department}</p>
      </motion.div>
    </FadeIn>
  )
}
