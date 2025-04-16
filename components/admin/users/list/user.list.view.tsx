import { JSX } from 'react'

type Props = {
  tableComponent: JSX.Element 
}

export default function UserListView({tableComponent}: Props) {
  return (
    <>{tableComponent}</>
  )
}
