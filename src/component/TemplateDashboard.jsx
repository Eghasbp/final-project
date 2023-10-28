import React from "react";
import Sidebar from "../component/Sidebar";
import ContentRight from "../component/Content/ContentRight";

const TemplateDashboard = ({ children, title }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      {/* <div className="text-xl p-4 font-semibold text-gray-500 ">
        <h1>{title}</h1>
      </div> */}
      <div className="flex justify-center items-center mt-10 font-semibold text-2xl"></div>
      {children}
      <ContentRight/>
    </div>
    
  );
};

export default TemplateDashboard;
