import dynamic from 'next/dynamic'
const UserListComponent = dynamic(() => import('@/components/admin/users/list/user.list.component'))
export default function User() {
  return (
    <UserListComponent />
  )
}