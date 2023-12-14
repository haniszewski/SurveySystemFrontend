"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import EditButton from "@/components/atoms/new-survey/edit-button";
import SaveButton from "@/components/atoms/new-survey/save-button";
import TextFormField from "@/components/atoms/form/fields/text-form-field";

const NewSurveyHeader = () => {
  const [isEditing, setIsEditing] = useState(true);
  const { getValues, trigger, formState } = useFormContext();
  // needed for formState to update
  // eslint-disable-next-line
  const { errors } = formState;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    trigger(["name", "start_date", "end_date"])
      .then((result) => {
        if (result) setIsEditing(false);
      })
      .catch(() => {});
  };

  const isValidDate = (dateString: string | undefined) => {
    if (!dateString) {
      return false;
    }
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  return (
    <div>
      {isEditing ? (
        <>
          <div className="flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
            <div className="w-5/6">
              <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-600"
                >
                  Podaj tytuł ankiety
                </label>
                <TextFormField
                  name="name"
                  type="text"
                  className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
                <label
                  htmlFor="start_date"
                  className="block text-sm font-bold text-gray-600"
                >
                  Podaj datę rozpoczęcia ankiety
                </label>
                <TextFormField
                  name="start_date"
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
                <label
                  htmlFor="end_date"
                  className="block text-sm font-bold text-gray-600"
                >
                  Podaj datę zakończenia ankiety
                </label>
                <TextFormField
                  name="end_date"
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="buttons flex w-1/6 justify-end gap-2">
              <SaveButton onClick={handleSaveClick} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="new-question-block group flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
            <div className="w-5/6">
              <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
                <h1 className="mb-4 text-4xl font-bold">
                  Tytuł: {getValues("name") || "Moja ankieta"}
                </h1>
                <p className="mt-2 text-sm text-black">
                  <span className="font-bold">Rozpoczęcie:</span>{" "}
                  <span className="hidden md:inline">
                    {getValues("start_date") &&
                    isValidDate(getValues("start_date") as string)
                      ? dayjs(getValues("start_date") as string).format(
                          "YYYY-MM-DD",
                        )
                      : "Data niepodana"}
                  </span>
                  <span className="block md:hidden">
                    {getValues("start_date") &&
                    isValidDate(getValues("start_date") as string)
                      ? dayjs(getValues("start_date") as string).format(
                          "YYYY-MM-DD",
                        )
                      : "Data niepodana"}
                  </span>
                </p>
                <p className="mt-2 text-sm text-black">
                  <span className="font-bold">Zakończenie:</span>{" "}
                  <span className="hidden md:inline">
                    {getValues("end_date") &&
                    isValidDate(getValues("end_date") as string)
                      ? dayjs(getValues("end_date") as string).format(
                          "YYYY-MM-DD",
                        )
                      : "Data niepodana"}
                  </span>
                  <span className="block md:hidden">
                    {getValues("start_date") &&
                    isValidDate(getValues("end_date") as string)
                      ? dayjs(getValues("end_date") as string).format(
                          "YYYY-MM-DD",
                        )
                      : "Data niepodana"}
                  </span>
                </p>
              </div>
            </div>
            <div className="buttons flex w-1/6 justify-end gap-2">
              <EditButton onClick={handleEditClick} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewSurveyHeader;
