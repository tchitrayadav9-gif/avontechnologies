import DashboardCard from '../components/dashboard/DashboardCard'
import ChartPlaceholder from '../components/dashboard/ChartPlaceholder'
import RecentActivity from '../components/dashboard/RecentActivity'
import ProjectProgress from '../components/dashboard/ProjectProgress'
import FadeIn from '../components/common/FadeIn'
import { dashboardStats } from '../data/dashboard'

export default function Dashboard() {
  return (
    <div>
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">Dashboard Overview</h1>
          <p className="mt-1 text-muted">
            Welcome back! Here&apos;s what&apos;s happening at Avon Technologies today.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {dashboardStats.map((stat, index) => (
          <DashboardCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartPlaceholder />
        </div>
        <div>
          <ChartPlaceholder
            title="Client Distribution"
            subtitle="By industry sector (mock data)"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentActivity />
        <ProjectProgress />
      </div>
    </div>
  )
}
