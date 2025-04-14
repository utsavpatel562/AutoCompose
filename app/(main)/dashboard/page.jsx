"use client";
import { useUserDetail } from "@/app/provider";
import { Button } from "@/components/ui/button";
import EmailTemplateList from "@/components/ui/EmailTemplateList";
import Header from "@/components/ui/Header";
import React from "react";

function Dashboard() {
  const { userDetail } = useUserDetail();

  return (
    <>
      <div>
        <Header />
        <div className="p-4 sm:p-6 md:px-10 lg:px-20 xl:px-32 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-slate-800">
              Hello, <span className="text-violet-600">{userDetail?.name}</span>
            </h2>
            <Button className="cursor-pointer rounded-sm bg-violet-600 hover:bg-violet-700">
              + Create New Email Template
            </Button>
          </div>

          <div className="mt-8">
            <EmailTemplateList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
