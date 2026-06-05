import PortalSection from '../../components/dashboard/PortalSection'
import { portalSections } from '../../data/portal'

export default function Projects() {
  return <PortalSection {...portalSections.projects} />
}
