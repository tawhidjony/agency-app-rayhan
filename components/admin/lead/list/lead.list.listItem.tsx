import { Checkbox } from '@/uikit/ui'
import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { LeadEntity } from './lead.list.model'

export default function LeadListListItem() {
    const columns:ColumnDef<LeadEntity>[] = [
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
            accessorKey: 'passport',
            header: () => <span>Passport</span>,
            cell: ({ row }) => {
                const { passport } = row.original
                return (
                <div>
                    <p className="mt-2 mb-4 text-gray-900 font-semibold ">{passport}</p>
                </div>
                )
            }
            
        },
        {
            accessorKey: 'agent',
            header: () => <span>Agent</span>,
            cell: ({ row }) => {
                const { agent } = row.original
                return (
                <div className="mt-2">
                    <p className="font-semibold">{agent?.main}</p>
                    {agent?.subtitle && <p className="text-sm text-gray-500">{agent?.subtitle}</p>}
                </div>
                )
            }
            
        },
        {
            accessorKey: 'source',
            header: 'Lead Source',
            cell: ({ row }) => {
                const { source } = row.original
                return (
                <div>
                    <p className="fmt-2 mb-4 text-gray-900 font-semibold ">{source}</p>
                </div>
                )
            }
            
        },
        {
            accessorKey: 'interest',
            header: 'Interest',
            cell: ({ row }) => {
                const { interest } = row.original
                return (
                <div>
                    <p className="mt-2 mb-4 text-gray-900 font-semibold ">{interest}</p>
                </div>
                )
            }
        },
        {
            accessorKey: 'city',
            header: 'City',
            cell: ({ row }) => {
                const { city } = row.original
                return (
                <div>
                    <p className="mt-2 mb-4 text-gray-900 font-semibold ">{city}</p>
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
        {
            accessorKey: 'date',
            header: 'Date',
            cell: ({ row }) => {
                const { date } = row.original
                return (
                <div className='mt-2'>
                    <p className="font-semibold">{date?.main}</p>
                    {date?.subtitle && <p className="text-sm text-gray-500">{date?.subtitle}</p>}
                </div>
                )
            }
        }
    ]
    return columns
}