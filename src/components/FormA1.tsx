import { Calendar, Plus } from "lucide-react";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type FormData = {
  projectName: string;
  client: string;
  dateFrom: Date;
  dateTo: Date;
  notes: string;
  updateFields: (fields: Partial<FormData>) => void;
};

export default function FormA1({
  projectName,
  client,
  dateFrom,
  dateTo,
  notes,
  updateFields,
}: FormData) {
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="">
        <h1 className="">Create a Project</h1>
      </div>
      {/* Project name */}
      <div className="">
        <label htmlFor="projectName">Project name</label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          autoFocus
          placeholder="Enter project name here"
          value={projectName}
          onChange={(e) => updateFields({ projectName: e.target.value })}
        />
      </div>

      {/* Client name */}
      <div className="">
        <label htmlFor="client">Client</label>
        <div className="flex items-center justify-center">
          <select
            id="client"
            name="client"
            value={client}
            onChange={(e) => updateFields({ client: e.target.value })}
          >
            <option>Select a client</option>
            <option>Client 1</option>
            <option>Client 2</option>
            <option>Client 3</option>
          </select>
          <span className="mx-1 text-gray-500 font-semibold w-fit">Or</span>
          <button type="button" className="addbtn flex items-center">
            <Plus size={18} />
            <span className="text-nowrap">New Client</span>
          </button>
        </div>
      </div>

      {/* Dates */}
      <div className="">
        <label>Dates</label>
        <div className="flex justify-between items-center">
          <DatePicker
            name="dateFrom"
            selected={dateFrom}
            onChange={(e) => updateFields({ dateFrom: e as Date })}
            className="!p-2.5 !pl-8"
            showIcon
            icon={<Calendar className="text-gray-400 text-2xl" />}
          />
          <span className="mx-1 text-gray-500">-</span>
          <DatePicker
            name="dateTo"
            selected={dateTo}
            onChange={(e) => updateFields({ dateTo: e as Date })}
            className="!p-2.5 !pl-8"
            showIcon
            icon={<Calendar className="text-gray-400 text-2xl" />}
          />
        </div>
      </div>

      {/* Notes */}
      <div className="">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          rows={4}
          placeholder="Optional"
          value={notes}
          onChange={(e) => updateFields({ notes: e.target.value })}
        />
      </div>
    </div>
  );
}
