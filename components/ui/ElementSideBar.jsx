import Layout from "@/Data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/Data/ElementList";

function ElementSideBar() {
  return (
    <>
      <div className="p-5">
        <h2 className="font-bold text-lg text-slate-700">Layouts</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-3 mt-3">
          {Layout.map((layout, index) => (
            <ElementLayoutCard layout={layout} key={index} />
          ))}
        </div>
        <h2 className="font-bold text-lg text-slate-700 mt-4">Elements</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-3 mt-3">
          {ElementList.map((element, index) => (
            <ElementLayoutCard layout={element} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ElementSideBar;
