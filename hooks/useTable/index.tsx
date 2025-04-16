"use client"
import { UserEntity } from "@/common";
import { cn } from "@/uikit";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchList } from "../useFetch";
import Pagination from "./pagination";
import { TableHookProps } from "./types";

const useTable = <T,> ({tableHeader, dataSource, tableFilter, fetchList}:TableHookProps<T>) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
    const pageSize = 2;
    const [rowSelection, setRowSelection] =  useState({})


    useEffect(() => {
        router.push(`?page=${page}`);
    }, [page, router]);

    const  tableData = useFetchList<UserEntity>({ 
        page:page, 
        perPage:pageSize, 
        queryKey: fetchList.queryKey, 
        queryFnApi: fetchList.queryFnApi
    })

    const table = useReactTable({
        data: tableData && tableData?.data?.items || [],
        columns:tableHeader,
        state: {
          rowSelection,
          pagination: {
            pageIndex: 0,
            pageSize: pageSize,
          },
        },
        enableRowSelection: true, 
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    const component = () => (<>
      {tableFilter(table)}
      <table className="min-w-full bg-white shadow-md" >
        <thead className="bg-white border-b border-gray-200 shadow p-4">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="px-4 py-3 text-gray-500 text-left" >
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id} className={cn("cursor-pointer transition group hover:bg-gray-100 relative h-24 odd: bg-gray-100 even:bg-white" )} >
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className="p-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination table={table} tableData={tableData} page={page} setPage={setPage} />
    </>)


    return {
        component,
        tableData,
        table,
    }
}

export default useTable;