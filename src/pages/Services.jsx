import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="gradient-primary py-16 text-center">
        <div className="section-container">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Our Services
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Enterprise IT Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Comprehensive technology services designed to accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <SectionHeading
          badge="What We Offer"
          title="End-to-End Technology Services"
          subtitle="From strategy to implementation and support — Avon Technologies covers every aspect of your IT needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        subtitle="Our experts will analyze your requirements and design a tailored technology roadmap for your business."
        primaryLabel="Request Consultation"
        primaryTo="/contact"
        secondaryLabel="Learn About Us"
        secondaryTo="/about"
      />
    </>
  )
}
