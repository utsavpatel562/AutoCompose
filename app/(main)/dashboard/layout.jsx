import Header from "@/components/ui/Header";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DashboardLayout;
