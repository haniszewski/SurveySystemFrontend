"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import EditButton from "@/components/atoms/new-survey/edit-button";
import SaveButton from "@/components/atoms/new-survey/save-button";
import TextFormField from "@/components/atoms/form/fields/text-form-field";

const NewSurveyHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { getValues, register } = useFormContext();

  const [title, setTitle] = useState("Nowa ankieta");
  const [description, setDescription] = useState("Proszę wypełnić ankietę");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setTitle(getValues("surveyTitle") ?? "Moja ankieta");
    setDescription(getValues("surveyDescription") ?? "");
    setStartDate(dayjs(getValues("surveyStartDate")).format("YYYY-MM-DD"));
    setEndDate(dayjs(getValues("surveyEndDate")).format("YYYY-MM-DD"));
    /*
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Start Date:", startDate);
    console.log("Start Date:", endDate);
*/
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
            <label
              htmlFor="surveyTitle"
              className="block text-sm font-bold text-gray-600"
            >
              Podaj tytuł ankiety
            </label>
            <TextFormField
              name="surveyTitle"
              type="text"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
            <label
              htmlFor="surveyDescription"
              className="block text-sm font-bold text-gray-600"
            >
              Podaj opis ankiety
            </label>
            <TextFormField
              name="surveyDescription"
              type="text"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
            <label
              htmlFor="surveyStartDate"
              className="block text-sm font-bold text-gray-600"
            >
              Podaj datę rozpoczęcia ankiety
            </label>
            <TextFormField
              name="surveyStartDate"
              type="date"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
            <label
              htmlFor="surveyEndDate"
              className="block text-sm font-bold text-gray-600"
            >
              Podaj datę zakończenia ankiety
            </label>
            <TextFormField
              name="surveyEndDate"
              type="date"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="d-flex ml-4 justify-end">
            <SaveButton onClick={handleSaveClick} />
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
            <h1 className="mb-4 text-4xl font-bold">Tytuł: {title}</h1>
            <p className="text-gray text-lg">
              <span className="font-bold">Opis:</span> {description}
            </p>
            <p className="mt-2 text-sm text-black">
              <span className="font-bold">Rozpoczęcie:</span>{" "}
              <span className="hidden md:inline">
                {dayjs(startDate).format("YYYY-MM-DD")}
              </span>
              <span className="block md:hidden">
                {dayjs(startDate).format("YYYY-MM-DD")}
              </span>
            </p>
            <p className="mt-2 text-sm text-black">
              <span className="font-bold">Zakończenie:</span>{" "}
              <span className="hidden md:inline">
                {dayjs(endDate).format("YYYY-MM-DD")}
              </span>
              <span className="block md:hidden">
                {dayjs(endDate).format("YYYY-MM-DD")}
              </span>
            </p>
          </div>
          <div className="d-flex ml-4 justify-end">
            <EditButton onClick={handleEditClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default NewSurveyHeader;
