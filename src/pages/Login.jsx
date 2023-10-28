import { useState } from "react";
import { Button } from "flowbite-react";
import banner from "../assets/security.jpg";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import nature from "../assets/nature.jpg";
import gray from "../assets/gray.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };
    const headers = {
      apiKey: apiKey,
      "content-Type": "application/json",
    };
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        payload,
        { headers: headers }
      )
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
            <div className="text-black bg-white font-inter text-center w-96 mx-auto border border-blue-600 p-12 rounded-lg shadow-2xl">
              <div>
                <h1 className="font-semibold  text-3xl">Welcome Back!</h1>
              </div>
              <p className="text-[#9d9d9d] mt-2 text-xs">
                Let's continue the journey with passion.
              </p>
              <div className="flex justify-center">
                <div className="mt-8 w-80 ">
                  <div className="mb-2 block"></div>
                  <TextInput
                    onChange={handleEmail}
                    id="email4"
                    placeholder="Email"
                    required
                    rightIcon={HiMail}
                    type="email"
                    autoComplete="email"
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
                    type="password"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4 gap-2 ">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              {/* FRAMER */}
              <div className="flex items-center justify-center mt-8 gap-2">
                <Button
                  className="w-80"
                  type="submit"
                  color="blue"
                  onClick={() => setIsOpen(true)}
                >
                  Submit
                </Button>
              </div>
              <AnimatePresence isOpen={isOpen} setIsOpen={setIsOpen}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: "12.5deg" }}
                      animate={{ scale: 1, rotate: "0deg" }}
                      exit={{ scale: 0, rotate: "0deg" }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-br from-blue-500 to-slate-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                      <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                      <div className="relative z-10">
                        <div className="bg-indigo-600 w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto">
                          <FiAlertCircle />
                        </div>
                        <h3 className="text-3xl font-bold text-center mb-2">
                          One more thing!
                        </h3>
                        <p className="text-center mb-6">
                          Check your username and password again to make sure
                          it's correct, never too late to come back dude !
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setIsOpen(false)}
                            className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                          >
                            Nah, go back
                          </button>
                          <button
                            onClick={handleSubmit}
                            className="bg-white hover:bg-blue-200 transition-opacity text-black font-semibold w-full py-2 rounded"
                          >
                            Understood!
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <p className="mt-5 text-gray-400 text-sm ">
                  don't have an account?{" "}
                  <Link to={"/register"}>
                    <span className="text-cyan-800 font-bold">Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
