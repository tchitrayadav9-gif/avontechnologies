import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import MissionVision from '../components/about/MissionVision'
import WhyChoose from '../components/about/WhyChoose'
import Departments from '../components/about/Departments'
import TeamCard from '../components/about/TeamCard'
import FadeIn from '../components/common/FadeIn'
import { growthMetrics } from '../data/company'
import { team } from '../data/team'
import { COMPANY } from '../utils/constants'

export default function About() {
  return (
    <>
      <section className="gradient-primary py-16 text-center">
        <div className="section-container">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {COMPANY.legalName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            A trusted enterprise technology partner based in {COMPANY.location}, delivering innovative software solutions since {COMPANY.founded}.
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <SectionHeading
          badge="Purpose"
          title="Mission & Vision"
          subtitle="Driving digital excellence for enterprises across India and beyond."
        />
        <MissionVision />
      </section>

      <section className="bg-surface py-20">
        <div className="section-container">
          <SectionHeading
            badge="Why Avon"
            title="Why Choose Avon Technologies"
            subtitle="What sets us apart in the competitive enterprise IT landscape."
          />
          <WhyChoose />
        </div>
      </section>

      <section className="section-container py-20">
        <SectionHeading
          badge="Organization"
          title="Our Departments"
          subtitle="A diverse team of 250+ professionals across specialized divisions."
        />
        <Departments />
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="section-container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {growthMetrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-muted">{metric.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <SectionHeading
          badge="Leadership"
          title="Meet Our Team"
          subtitle="Experienced leaders driving innovation and client success."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
