import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import TemplateDashboard from "../component/TemplateDashboard";
import addButton from "../assets/plus2.png";
import AddPromo from "../component/AddPromo";
import Modal from "../component/Modal";
import {
  BiTrash,
  BiSolidDetail,
  BiDetail,
  BiSolidChevronsRight,
  BiPencil,
  BiSolidChevronsLeft,
} from "react-icons/bi";

const Promo = () => {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]); // kalau mau store pict pake array
  const [totalPromo, setTotalPromo] = useState(7);
  const [titleNotification, setTitleNotification] = useState("");
  const [descriptionNotification, setDescriptionNotification] = useState("");
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState("success");
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalFile, setModalFile] = useState(null);
  const [modalFileName, setModalFileName] = useState(null);
  const [modalDescription, setModalDescription] = useState("");
  const [modalTerms_condition, setModalTerms_condition] = useState("");
  const [Modalpromo_discount_price, setModalpromo_discount_price] =
    useState("");
  const [ModalPromo_code, setModalPromo_code] = useState("");
  const [ModalMinimum_claim_price, setModalMinimum_claim_price] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPictures = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const pict = res?.data?.data;
        console.log(pict);
        setPictures(pict); // Set the pictures in state as an array
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        getPictures();
      });
  };

  useEffect(() => {
    getPictures();
  }, []); // Add an empty dependency array to call getPictures only once

  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  const handleUpdate = async (id) => {
    if (!id) return;
    const payload = {
      name: modalName,
      imageUrl: "",
    };
    if (modalFile) {
      let data = new FormData();
      data.append("image", modalFile);
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
    }
    await axios

      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`,
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
        setTitleNotification("Update Promo Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
        getPictures();
      })
      .catch((err) => {
        console.log(err);
        setTitleNotification("Update Promo Failed");
        setDescriptionNotification(err?.response?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("error");
      });
  };

  return (
    <TemplateDashboard title="PROMO">
      <div className="mx-auto bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Travelasia
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Promo
            </p>
            <p className="mt-6 text-sm leading-8 text-gray-400">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
        </div>
        <AddPromo />
        <div className="flex items-center justify-center mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2    lg:mx-20 mx-2 grid-rows-1 gap-5 mb-10 mt-10 ">
            {pictures.map((item, key) => {
              if (key + 1 <= totalPromo) {
                return (
                  <div
                    key={key}
                    className="w-screen h-96 max-w-sm bg-white border border-primary rounded-lg shadow-lg "
                  >
                    <img
                      className="p-8 w-96 h-60 rounded-t-lg"
                      src={item.imageUrl}
                      alt="product image"
                    />

                    <div className="px-5 pb-5x">
                      <h5 className="text-md  font-normal tracking-tight text-gray-500 capitalize">
                        {item.title}
                      </h5>

                      <div className="flex items-center justify-between">
                        <span className="text-sm mb-2 font-normal text-gray-500">
                          <p className="font-bold mt-2">
                            Promo code : {item.promo_code}
                          </p>
                        </span>
                      </div>
                      <div className="flex justify-end items-center gap-3">
                        <button
                          onClick={() => {
                            setVisibleModal(true);
                            setModalName(pictures[currentIndex]?.name);
                          }}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black "
                        >
                          <BiPencil />
                        </button>
                        <button
                          onClick={() => navigate(`/promo/${item.id}`)}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black "
                        >
                          <BiDetail />
                        </button>
                        <button
                          onClick={() => handleDelete(item?.id)}
                          className="mt-4 justify-end group relative h-10 overflow-hidden rounded-lg text-lg font-medium font-inter text-black hover:text-red-600"
                        >
                          <BiTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <Modal isOpen={visibleModal} onClose={() => setVisibleModal(false)}>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Edit Promo
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
                            setModalName(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={modalName}
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
                            setModalDescription(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={modalDescription}
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
                            setModalTerms_condition(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={modalTerms_condition}
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
                            setModalpromo_discount_price(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={Modalpromo_discount_price}
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
                            setModalPromo_code(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={ModalPromo_code}
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
                            setModalMinimum_claim_price(e.target.value);
                          }}
                          id="text"
                          name="text"
                          type="text"
                          value={ModalMinimum_claim_price}
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex justify-center">
                        <div className=" w-80 ">
                          <div className="mb-2 block"></div>
                          <input
                            className=""
                            type="file"
                            value={modalFileName}
                            onChange={(e) => {
                              setModalFileName(e.target.value);
                              setModalFile(e.target.files[0]);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => handleUpdate(pictures[currentIndex]?.id)}
                        className=" mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Update Banner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
            <div className="flex flex-col gap-4 justify-center align-middle items-center">
              <button
                onClick={() => setTotalPromo(totalPromo * 2)}
                className="w-36 text-md border p-2 rounded-lg border-violet-600 text-black "
              >
                {" "}
                <div className="flex items-center justify-center gap-2 font-medium">
                  <BiSolidChevronsRight />
                  More
                </div>
              </button>
              {setTotalPromo <= 8 ? null : (
                <button
                  onClick={() => setTotalPromo(totalPromo / 2)}
                  className="w-36 text-md border p-2 rounded-lg border-violet-600 text-black hover:bg-blue-500 hover:text-white"
                >
                  {" "}
                  <div className="flex items-center justify-center gap-2 font-medium">
                    <BiSolidChevronsLeft />
                    Less
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </TemplateDashboard>
  );
};

export default Promo;
