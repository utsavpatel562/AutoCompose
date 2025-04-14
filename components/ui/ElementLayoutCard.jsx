import React from "react";

function ElementLayoutCard({ layout }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-3 group hover:shadow-md hover:border-violet-500
              cursor-pointer"
      >
        {
          <layout.icon className="p-2 h-8 w-8 bg-slate-100 group-hover:text-violet-500 group-hover:bg-violet-100 rounded-full" />
        }
        <h2 className="text-sm text-slate-700 font-semibold group-hover:text-violet-500">
          {layout.label}
        </h2>
      </div>
    </>
  );
}

export default ElementLayoutCard;
