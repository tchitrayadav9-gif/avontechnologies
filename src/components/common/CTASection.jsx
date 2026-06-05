import { motion } from 'framer-motion'
import Button from './Button'
import FadeIn from './FadeIn'

export default function CTASection({
  title = 'Ready to Transform Your Business?',
  subtitle = 'Partner with Avon Technologies for enterprise software solutions that drive growth and operational excellence.',
  primaryLabel = 'Get Started',
  primaryTo = '/contact',
  secondaryLabel = 'View Services',
  secondaryTo = '/services',
}) {
  return (
    <section className="section-container py-20">
      <FadeIn>
        <motion.div
          className="gradient-primary relative overflow-hidden rounded-2xl px-8 py-16 text-center sm:px-16"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to={primaryTo} variant="white" size="lg">
                {primaryLabel}
              </Button>
              <Button
                to={secondaryTo}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  )
}
