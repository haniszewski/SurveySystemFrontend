"use client";

import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import Link from "next/link";
import {
  ChartPieIcon,
  ClipboardDocumentListIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { GridLoader } from "react-spinners";
import { Suspense } from "react";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Nazwa",
    flex: 2,
    headerClassName: "table-header",
  },
  {
    field: "startDate",
    headerName: "Data rozpoczęcia",
    flex: 1,
    headerClassName: "table-header",
  },
  {
    field: "endDate",
    headerName: "Data zakończenia",
    flex: 1,
    headerClassName: "table-header",
  },
  {
    field: "link",
    headerName: "Link do ankiety",
    flex: 2,
    headerClassName: "table-header",
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.value as string}>{params.value}</Link>
    ),
  },
  {
    field: "analysisLink",
    headerName: "Akcje",
    flex: 0.7,
    headerClassName: "table-header",
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center gap-2">
        <Link href={params.value as string}>
          <ChartPieIcon className="h-6 w-6 text-green-500" />
        </Link>
        <Link href={`/analysis/schema/${params.id}`}>
          <ClipboardDocumentListIcon className="h-6 w-6 text-orange-500" />
        </Link>
        <Link href={`/ankiety/${params.id}`}>
          <PencilSquareIcon className="h-6 w-6 text-blue-500" />
        </Link>
      </div>
    ),
  },
];

const SurveysTable = ({ rows }: { rows: Row[] }) => {
  return (
    <div className="h-full w-5/6 rounded-lg bg-white p-3">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center ">
            <GridLoader color="#3486eb" />
          </div>
        }
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          sx={{
            padding: "1px",
          }}
          autoPageSize
        />
      </Suspense>
    </div>
  );
};

export default SurveysTable;
