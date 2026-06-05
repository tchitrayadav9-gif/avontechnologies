import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Employees from '../pages/dashboard/Employees'
import Clients from '../pages/dashboard/Clients'
import Projects from '../pages/dashboard/Projects'
import Support from '../pages/dashboard/Support'
import Analytics from '../pages/dashboard/Analytics'
import Settings from '../pages/dashboard/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="clients" element={<Clients />} />
        <Route path="projects" element={<Projects />} />
        <Route path="support" element={<Support />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
