// Placeholder voor src/cms/PreviewFrame.jsx
// src/cms/PreviewFrame.jsx
import React, { useState } from "react";

export default function PreviewFrame({ children }) {
  const [device, setDevice] = useState("desktop");

  const sizes = {
    desktop: "w-full",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  return (
    <div>
      <div className="mb-2 space-x-2">
        {Object.keys(sizes).map((d) => (
          <button
            key={d}
            className={`px-3 py-1 rounded border ${
              device === d ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setDevice(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="border rounded overflow-hidden p-4 bg-gray-50">
        <div className={`mx-auto ${sizes[device]}`}>{children}</div>
      </div>
    </div>
  );
}
