import Sidebar from "../component/Sidebar";
import React from "react";
import ContentRight from "../component/Content/ContentRight";
import ContentLeft from "../component/Content/ContentLeft";
// import { GrNotification } from 'react-icons/gr ';
import gray from "../assets/gray.jpg";
import bgwhite from "../assets/bgwhite.png";

const Dashboard = () => {
  //panggil API untuk id pengguna

  return (
    <>
      <div className="w-full min-h-screen bg-white flex lg:flex-row">
        <Sidebar />
        <section
          className="flex-1 w-full bg-cover h-screen"
          // style={{ background: `url(${gray})` }}
        >
          <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-10">
            <div>
              <div>
                {/* banner content */}
                <div>
                  <ContentLeft />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:block hidden">
        <ContentRight />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
