import PortalSection from '../../components/dashboard/PortalSection'
import { portalSections } from '../../data/portal'

export default function Analytics() {
  return <PortalSection {...portalSections.analytics} />
}
