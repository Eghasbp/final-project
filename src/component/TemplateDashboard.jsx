import React from "react";
import Sidebar from "../component/Sidebar";
import ContentRight from "../component/Content/ContentRight";

const TemplateDashboard = ({ children, title }) => {
  return (
    <div className="w-full min-h-screen bg-white flex lg:flex-row">
      <Sidebar />
      <div className="flex justify-center items-center mt-10 font-semibold text-2xl"></div>
      {children}
      <ContentRight />
    </div>
  );
};

export default TemplateDashboard;
