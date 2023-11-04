import React from "react";
import Logo from "../assets/react.svg";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import {
  BiHomeSmile,
  BiCheckboxSquare,
  BiSolidDiscount,
  BiPulse,
  BiCategory,
} from "react-icons/bi";

const PhoneSidebar = () => {
  const location = useLocation();
  // console.log(location.pathname); ini untuk mengetahui path name yang aktif
  const Navigate = useNavigate();
  const menu = [
    { name: "Home", icon: <BiHomeSmile />, value: "/" },
    {
      name: "Dashboard Admin",
      icon: <BiCheckboxSquare />,
      value: "/dashboard",
    },
    { name: "Promo", icon: <BiSolidDiscount />, value: "/promo" },
    { name: "Activity", icon: <BiPulse />, value: "/activity" },
    { name: "Category", icon: <BiCategory />, value: "/category" },
  ];
  return (
    <div className="bg-red-600 flex">
      <button>sdsdsadasdasd</button>
    </div>
  );
};

export default PhoneSidebar;
