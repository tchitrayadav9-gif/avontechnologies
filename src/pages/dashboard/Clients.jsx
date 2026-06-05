import PortalSection from '../../components/dashboard/PortalSection'
import { portalSections } from '../../data/portal'

export default function Clients() {
  return <PortalSection {...portalSections.clients} />
}
