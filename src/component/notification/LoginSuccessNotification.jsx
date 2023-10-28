import React from "react";
import { FcCheckmark } from "react-icons/fc";

const LoginSuccessNotification = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex flex-col gap-5">
        <div className="max-w-lg rounded overflow-hidden shadow-md ">
          <div className="flex">
            <div className="flex items  -center gap-4 p-4">
              <div className="shrink-0">
                <FcCheckmark className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-bold capitalize">Login Success</p>
                <p className="text-sm">Enjoy your meal and let's go !</p>
              </div>
              <button className="ml-4 mt-3 w-8 p-1 h-8 text-red-500 font-bold hover:bg-red-200 hover:rounded-full">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessNotification;
