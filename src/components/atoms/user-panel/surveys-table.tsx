"use client";

import { useContext, useEffect, useState } from "react";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import Link from "next/link";
import { Button } from "@mui/material";
import { UserContext } from "@/components/_auth/user-context";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

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
    headerName: "Link",
    flex: 2,
    headerClassName: "table-header",
  },
  {
    field: "analysisLink",
    headerName: "Link do analizy",
    flex: 1,
    headerClassName: "table-header",
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.value as string}>
        <Button
          variant="contained"
          color="primary"
          className="rounded-xl"
          style={{ padding: "8px 16px" }}
        >
          Analizuj
        </Button>
      </Link>
    ),
  },
];

const SurveysTable = () => {
  const { token } = useContext(UserContext);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    fetch(`${FRONTEND_URL}/surveys/api`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: Row[]) => {
        setRows(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full w-full rounded-lg bg-white p-3">
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        sx={{
          padding: "1px",
        }}
        autoPageSize
      />
    </div>
  );
};

export default SurveysTable;
