import PortalSection from '../../components/dashboard/PortalSection'
import { portalSections } from '../../data/portal'

export default function Settings() {
  return <PortalSection {...portalSections.settings} />
}
