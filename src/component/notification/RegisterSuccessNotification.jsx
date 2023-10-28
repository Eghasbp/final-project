import React from "react";
import { FcCheckmark } from "react-icons/fc";

const RegisterSuccessNotification = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex flex-col gap-5">
        <div className="max-w-lg rounded bg-green-100 text-green-700 overflow-hidden shadow-md shadow-green-500/20">
          <div className="flex">
            <div className="flex items  -center gap-4 p-4">
              <div className="shrink-0">
                <FcCheckmark className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-bold capitalize">Register Success</p>
                <p className="text-sm">
                  Let's login with your created account!
                </p>
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

export default RegisterSuccessNotification;
