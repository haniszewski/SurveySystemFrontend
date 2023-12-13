import Link from "next/link";
import { notFound } from "next/navigation";
import { headers, cookies } from "next/headers";
import SurveysTable from "@/components/atoms/user-panel/surveys-table";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export default async function Index() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/get-all/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies().get("token")?.value ?? "",
      },
    });

    const data = (await res.json()) as RowsApiResponse;

    const rows = data.map((row) => ({
      id: row.id,
      title: row.name,
      startDate: row.start_date,
      endDate: row.end_date,
      link: `http://${headers().get("host")}/survey/${row.id}`,
      analysisLink: `/analysis/show/${row.id}`,
      status: String(row.status),
    }));

    return (
      <div className="flex h-full w-full flex-col items-center gap-3 bg-sky-100 p-10">
        <SurveysTable rows={rows} />
        <div className="flex w-5/6 justify-end">
          <Link href="/surveys/new">
            <button className=" rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
              Dodaj ankietę
            </button>
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
