import React, { useState } from "react";
import Modal from "../component/Modal";
import axios from "axios";
import Notification from "./notification/Notification";

const AddPromo = () => {
  const [file, setFile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [terms_condition, setTerms_condition] = useState("");
  const [promo_code, setPromo_code] = useState("");
  const [promo_discount_price, setpromo_discount_price] = useState("");
  const [minimum_claim_price, setMinimum_claim_price] = useState("");
  const [titleNotification, setTitleNotification] = useState("");
  const [descriptionNotification, setDescriptionNotification] = useState("");
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState("success");

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
      title: title,
      description: description,
      terms_condition: terms_condition,
      promo_code: promo_code,
      promo_discount_price: promo_discount_price,
      minimum_claim_price: minimum_claim_price,
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
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo`,
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
        setTitleNotification("Upload Promo Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
      })
      .catch((err) => {
        console.log(err);
        setTitleNotification("Upload Promo Failed");
        setDescriptionNotification(err?.response?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("error");
      });
  };
  return (
    <>
      <div className="md:flex justify-center items-center m-8 gap-8 w-40">
        <button
          onClick={openModal}
          className=" w-full text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Create Promo +
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create Promo
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setTitle(e.target.value);
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setDescription(e.target.value);
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Terms and condition
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setTerms_condition(e.target.value);
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Discount Price
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setpromo_discount_price(e.target.value);
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Promo Code
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setPromo_code(e.target.value);
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Minimum claim price
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setMinimum_claim_price(e.target.value);
                      }}
                      id="text"
                      name="text"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex justify-center">
                    <div className=" w-80 ">
                      <div className="mb-2 block"></div>
                      <input className="" type="file" onChange={handleFile} />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    className=" mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Banner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <Notification
        severity={severityNotification}
        title={titleNotification}
        description={descriptionNotification}
        visible={visibleNotification}
        setVisible={setVisibleNotification}
      />
    </>
  );
};

export default AddPromo;
