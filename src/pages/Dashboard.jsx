// Placeholder voor src/pages/Dashboard.jsx
// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-4">Welkom bij je CMS</h1>
      <p className="mb-6 text-gray-600">Kies een actie hieronder om te starten.</p>
      <Link
        to="/editor"
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Start Pagina Builder
      </Link>
    </div>
  );
}
