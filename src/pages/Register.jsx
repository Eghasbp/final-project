import { useState } from "react";
import { Button } from "flowbite-react";
import banner from "../assets/security.jpg";
import { Label, TextInput, Checkbox } from "flowbite-react";
import {
  HiMail,
  HiOutlinePhoneIncoming,
  HiFingerPrint,
  HiCubeTransparent,
  HiLockClosed,
} from "react-icons/hi";
import nature from "../assets/nature.jpg";
import gray from "../assets/gray.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Notification from "../component/notification/Notification";

const Register = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("");
  // const [profilePict,setProfilePict] = useState('');
  const [phone, setPhone] = useState("");
  const [titleNotification, setTitleNotification] = useState("");
  const [descriptionNotification, setDescriptionNotification] = useState("");
  const [visibleNotification, setVisibleNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState("success");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const payload = {
      email: email,
      name: name,
      password: password,
      passwordRepeat: passwordRepeat,
      role: "admin",
      profilePictureUrl: "",
      phoneNumber: phone,
    };
    let data = new FormData();
    data.append("image", file);
    console.log(file);
    // console.log(payload)
    await axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image`,
        data,
        { headers: { apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c" } }
      )
      // , 'Authorization':`Bearer ${localStorage.getItem('token')}` tambahan kalau pake authorization
      .then((res) => {
        console.log(res);
        payload.profilePictureUrl = res?.data?.url;
      })
      .catch((err) => {
        console.log(err);
      });

    await axios

      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register`,
        payload,
        { headers: { apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c" } }
      )
      .then((res) => {
        console.log("sucess", res);
        setTitleNotification("Register Success");
        setDescriptionNotification(res?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("success");
        Navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setTitleNotification("Register Failed");
        setDescriptionNotification(err?.response?.data?.message);
        setVisibleNotification(true);
        setSeverityNotification("error");
      });
  };

  return (
    <>
      <div
        className="bg-[#F8F8F8] h-[100vh] w-[100vw] flex"
        style={{
          background: `url(${nature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container m-auto h-[80vh]  w-[80vw] items-center bg-white rounded-md shadow-lg "
          style={{
            background: `url(${gray})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="lg:grid grid-cols-2 gap-5 items-center">
            <div className=" h-[80vh] p-4">
              <div className=" rounded-sm items-center text-center">
                <img
                  className="w-full rounded-md h-[75vh] "
                  src={banner}
                  alt=""
                />
              </div>
            </div>
            <div className="text-black bg-white font-inter text-center w-[500px] mx-auto border border-blue-600 p-12 rounded-lg shadow-2xl">
              <div>
                <h1 className="font-semibold  text-3xl">
                  Please input your details
                </h1>
              </div>
              <p className="text-[#9d9d9d] mt-2 text-xs">
                Let's continue the journey with passion.
              </p>
              <div className="flex justify-center">
                <div className="mt-4 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={handleEmail}
                    id="email4"
                    placeholder="Email"
                    required
                    rightIcon={HiMail}
                    type="email"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="mt-4 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="name"
                    placeholder="Name"
                    required
                    rightIcon={HiFingerPrint}
                    type="text"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="mt-4 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone"
                    placeholder="Phone Number"
                    required
                    rightIcon={HiOutlinePhoneIncoming}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-4 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={handlePassword}
                    id="password"
                    placeholder="password"
                    required
                    rightIcon={HiLockClosed}
                    type="password"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-4 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={(e) => {
                      setPasswordRepeat(e.target.value);
                    }}
                    id="repeatPassword"
                    placeholder="Retype your password"
                    required
                    rightIcon={HiLockClosed}
                    type="password"
                  />
                </div>
              </div>
              {/* <div className="flex items-center mt-4 gap-2 ">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div> */}
              <div className="flex justify-center items-center text-left">
                <div className="mt-4  w-80 ">
                  <div className="mb-2 block"></div>

                  <input
                    onChange={(e) => {
                      setRole(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="relative mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-blue-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-blue-500 checked:after:bg-blue-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-blue-500 dark:checked:after:border-blue-500 dark:checked:after:bg-blue-500 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="admin"
                    value="admin"
                    id="admin"
                  />
                  <label
                    className="inline-block pl-2 hover:cursor-pointer"
                    htmlFor="admin"
                  >
                    admin
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <div className=" w-80 ">
                  <div className="mb-2 block"></div>
                  <input className="mt-4" type="file" onChange={handleFile} />
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 gap-2">
                <Button
                  className="w-80"
                  type="submit"
                  color="blue"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
              <Link to="/login">
                <button className="mt-10 font-medium text-gray-700">
                  {" "}
                  ← back to login page
                </button>
              </Link>
            </div>
          </div>
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

export default Register;
