  import { useState } from "react";
  import type { PartialRange } from "../range";


  export function DateRangePicker() {
    const [range, setRange] = useState<PartialRange>({ kind: "empty" });
    const [open, setOpen] = useState(false);


    return (
      <div className="p-4 border rounded-md w-[320px]">
        <h2 className="font-semibold mb-2">Date Range Picker</h2>

        <div className="text-sm mb-2">
          Current state: {range.kind}
        </div>

<button
  className="px-3 py-1 bg-blue-600 text-white rounded"
  onClick={() => setOpen((v) => !v)}
>
  Select Date Range
</button>


{open && (
  <div className="mt-3 border p-2 rounded space-y-2 bg-white shadow">

    <input
      type="date"
      className="border p-1 w-full"
      onChange={(e) => {
        const [year, month, day] = e.target.value.split("-").map(Number);

        setRange({
          kind: "start-only",
          start: {
            parts: {
              year,
              month,
              day,
              hour: 0,
              minute: 0,
            },
            timezone: "Asia/Kolkata",
          },
        });
      }}
    />

    <input
      type="time"
      className="border p-1 w-full"
      onChange={(e) => {
        if (range.kind !== "start-only") return;

        const [hour, minute] = e.target.value.split(":").map(Number);

        setRange({
          kind: "start-only",
          start: {
            ...range.start!,
            parts: {
              ...range.start!.parts,
              hour,
              minute,
            },
          },
        });
      }}
    />

    <button
      className="w-full bg-green-600 text-white py-1 rounded"
      onClick={() => setOpen(false)}
    >
      Done
    </button>

  </div>
)}



      </div>
    );
  }
