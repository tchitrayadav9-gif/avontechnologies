import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import FadeIn from '../common/FadeIn'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group card-shadow flex h-full flex-col rounded-xl bg-card p-6 transition-all hover:card-shadow-hover"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
          <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
        </div>

        <h3 className="text-xl font-semibold text-text">{service.title}</h3>
        <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {service.features && (
          <ul className="mt-4 space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Learn More
          <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </FadeIn>
  )
}
