"use client";

import { useEffect, useState } from "react";
import FormA1 from "./FormA1";
import { useMultistepForm } from "./useMultistepForm";
import FormA2 from "./FormA2";
import FormA3 from "./FormA3";
import FormA4 from "./FormA4";
import { ChevronLeft } from "lucide-react";

type FormData = {
  projectName: string;
  client: string;
  dateFrom: Date;
  dateTo: Date;
  notes: string;
  projectType: "time-materials" | "fixed-fee" | "non-billable";
  rate: number;
  rateType: string;
  budgetType: string;
  monthlyReset: boolean;
  sendNotifications: boolean;
  notificationThreshold: number;
  viewType: string;
  managerType: string;

  updateFields?: (fields: Partial<FormData>) => void;
};

const initialData: FormData = {
  projectName: "",
  client: "Client 1",
  dateFrom: new Date(),
  dateTo: new Date(),
  notes: "",
  projectType: "time-materials",
  rate: 0,
  rateType: "hourly",
  budgetType: "fixed",
  monthlyReset: false,
  sendNotifications: false,
  notificationThreshold: 80,
  viewType: "list",
  managerType: "manager",
};

export default function FormA() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const storedData = localStorage.getItem("formA");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <FormA1 {...data} updateFields={updateFields} key={"1"} />,
      <FormA2 {...data} updateFields={updateFields} key={"2"} />,
      <FormA3 {...data} updateFields={updateFields} key={"3"} />,
      <FormA4 {...data} updateFields={updateFields} key={"4"} />,
    ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    localStorage.setItem("formA", JSON.stringify(data));
    alert("Form submitted successfully");
  }

  return (
    <div className="px-3 pt-3 md:p-10 h-full max-w-[500px]">
      <form
        onSubmit={onSubmit}
        className="relative flex flex-col items-center h-full"
      >
        {step}
        <div className="absolute bottom-8 sm:bottom-0  grid w-full grid-cols-3 gap-4 select-none">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              disabled={isFirstStep}
              className="flex items-center justify-start text-gray-500 font-bold py-2 pl-0 pr-2 rounded w-min"
            >
              <ChevronLeft size={23} />
              Back
            </button>
          )}
          <button
            type="submit"
            className=" col-start-2 bg-blue-500  text-white font-bold py-2 px-6 rounded"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>

      {/* step indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3 mt-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full  transition-all ${
              index === currentStepIndex ? "w-4 bg-gray-500" : "w-2 bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
