import { useState } from "react";
import { Button } from "flowbite-react";
import banner from "../assets/security.jpg";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import nature from '../assets/nature.jpg'
import gray from '../assets/gray.jpg'
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login =() => {
  const Navigate = useNavigate();
  const [email,setEmail] =useState("");
  const[password,setPassword] = useState("");
  const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c"
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = () => {
    const payload= {
      email:email,
      password:password,
    };
    const headers = {
      apiKey: apiKey,
      "content-Type": "application/json"
    }
    axios 
      .post("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",payload,{headers:headers})
      .then((res) => {
        localStorage.setItem("token",res?.data?.token);
        Navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
    <div className="bg-[#F8F8F8] h-[100vh] w-[100vw] flex" 
      style={{  background: `url(${nature})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
      <div className="container m-auto h-[80vh]  w-[80vw] items-center bg-white rounded-md shadow-lg "  style={{  background: `url(${gray})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      }}>
        <div className="lg:grid grid-cols-2 gap-5 items-center">
          <div className=" h-[80vh] p-4">
            <div className=" rounded-sm items-center text-center">
              <img className="w-full rounded-md h-[75vh] " src={banner} alt="" />
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
              <div className="mb-2 block">
              </div>
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
              <div className="mb-2 block">
              </div>
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
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <div className="flex items-center justify-center mt-8 gap-2">
            <Button className="w-80" type="submit" color="blue" onClick={handleSubmit}>
              Submit
            </Button>
            </div>
            <div>
              <p className="mt-5 text-gray-400 text-sm ">don't have an account? <Link to={'/register'}><span className="text-cyan-800 font-bold">Register</span></Link></p>
              </div>
            </div>

          
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
