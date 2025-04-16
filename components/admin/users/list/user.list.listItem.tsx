import { UserEntity } from '@/common'
import { Checkbox } from '@/uikit/ui'
import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'

export default function UserListListItem() {
    const columns:ColumnDef<UserEntity>[] = [
        {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
            id='select-all-leads'
            {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
            }}
            />
        ),
        cell: ({ row }) => (
            <div className="">
            <Checkbox
                id={`select-lead-${row.id}`}
                {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
                }}
            />
            </div>
        ),
        },
        {
            accessorKey: 'name',
            header: 'Name',
            cell: ({ row }) => {
                const { name } = row.original
                return (<>
                <div className="flex flex-col gap-1">
                    <div className="text-gray-500">{name}</div>
                </div>
                <div className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition`} >
                    <div className="flex gap-2 mt-2">
                    <Link href={"#"} className="text-blue-500 cursor-pointer">
                        Edit
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href={"#"} className="text-red-500 cursor-pointer" >
                        Trash
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href={"#"} className="text-blue-500 cursor-pointer" >
                        View Application
                    </Link>
                    </div>
                </div> 
                </>)
            },

        },
        {
            accessorKey: 'username',
            header: () => <span>Username</span>,
            cell: ({ row }) => {
                const { username } = row.original
                return (
                <div>
                    <p className="mt-2 mb-4 text-gray-900 font-semibold ">{username}</p>
                </div>
                )
            }
            
        },
        {
            accessorKey: 'email',
            header: () => <span>Email</span>,
            cell: ({ row }) => {
                const { email } = row.original
                return (
                <div className="mt-2">
                    <p className="font-semibold">{email}</p>
                </div>
                )
            }
            
        },
        {
            accessorKey: 'phone',
            header: 'Phone',
            cell: ({ row }) => {
                const { phone } = row.original
                return (
                <div>
                    <p className="fmt-2 mb-4 text-gray-900 font-semibold ">{phone}</p>
                </div>
                )
            }
            
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const { status } = row.original
                return (
                <div>
                    <span className="px-3 py-2 text-sm font-medium rounded bg-green-700 text-white">{status}</span>
                </div>
                )
            }
        },
        
    ]
    return columns
}