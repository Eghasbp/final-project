import axios from "axios";
import TemplateDashboard from "../component/TemplateDashboard";
import React from "react";
import { useState, useEffect } from "react";
import AddCategory from "../component/AddCategory";
import { BiTrash, BiPencil } from "react-icons/bi";
import Modal from "../component/Modal"

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [titleNotification, setTitleNotification] = useState("");
  const [descriptionNotification, setDescriptionNotification] = useState("");
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState("success");
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalFile, setModalFile] = useState(null);
  const [modalFileName, setModalFileName] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-category/${id}`,
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
        setTitleNotification("Update Category Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
        getCategory();
      })
      .catch((err) => {
        console.log(err);
        setTitleNotification("Update Category Failed");
        setDescriptionNotification(err?.response?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("error");
      });
  };

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
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
            <AddCategory />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {categories.map((items) => (
                <div key={items.name} className="relative pl-16 ">
                  <dt className=" shadow-lg p-2 shadow-blue-200  rounded-lg text-base font-semibold leading-7 text-gray-900">
                    <img
                      className="shadow-xl h-40 w-40 rounded-md"
                      src={items.imageUrl}
                      alt=""
                    />
                    <div className="flex justify-between">
                      <h2 className="mt-4">{items.name}</h2>
                      <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(items?.id)}
                        className="mt-5 text-lg font-medium font-inter mb-2 text-black"
                      >
                        <BiTrash />
                      </button>
                      <button
                        onClick={() => {
                          setVisibleModal(true);
                          setModalName(categories[currentIndex]?.name);
                        }}
                        className="mt-2"
                      >
                        <BiPencil className="w-8 h-5 text-black" />
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                      </button>
                      </div>
                    </div>
                  </dt>
                </div>
              ))}
                <Modal  isOpen={visibleModal} onClose={() => setVisibleModal(false)}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Edit Category
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="Name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Category Name
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
                      onClick={() => handleUpdate(categories[currentIndex]?.id)}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Update Banner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
            </dl>
          </div>
        </div>
      </div>
    </TemplateDashboard>
  );
};

export default Category;
