import dynamic from 'next/dynamic'
const LeadComponent = dynamic(()=> import("@/components/admin/lead/lead.component"))

export default function Lead() {
  return (
    <LeadComponent />
  )
}