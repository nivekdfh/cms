// Placeholder voor src/cms/PageBuilder.jsx
// src/cms/PageBuilder.jsx
import React from "react";

export default function PageBuilder({ selectedComponent: Selected, props, onChange }) {
  return (
    <div className="w-full border border-dashed border-gray-300 rounded p-4 min-h-[300px] bg-white">
      {Selected ? (
        <div>
          <Selected.Component {...props} />
        </div>
      ) : (
        <p className="text-gray-400 text-center">Kies een component om te starten</p>
      )}
    </div>
  );
}
