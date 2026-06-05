import { HiOutlineCheckBadge } from 'react-icons/hi2'
import FadeIn from '../common/FadeIn'
import { whyChoose } from '../../data/company'

export default function WhyChoose() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {whyChoose.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.08}>
          <div className="flex gap-4 rounded-xl bg-card p-6 card-shadow">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <HiOutlineCheckBadge className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
