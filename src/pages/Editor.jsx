// Placeholder voor src/pages/Editor.jsx
// src/pages/Editor.jsx
import React, { useState } from "react";
import ComponentLibrary from "../cms/ComponentLibrary";
import PropsEditor from "../cms/PropsEditor";
import PageBuilder from "../cms/PageBuilder";
import PreviewFrame from "../cms/PreviewFrame";

export default function Editor() {
  const [selected, setSelected] = useState(null);
  const [props, setProps] = useState({});

  const handleSelect = (component) => {
    setSelected(component);
    setProps(component.props || {});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <aside className="md:col-span-1 space-y-6">
        <ComponentLibrary onSelect={handleSelect} />
        <PropsEditor props={props} onChange={setProps} />
      </aside>

      <main className="md:col-span-2">
        <PreviewFrame>
          <PageBuilder selectedComponent={selected} props={props} />
        </PreviewFrame>
      </main>
    </div>
  );
}
