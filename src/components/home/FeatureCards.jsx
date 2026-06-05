import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import FadeIn from '../common/FadeIn'
import { features } from '../../data/features'

export default function FeatureCards() {
  return (
    <section className="section-container py-20">
      <SectionHeading
        badge="Our Capabilities"
        title="Comprehensive Enterprise Solutions"
        subtitle="From CRM to ERP, web to mobile — Avon Technologies delivers end-to-end IT services tailored for your business."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="group card-shadow h-full rounded-xl bg-card p-6 transition-all hover:card-shadow-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
