"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./button";

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  return (
    <>
      <div>
        <h1 className="font-bold text-xl text-slate-700 text-center md:text-left">
          Workspace
        </h1>
        {emailList?.length == 0 && (
          <div className="flex justify-center mt-7">
            <Image
              src={"/email2.jpg"}
              alt="email"
              height={300}
              width={300}
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default EmailTemplateList;
