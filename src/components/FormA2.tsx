"use client";
import CurrencyInput from "react-currency-input-field";

type ProjectType = "time-materials" | "fixed-fee" | "non-billable";
type FormData = {
  projectType: ProjectType;
  rateType: string;
  rate: number;
  budgetType: string;
  monthlyReset: boolean;
  sendNotifications: boolean;
  notificationThreshold: number;
  updateFields: (fields: Partial<FormData>) => void;
};

export default function FormA2({
  projectType,
  rateType,
  rate,
  budgetType,
  monthlyReset,
  sendNotifications,
  notificationThreshold,
  updateFields,
}: FormData) {
  const projectTypes: { value: ProjectType; label: string }[] = [
    { value: "time-materials", label: "Time & Materials" },
    { value: "fixed-fee", label: "Fixed Fee" },
    { value: "non-billable", label: "Non-Billable" },
  ];

  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="">
        <h1 className="">Project Type</h1>
        <h3 className="text-wrap">
          Don&apos;t panic - You can also customize this types in settings
        </h3>
      </div>

      {/* radio buttons */}
      <div className="grid grid-cols-3 border rounded-lg overflow-hidden">
        {projectTypes.map((project, index) => (
          <label
            htmlFor={projectType}
            key={index}
            onClick={() => {
              updateFields({ projectType: project.value });
            }}
            className={`flex items-center justify-center m-0 p-2.5 text-[#6b7280] font-medium text-nowrap cursor-pointer select-none ${
              projectType === project.value ? "bg-blue-500 !text-gray-100" : ""
            }`}
          >
            <input
              type="radio"
              name={projectType}
              value={projectType}
              checked={projectType === project.value}
              onChange={() => {
                updateFields({ projectType: project.value });
              }}
              className="sr-only"
            />
            {project.label}
          </label>
        ))}
      </div>

      {/* input hourly rate */}
      <div className="">
        <label htmlFor="" className="mb-0">
          Hourly
        </label>
        <p className="text-sm text-left text-gray-500 mb-2">
          We need hourly rates to track your project&apos;s billable amount
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-2">
          <select
            id="hourly-rate"
            name="hourly-rate"
            className="cols-span-1"
            value={rateType}
            onChange={(e) => updateFields({ rateType: e.target.value })}
          >
            <option>Project Hourly Rate</option>
            <option>Rate 1</option>
            <option>Rate 2</option>
            <option>Rate 3</option>
          </select>
          <CurrencyInput
            prefix="₹ "
            decimalsLimit={2}
            allowNegativeValue={false}
            className="w-2/3"
            value={rate}
            onValueChange={(e) => updateFields({ rate: Number(e) })}
            placeholder="Enter hourly rate"
          />
        </div>
      </div>

      {/* input budget */}
      <div className="">
        <label htmlFor="" className="mb-0">
          Budget
        </label>
        <p className="text-sm text-left text-gray-500 mb-2">
          We need hourly rates to track your project&apos;s billable amount
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-2">
          <select
            id="hourly-rate"
            name="hourly-rate"
            className="cols-span-1 pr-2 mr-2"
            value={budgetType}
            onChange={(e) => updateFields({ budgetType: e.target.value })}
          >
            <option>Hours per Person</option>
            <option>Rate 1</option>
            <option>Rate 2</option>
            <option>Rate 3</option>
          </select>
        </div>
      </div>

      {/* checkbox1 */}
      <div className="flex justify-start items-center text-nowrap">
        <input
          type="checkbox"
          id="monthlyReset"
          name="monthlyReset"
          className="mr-2 w-fit h-fit"
          checked={monthlyReset}
          onChange={(e) => updateFields({ monthlyReset: e.target.checked })}
        />
        <label
          htmlFor="monthlyReset"
          className="text-sm text-nowrap mb-0 text-gray-500 font-normal"
        >
          Budget resets every month
        </label>
      </div>

      {/* checkbox2 */}
      <div className="flex justify-start items-center text-nowrap">
        <input
          type="checkbox"
          id="sendNotifications"
          name="sendNotifications"
          className="mr-2 w-fit h-fit"
          checked={sendNotifications}
          onChange={(e) =>
            updateFields({ sendNotifications: e.target.checked })
          }
        />
        <label
          htmlFor="sendNotifications"
          className="flex items-center justify-center text-sm text-nowrap mb-0 text-gray-500 font-normal"
        >
          Send email alerts if project exceeds &nbsp;
          <CurrencyInput
            className="p-1 w-[50px]"
            decimalsLimit={2}
            placeholder="80.00"
            min={0}
            max={100}
            allowNegativeValue={false}
            value={notificationThreshold}
            onValueChange={(e) =>
              updateFields({ notificationThreshold: Number(e) })
            }
          />
          &nbsp;% of budget
        </label>
      </div>
    </div>
  );
}
