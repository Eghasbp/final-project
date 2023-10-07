import { useState } from "react";
import reactLogo from "./assets/react.svg";
import hamburger from "./assets/hamburger.svg";
import hero from "./assets/Group 1.png";
import travel from "./assets/bag.svg";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };
  const handleOpenClose = () => {
    // Mengubah status showSidebar saat tombol ditekan
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* navbar */}
      <div className="py-8  flex justify-between ">
        <div className="container">
          <div className="flex justify-between items-center">
            <img
              src={reactLogo}
              alt=""
              className="order-1 sm:order-2 lg:order-1"
            />
            <button onClick={handleNav}>
              <img
                src={hamburger}
                className="lg:hidden w-8 order-2 sm:order-1"
                alt=""
              />
            </button>
            <div className="lg:order-2 lg:block hidden">
              <div className="flex gap-16">
                <button className="text-gray-400 font-normal text-sm font-Circular">
                  Home
                </button>
                <button className="text-gray-400 font-normal text-sm font-Circular">
                  Discover
                </button>
                <button className="text-gray-400 font-normal text-sm font-Circular">
                  About
                </button>
                <button className="text-gray-400 font-normal text-sm font-Circular">
                  Contact
                </button>
              </div>
            </div>
            <div className="order-3 md:block hidden left-0">
              <button className="grow bg-white px-8 py-4 font-bold text-gray-400 rounded-full text-sm">
                Login
              </button>
              <button className="grow ml-2 bg-blue-500 px-8 py-4 font-bold text-white rounded-full text-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 right-0 left-0 bg-white p-4 ">
          <div className="">
            {showNav ? (
              <div className="flex justify-between">
                <button className="flex justify-center flex-col items-center gap-1 text-blue-500">
                  <div className="">
                    <ion-icon
                      name="planet-outline"
                      className="text-blue-400"
                    ></ion-icon>
                  </div>
                  <span className="text-sm  font-bold text-gray-400">Home</span>
                </button>
                <button className="flex  justify-center flex-col items-center gap-1">
                  <div>
                    <ion-icon name="diamond-outline"></ion-icon>
                  </div>
                  <span className="text-sm font-bold text-gray-400">
                    Discover
                  </span>
                </button>
                <button className="flex  justify-center flex-col items-center gap-1">
                  <div>
                    <ion-icon name="logo-gitlab"></ion-icon>
                  </div>
                  <span className="text-sm font-bold text-gray-400">About</span>
                </button>
                <button className="flex  justify-center flex-col items-center gap-1">
                  <div>
                    <ion-icon name="people-outline"></ion-icon>
                  </div>
                  <span className="text-sm font-bold text-gray-400">
                    Contact
                  </span>
                </button>
                <button
                  onClick={handleOpenClose}
                  className="flex justify-center flex-col items-center gap-1 lg:hidden"
                >
                  <div>
                    <ion-icon
                      name={
                        showSidebar
                          ? "chevron-down-outline"
                          : "chevron-up-outline"
                      }
                    ></ion-icon>
                  </div>
                </button>
              </div>
            ) : null}
            {showSidebar ? (
              <div
                className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 transition-transform ${
                  showSidebar ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <button className="grow bg-white px-8 py-4 font-bold text-gray-400 rounded-full text-sm">
                  Login
                </button>
                <button className="grow bg-blue-500 px-8 py-4 font-bold text-white rounded-full text-sm">
                  Sign Up
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* hero */}
      <div>
        <div className="container mx-auto p-4 ">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 col-span-12">
              <div>
                <button>
                  Explore the world span
                  <img src={travel} alt="" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <div>
                <img src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
    </>
  );
}

export default App;
