import axios from "axios";
import TemplateDashboard from "../component/TemplateDashboard";
import React from "react";
import { useState, useEffect } from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import AddCategory from "../component/AddCategory";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((res) => {
        const cat = res?.data?.data;
        setCategories(cat); // Set the pictures in state as an array
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getCategory();
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <TemplateDashboard title="CATEGORY">
      <div className="mx-auto bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Travelasia
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Categories
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          <AddCategory />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {categories.map((items) => (
                <div key={items.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <img
                      className="h-40 w-40 rounded-md"
                      src={items.imageUrl}
                      alt=""
                    />
                    <h2 className="mt-4">{items.name}</h2>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    #{items.id}
                  </dd>
                  <button
                    onClick={() => handleDelete(items?.id)}
                    className="mt-2 group relative h-10 w-20 overflow-hidden rounded-2xl bg-red-600 text-lg font-medium font-inter mb-2 text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
      </div>
    </TemplateDashboard>
  );
};

export default Category;
