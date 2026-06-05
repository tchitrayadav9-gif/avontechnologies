import { HiOutlineLightBulb, HiOutlineEye } from 'react-icons/hi2'
import FadeIn from '../common/FadeIn'
import { missionVision } from '../../data/company'

export default function MissionVision() {
  const items = [
    { ...missionVision.mission, icon: HiOutlineLightBulb, color: 'bg-primary/10 text-primary' },
    { ...missionVision.vision, icon: HiOutlineEye, color: 'bg-accent/10 text-accent-dark' },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.1}>
          <div className="card-shadow h-full rounded-xl bg-card p-8">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${item.color}`}>
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
