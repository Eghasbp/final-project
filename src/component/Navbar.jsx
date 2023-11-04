import React from "react";
import Logo from "../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav>
      <div className="flex justify-between items-center md:p-10 p-2 text-sm md:text-md lg:text-xl">
        <div className="">
          <Link
            to={"/dashboard"}
            className="md:font-semibold font-medium flex items-center space-x-1 md:space-x-3"
          >
            <img
              className="md:w-10 w-4 inline-block items-center"
              src={Logo}
              alt=""
            />
            <span className="text-sm font-bold md:text-lg lg:text-2xl">
              Travelasia dashboard
            </span>
          </Link>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="p-3 text-white rounded-lg font-medium font-sans"
          >
            ❌
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
