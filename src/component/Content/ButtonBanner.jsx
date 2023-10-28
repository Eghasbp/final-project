import React, { useState } from "react";
import Modal from "../Modal";
import axios from "axios";

const ButtonBanner = () => {
  const [file, setFile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const payload = {
      name: name,
      imageUrl: "",
    };
    let data = new FormData();
    data.append("image", file);
    console.log(file);
    // console.log(payload)
    await axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image`,
        data,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        payload.imageUrl = res?.data?.url;
      })
      .catch((err) => {
        console.log(err);
      });

    await axios

      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner`,
        payload,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("sucess", res);
        // tambahkan success rate
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center m-8 gap-8">
        <button
          onClick={openModal}
          className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-violet-800 text-lg font-bold text-white "
        >
          Add Banner
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Banner
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Banner Name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="text"
                      name="text"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex justify-center">
                      <div className=" w-80 ">
                        <div className="mb-2 block"></div>
                        <input className="" type="file" onChange={handleFile} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Banner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-violet-800 text-lg font-bold text-white">
          Edit Banner
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </div>
  );
};

export default ButtonBanner;
