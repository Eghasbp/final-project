import React from "react";
import { FcSynchronize, FcCheckmark } from "react-icons/fc";

const Notification = ({
  title,
  description,
  setVisible,
  visible,
  severity = "success",
}) => {
  if (visible) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-5">
          <div
            className={`max-w-lg rounded  overflow-hidden shadow-md ${
              severity === "success"
                ? "bg-green-100 text-green-700 shadow-green-500/20"
                : "shadow-red-500/20 bg-red-100 text-red-700"
            }`}
          >
            <div className="flex">
              <div className="flex items  -center gap-4 p-4">
                <div className="shrink-0">
                  {severity === "success" ? (
                    <FcCheckmark className="w-8 h-8" />
                  ) : (
                    <FcSynchronize className="w-8 h-8" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="font-bold capitalize">{title}</p>
                  <p className="text-sm">{description}</p>
                </div>
                <button
                  onClick={() => setVisible(false)}
                  className="ml-4 mt-3 w-8 p-1 h-8 text-red-500 font-bold hover:bg-red-200 hover:rounded-full"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Notification;
