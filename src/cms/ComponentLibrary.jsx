// Placeholder voor src/cms/ComponentLibrary.jsx
// src/cms/ComponentLibrary.jsx
import React from "react";

// Simpele bibliotheek van hardcoded componenten (voor demo)
const componenten = [
  {
    name: "Header1",
    category: "Headers",
    Component: () => <header className="bg-blue-600 text-white p-4">Header 1</header>,
    props: {},
  },
  {
    name: "Hero1",
    category: "Hero",
    Component: () => (
      <section className="p-8 text-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welkom bij Hero1</h1>
      </section>
    ),
    props: {},
  },
];

export default function ComponentLibrary({ onSelect }) {
  const grouped = componenten.reduce((acc, comp) => {
    acc[comp.category] = acc[comp.category] || [];
    acc[comp.category].push(comp);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([cat, comps]) => (
        <div key={cat}>
          <h3 className="text-sm font-semibold text-gray-700">{cat}</h3>
          <div className="space-y-1">
            {comps.map((comp) => (
              <div
                key={comp.name}
                className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => onSelect(comp)}
              >
                {comp.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
