// Placeholder voor src/cms/PropsEditor.jsx
// src/cms/PropsEditor.jsx
import React from "react";

export default function PropsEditor({ props = {}, onChange }) {
  const handleChange = (key, value) => {
    onChange({ ...props, [key]: value });
  };

  return (
    <div className="space-y-4">
      {Object.entries(props).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {key}
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      ))}
      {Object.keys(props).length === 0 && (
        <p className="text-gray-400 text-sm">Geen aanpasbare props voor dit component.</p>
      )}
    </div>
  );
}
