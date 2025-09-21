"use client";

import React from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { chainData, type chainDataType } from "../../lib/hardcoded/chaindata";
import { Copy } from "lucide-react";
import { DataDialog } from "./othersDialog";

const columnHelper = createColumnHelper<chainDataType>();

const columns = [
  columnHelper.accessor("eventType", {
    header: "Event Type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timestamp", {
    header: "Timestamp",
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor("blockchainID", {
    header: "Blockchain ID",
    cell: (info) => {
      const value = info.getValue();
      const shortValue = value.slice(0, 12) + "...";

      const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
      };

      return (
        <div className="flex items-center gap-2">
          <span className="font-mono">{shortValue}</span>
          <button
            onClick={copyToClipboard}
            className="p-1 rounded hover:bg-gray-200"
            title="Copy full ID"
          >
            <Copy size={14} />
          </button>
        </div>
      );
    },
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "details",
    header: "Details",
    cell: (info) => <DataDialog data={info.row.original} />,
  }),
];

export default function ChainTable() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const pageSize = 12;

  const table = useReactTable({
    data: chainData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: { pageIndex, pageSize },
    },
    onPaginationChange: (updater) => {
      const newState = typeof updater === "function" ? updater({ pageIndex, pageSize }) : updater;
      setPageIndex(newState.pageIndex);
    },
  });

  return (
    <div className="p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 border-b text-sm text-gray-600"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
