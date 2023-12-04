import Link from "next/link";
import SurveysTable from "@/components/atoms/user-panel/surveys-table";

export default async function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 bg-sky-100 p-10">
      <SurveysTable />
      <div className="flex w-5/6 justify-end">
        <Link href="/surveys/new">
          <button className=" rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
            Dodaj ankietę
          </button>
        </Link>
      </div>
    </div>
  );
}
