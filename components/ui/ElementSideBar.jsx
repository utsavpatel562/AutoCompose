import Layout from "@/Data/Layout";
import React from "react";

function ElementSideBar() {
  return (
    <>
      <div className="p-5">
        <h2 className="font-bold text-lg">Layouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {Layout.map((layout, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-3 group hover:shadow-md hover:border-violet-500
              cursor-pointer"
            >
              {
                <layout.icon className="p-2 h-8 w-8 group-hover:text-violet-500 group-hover:bg-violet-100 rounded-full" />
              }
              <h2 className="text-sm">{layout.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ElementSideBar;
