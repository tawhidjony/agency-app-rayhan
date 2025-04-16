import { JSX } from 'react'

type Props = {
  tableComponent: JSX.Element 
}

export default function LeadListView({tableComponent}: Props) {
  return (
    <>{tableComponent}</>
  )
}
