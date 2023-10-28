import React, { useState, useEffect } from "react";
import axios from "axios";

const LoggedUser = () => {
  const [totalUser, setTotalUser] = useState(8);
  const [LogUser, setLogUser] = useState([]); // kalau mau store pict pake array

  const getPictures = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const user = res?.data?.data;
        console.log(user);
        setLogUser(user); // Set the pictures in state as an array
      });
  };

  useEffect(() => {
    getPictures();
  }, []); // Add an empty dependency array to call getPictures only once

  return (
    <>
      <div className="bg-white border rounded-lg mt-2">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {LogUser.map((items, key) => {
                      if (key + 1 <= totalUser) {
                        return (
                          <tr
                            key={key}
                            className="border-b text-black dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {key + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {items.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {items.email}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {items.role}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {items.phoneNumber}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedUser;
