"use client";
import { LayoutList, LayoutTemplate } from "lucide-react";

type FormData = {
  viewType: string;
  updateFields: (fields: Partial<FormData>) => void;
};
export default function FormA3({ viewType, updateFields }: FormData) {

  const viewSettings = [
    { value: "list", label: "List" },
    { value: "board", label: "Board" },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="">
        <h1 className="">Select a view</h1>
        <h3 className="">You can also customize this views in settings</h3>
      </div>

      {/* radio buttons */}
      <div className="grid grid-cols-2 rounded-lg overflow-hidden">
        {viewSettings.map((view, index) => (
          <div className="m-2" key={index}>
            <div
              className={`border-2 rounded-lg overflow-hidden bg-gray-100 ${
                viewType === view.value
                  ? "border-blue-500"
                  : "border-gray-200 opacity-50"
              }`}
            >
              <div
                onClick={() => {
                  updateFields({ viewType: view.value });
                }}
                className={` h-40 flex items-center justify-center  `}
              >
                {view.value === "list" ? (
                  <LayoutList size={40} />
                ) : (
                  <LayoutTemplate size={40} />
                )}
              </div>
            </div>
            <div
              className={`text-center mt-1 font-semibold ${
                viewType === view.value ? "" : "opacity-50"
              }`}
            >
              {view.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
