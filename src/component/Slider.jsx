import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import axios from "axios";
import bg from "../assets/bg.jpg";
import ButtonBanner from "./Content/ButtonBanner";
import { Tooltip } from "react-tippy";
import Notification from "../component/notification/Notification";
import Modal from "./Modal";
import {
  BiTrash,
  BiSolidDetail,
  BiDetail,
  BiSolidChevronsRight,
  BiPencil,
  BiSolidChevronsLeft,
} from "react-icons/bi";

const Slider = () => {
  const [pictures, setPictures] = useState([]); // kalau mau store pict pake array
  const [titleNotification, setTitleNotification] = useState("");
  const [descriptionNotification, setDescriptionNotification] = useState("");
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState("success");
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalFile, setModalFile] = useState(null);
  const [modalFileName, setModalFileName] = useState(null);

  const getPictures = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners`,
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

  useEffect(() => {
    getPictures();
  }, []); // Add an empty dependency array to call getPictures only once

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setTitleNotification("Delete banner Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
        getPictures();
      });
  };

  const handleUpdate = async (id) => {
    if (!id) return;
    //   console.log(id)
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
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${id}`,
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
        setTitleNotification("Update Banner Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
        getPictures();
      })
      .catch((err) => {
        console.log(err);
        setTitleNotification("Update Banner Failed");
        setDescriptionNotification(err?.response?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("error");
      });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(pictures[currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
        <div className="flex justify-center">
        <h2 className="text-center sm:w-96 md:w-full p-4 font-bold font-inter lg:text-2xl md:text-xl text-white bg-violet-600 rounded-lg">
          Banner Showcase & Logged Users
        </h2>
        </div>
        <div className=" h-[500px] w-3/4 m-auto px-4 relative group">
          <div className="flex justify-end items-center">
            <ButtonBanner />
            <button
              onClick={() => handleDelete(pictures[currentIndex]?.id)}
              className="group relative  rounded-2xl nd:text-md mt-2 lg:text-lg md:font-medium font-inter mb-2 text-white"
            >
              <BiTrash className="w-8 h-5 text-black"/>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
            <button
              onClick={() => {
                setVisibleModal(true);
                setModalName(pictures[currentIndex]?.name);
              }}
              className="group relative ml-4 overflow-hidden mt-2 rounded-2xl nd:text-md lg:text-lg md:font-medium font-inter mb-2 text-white"
            >
              <BiPencil  className="w-8 h-5 text-black"/>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
          <Modal  isOpen={visibleModal} onClose={() => setVisibleModal(false)}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Edit Banner
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
                  </div>

                  <div>
                    <button
                      onClick={() => handleUpdate(pictures[currentIndex]?.id)}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Uodate Banner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Tooltip
            title={pictures[currentIndex]?.name}
            position="top" // You can change the position (top, bottom, left, right)
            trigger="mouseenter" // Trigger event (mouseenter, click, etc.)
            animation="shift-away" // Animation style (you can change this)
            arrow={true} // Show arrow or not
            arrowSize="small" // Customize arrow size
          >
            <div className="flex justify-center">
              <div className="w-full">
                <img
                  className="h-[380px] w-full rounded-lg border bg-gray-500 p-4 shadow-2xl"
                  src={pictures[currentIndex]?.imageUrl}
                  alt=""
                />
              </div>
            </div>
          </Tooltip>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
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

export default Slider;
