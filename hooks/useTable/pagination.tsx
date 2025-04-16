"use client";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type PaginationProps ={
    table:any
    tableData?:any;
    page:any;
    setPage:any;
}

const Pagination: React.FC<PaginationProps> = ({table, tableData, page, setPage}) => {
  console.log(table);
  // const totalItems = table.getFilteredRowModel().rows.length;
  
  return (
    <div className="flex items-center justify-end mt-4 p-4">
      {/* Total Items */}
      {/* {totalItems && (
        <span className="text-gray-400 mr-4">{totalItems} Items</span>
      )} */}

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdKeyboardDoubleArrowLeft size={25} />
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardArrowLeft size={25} />
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of  {" "}
            {tableData && tableData?.data?.total_pages || 0}
          </strong>
        </span>

        <button
         onClick={() => setPage(page + 1)}
         disabled={!table.getCanNextPage()}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:bg-gray-300 cursor-pointer"
        >
          <MdKeyboardArrowRight size={25} />
        </button>
        <button
         onClick={() => table.setPageIndex(table.getPageCount() - 1)}
         disabled={!table.getCanNextPage()}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:bg-gray-300 cursor-pointer"
        >
          <MdKeyboardDoubleArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
