import { HiOutlineCheckCircle } from 'react-icons/hi2'
import SectionHeading from '../common/SectionHeading'
import FadeIn from '../common/FadeIn'
import { companyIntro } from '../../data/company'

export default function CompanyIntro() {
  return (
    <section className="section-container py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn direction="left">
          <SectionHeading
            badge="About Avon"
            title={companyIntro.title}
            subtitle={companyIntro.description}
            align="left"
          />
          <ul className="space-y-4">
            {companyIntro.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <HiOutlineCheckCircle className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn direction="right" delay={0.15}>
          <div className="relative">
            <div className="card-shadow rounded-2xl bg-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Enterprise Software', icon: '💻' },
                  { label: 'CRM Solutions', icon: '🤝' },
                  { label: 'ERP/BaaN', icon: '🏢' },
                  { label: 'BI & Analytics', icon: '📊' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-surface p-5 text-center transition-colors hover:bg-primary/5"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <p className="mt-2 text-sm font-semibold text-text">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
