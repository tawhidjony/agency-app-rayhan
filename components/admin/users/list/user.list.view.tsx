import React from "react"

type Props = {
  tableComponent: React.ElementType<any, any>
}

export default function UserListView({tableComponent}: Props) {
  return (
    <>{tableComponent}</>
  )
}
