"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { useConvex } from "convex/react";
import { useUserDetail } from "@/app/provider";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  const convex = useConvex();
  const { userDetail, setUserDetail } = useUserDetail();

  useEffect(() => {
    userDetail && GetTemplateList();
  }, [userDetail]);

  const GetTemplateList = async () => {
    const result = await convex.query(api.emailTemplate.GetAllUserTemplate, {
      email: userDetail?.email,
    });
    console.log(result);
    setEmailList(result);
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-xl text-slate-700 text-center md:text-left mb-3">
          Workspace
        </h1>
        {emailList?.length == 0 ? (
          <div className="flex justify-center">
            <Image
              src={"/email2.jpg"}
              alt="email"
              height={300}
              width={300}
              className="rounded-xl"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-26">
            {emailList?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-3 border rounded-xl mt-3 shadow-sm md:w-[330px] md:h-[400px] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col">
                  <Image
                    className="w-full rounded-lg"
                    src={"/email.jpg"}
                    alt="email"
                    width={250}
                    height={250}
                  />
                  <div className="mt-2 text-justify overflow-y-auto max-h-[100px]">
                    {item?.description}
                  </div>
                </div>

                <Link href={"/editor/" + item.tid}>
                  <Button className="mt-4 w-full rounded-sm cursor-pointer border-2 bg-slate-800 border-slate-700 text-slate-100 hover:border-violet-500 hover:text-slate-50 hover:bg-violet-500">
                    View / Edit
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EmailTemplateList;
