"use client";
import { UsersRound } from "lucide-react";

type FormData = {
  managerType: string;
  updateFields: (fields: Partial<FormData>) => void;
};

export default function FormA4({ managerType, updateFields }: FormData) {
  const managers = [
    {
      value: "admin",
      label: "Only Admin's",
      desc: "Only Admin's can manage everything",
    },
    {
      value: "selected",
      label: "Only to Specific people",
      desc: "Only some specific people will be able to manage projects",
    },
    {
      value: "everyone",
      label: "Everyone",
      desc: "All users can manage projects, but guests can only see their projects",
    },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="">
        <h1 className="">Who can manage projects</h1>
        <h3 className="text-nowrap">
          Don&apos;t panic — You can also customize this views in settings
        </h3>
      </div>

      {/* radio buttons stacked cards*/}
      <div className="flex flex-col gap-2">
        {managers.map((manager, index) => (
          <div
            key={index}
            onClick={() => {
              updateFields({ managerType: manager.value });
              // setSelectedManager(manager.value);
            }}
            className={`flex items-center justify-start border-2 rounded-lg p-2.5 
              text-[#6b7280] bg-gray-100 font-medium  cursor-pointer ${
                managerType === manager.value
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
          >
            <UsersRound size={30} className="mx-2" />
            <div className="flex flex-col justify-center h-16 text-left ml-2">
              <div className="text-gray-700 text-lg font-semibold">
                {manager.label}
              </div>
              <p className="text-sm text-gray-500">{manager.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
