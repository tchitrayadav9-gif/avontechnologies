import FadeIn from '../common/FadeIn'
import { recentActivity } from '../../data/dashboard'

const typeColors = {
  client: 'bg-blue-100 text-blue-600',
  project: 'bg-violet-100 text-violet-600',
  support: 'bg-amber-100 text-amber-600',
  employee: 'bg-emerald-100 text-emerald-600',
}

export default function RecentActivity() {
  return (
    <FadeIn delay={0.1}>
      <div className="card-shadow rounded-xl bg-card p-6">
        <h3 className="text-lg font-semibold text-text">Recent Activity</h3>
        <p className="text-sm text-muted">Latest updates across the portal</p>

        <div className="mt-6 space-y-4">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
            >
              <span
                className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${typeColors[item.type]}`}
              >
                {item.type}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-text">{item.action}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
              <span className="shrink-0 text-xs text-muted">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
