"use client";

import { Divider } from "@mui/material";
import {
  ClipboardDocumentCheckIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import TextButton from "@/components/atoms/common/text-button";

const AnalysisSchemaStart = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-16 bg-sky-100">
      <TextButton href={`?mode=default`}>
        <PlusCircleIcon className="w-7" /> Dodaj domyślną regułę analizy
      </TextButton>

      <div className="w-5/6 text-slate-400">
        <Divider>ALBO</Divider>
      </div>

      <TextButton href={`?mode=individual`}>
        <ClipboardDocumentCheckIcon className="w-7" /> Wybierz ręcznie pola do
        analizy
      </TextButton>
    </div>
  );
};

export default AnalysisSchemaStart;
