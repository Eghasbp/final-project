import { useState } from "react";
import { Button } from "flowbite-react";
import banner from "../assets/security.jpg";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import nature from '../assets/nature.jpg'
import gray from '../assets/gray.jpg'
import axios from "axios";
import { useNavigate } from "react-router";

const Register =() => {
  const Navigate = useNavigate();
  const [email,setEmail] =useState("");
  const[password,setPassword] = useState("");
  const [file,setFile] =useState('');
  const [name,setName] =useState('');
  const [passwordRepeat,setPasswordRepeat] =useState('');
  const [role,setRole] = useState('');
  // const [profilePict,setProfilePict] = useState('');
  const [phone,setPhone] =useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async () => {
    const payload= {
          email:email,
          name:name,
          password:password,
          passwordRepeat:passwordRepeat,
          role:role,
          profilePictureUrl:'',
          phoneNumber:phone,
        };
      let data = new FormData();
      data.append('image', file);
      console.log(file)
      // console.log(payload)
      await axios
        .post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image`,data, {headers:  {'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', 'Authorization':`Bearer ${localStorage.getItem('token')}`}})
        .then((res) => {
          console.log(res)
          payload.profilePictureUrl = res?.data?.url
        })
        .catch((err) => {
          console.log(err)
        })

      await axios
      
          .post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register`, payload,{headers:  {'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'}})
          .then((res) => {
              console.log('sucess',res)
              Navigate("/login")
          })
          .catch(err => {
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
            <div className="flex justify-center">
            <div className="mt-8 w-80 ">
              <div className="mb-2 block">
              </div>
              <TextInput
                onChange={(e)=> {setPasswordRepeat(e.target.value)}}
                id="repeatPassword"
                placeholder="Retype your password"
                required
                rightIcon={HiMail}
                type="email"
              />
            </div>
            </div>
            <div className="flex justify-center">
            <div className="mt-8 w-80 ">
              <div className="mb-2 block">
              </div>
              <TextInput
                onChange={(e)=> {setName(e.target.value)}}
                id="name"
                placeholder="Name"
                required
                rightIcon={HiMail}
                type="text"
              />
            </div>
            </div>
            <div className="flex justify-center">
            <div className="mt-8 w-80 ">
              <div className="mb-2 block">
              </div>
              <TextInput
                onChange={(e)=> {setRole(e.target.value)}}
                id="role"
                placeholder="Role"
                required
                rightIcon={HiMail}
                type="text"
              />
            </div>
            </div>
            <div className="flex justify-center">
            <div className="mt-8 w-80 ">
              <div className="mb-2 block">
              </div>
              <TextInput
                onChange={(e)=> {setPhone(e.target.value)}}
                id="phone"
                placeholder="Phone Number"
                required
                rightIcon={HiMail}
                type="text"
              />
            </div>
            </div>
            <div className="flex items-center mt-4 gap-2 ">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <input type="file" onChange={handleFile}/>
            <div className="flex items-center justify-center mt-8 gap-2">
            <Button className="w-80" type="submit" color="blue" onClick={handleSubmit}>
              Submit
            </Button>
            </div>
         
            </div>

          
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
