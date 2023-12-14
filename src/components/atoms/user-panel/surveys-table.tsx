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
  // PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { GridLoader } from "react-spinners";
import { Suspense, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { useRouter } from "next/navigation";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Nazwa",
    width: 300,
    headerClassName: "table-header",
  },
  {
    field: "startDate",
    headerName: "Data rozpoczęcia",
    width: 150,
    headerClassName: "table-header",
  },
  {
    field: "endDate",
    headerName: "Data zakończenia",
    width: 150,
    headerClassName: "table-header",
  },
  {
    field: "link",
    headerName: "Link do ankiety",
    width: 300,
    headerClassName: "table-header",
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.value as string}>{params.value}</Link>
    ),
  },
  {
    field: "analysisLink",
    headerName: "Akcje",
    width: 100,
    headerClassName: "table-header",
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center gap-2">
        <Link
          data-tooltip-id="user-panel-tooltip"
          data-tooltip-content="Analizuj dane i wyświetl wyniki"
          href={params.value as string}
        >
          <ChartPieIcon className="h-6 w-6 text-green-500" />
        </Link>
        <Link
          data-tooltip-id="user-panel-tooltip"
          data-tooltip-content="Edytuj schemat analizy"
          href={`/analysis/schema/${params.id}`}
        >
          <ClipboardDocumentListIcon className="h-6 w-6 text-orange-500" />
        </Link>
        {/* <Link
          data-tooltip-id="user-panel-tooltip"
          data-tooltip-content="Edytuj ankietę"
          href={`/ankiety/${params.id}`}
        >
          <PencilSquareIcon className="h-6 w-6 text-blue-500" />
        </Link> */}
      </div>
    ),
  },
];

const SurveysTable = ({ rows }: { rows: Row[] }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="h-full max-w-full rounded-lg bg-white p-3">
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
      <Tooltip id="user-panel-tooltip" />
    </div>
  );
};

export default SurveysTable;
