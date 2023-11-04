import React from "react";
import Logo from "../assets/react.svg";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import {
  BiHomeSmile,
  BiCheckboxSquare,
  BiSolidDiscount,
  BiPulse,
  BiCategory,
  BiTrash,
} from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname); ini untuk mengetahui path name yang aktif
  const Navigate = useNavigate();
  const menu = [
    { name: "Home", icon: <BiHomeSmile className="w-full h-full"/>, value: "/" },
    {
      name: "Dashboard Admin",
      icon: <BiCheckboxSquare className="w-full h-full" />,
      value: "/dashboard",
    },
    { name: "Promo", icon: <BiSolidDiscount className="w-full h-full" />, value: "/promo" },
    { name: "Activity", icon: <BiPulse className="w-full h-full" />, value: "/activity" },
    { name: "Category", icon: <BiCategory className="w-full h-full" />, value: "/category" },
  ];

  const schedule = [
    `What is the famous landmark in France known for its intricate iron lattice design and was completed in 1889?

    ✓ Eiffel Tower.`,
    `In 1492, Christopher Columbus embarked on a historic journey. What was the name of his flagship?

    ✓Santa Maria`,
  ];

  return (
    <>
      <div className="lg:hidden fixed bottom-0 z-50 bg-white border-t flex justify-between w-full gap-6 py-4 px-4">
        <div className="w-full flex justify-between">
          {
            //
            menu.map((val, index) => {
              return (
                <Link
                  to={val.value}
                  key={index}
                  className={`flex items-center hover:text-blue-600 hover:rounded-lg hover:font-medium ${
                    val.value.includes(location.pathname)
                      ? `text-blue-500 rounded-lg font-medium underline underline-offset-8`
                      : `text-gray-500`
                  }`}
                >
                  <div className="mr-5 w-8 h-8">{val.icon}</div>
                </Link>
              );
            })
          }
        </div>
      </div>
      <div className="max-h-full hidden lg:block  md:w-64 w-20  px-2 md:px-9 py-9 ">
        <div className="fixed">
          <div className="flex lg:flex-row flex-col items-center pt-8 gap-4">
            <img src={Logo} alt="" className="w-9 h-9" />
            <div className="font-Circular font-semibold hidden md:block">
              Travelasia
            </div>
          </div>
          <div className="space-y-24">
            <div>
              <ul className="space-y-7">
                <div className="mb-4 mt-24 font-inter text-blue-600 font-semibold ">
                  Menu
                </div>
                {
                  //
                  menu.map((val, index) => {
                    return (
                      <Link
                        to={val.value}
                        key={index}
                        className={`flex flex-row items-center hover:text-blue-600 hover:rounded-lg hover:font-medium ${
                          val.value.includes(location.pathname)
                            ? `text-blue-500 rounded-lg font-medium underline underline-offset-8`
                            : `text-gray-500`
                        }`}
                      >
                        <div className="mr-5">{val.icon}</div>
                        <div className="hidden md:block">{val.name}</div>
                      </Link>
                    );
                  })
                }
              </ul>
            </div>
            <div>
              <div className="hidden md:block mb-7 font-inter font-semibold text-blue-600">
                Trivia Area
              </div>
              <div className="space-y-7">
                {schedule.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center md:w-32 lg:w-48 text-gray-500 font-medium"
                    >
                      <div className="hidden md:block">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
