import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'
import { projectProgress } from '../../data/dashboard'

const statusColors = {
  'On Track': 'bg-emerald-50 text-emerald-600',
  'In Progress': 'bg-blue-50 text-blue-600',
  'Near Completion': 'bg-violet-50 text-violet-600',
}

export default function ProjectProgress() {
  return (
    <FadeIn delay={0.15}>
      <div className="card-shadow rounded-xl bg-card p-6">
        <h3 className="text-lg font-semibold text-text">Project Progress</h3>
        <p className="text-sm text-muted">Ongoing project status overview</p>

        <div className="mt-6 space-y-5">
          {projectProgress.map((project) => (
            <div key={project.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text">{project.name}</p>
                  <p className="text-xs text-muted">{project.client}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <span className="text-sm font-semibold text-text">{project.progress}%</span>
              </div>
              <p className="mt-1 text-xs text-muted">Deadline: {project.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
