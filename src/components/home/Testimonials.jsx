import { motion } from 'framer-motion'
import { HiOutlineStar } from 'react-icons/hi2'
import SectionHeading from '../common/SectionHeading'
import FadeIn from '../common/FadeIn'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="section-container">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="Hear from our clients who have transformed their businesses with Avon Technologies."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-shadow h-full rounded-xl bg-card p-6 transition-shadow hover:card-shadow-hover"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <HiOutlineStar key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted italic">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
