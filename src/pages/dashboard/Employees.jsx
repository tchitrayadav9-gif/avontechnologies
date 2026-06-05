import PortalSection from '../../components/dashboard/PortalSection'
import { portalSections } from '../../data/portal'

export default function Employees() {
  return <PortalSection {...portalSections.employees} />
}
