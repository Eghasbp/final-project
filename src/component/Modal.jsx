import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-90 "></div>
      <div className="modal-container border border-violet-600 bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto transform transition-transform scale-100 opacity-100 ease-in-out duration-300">
        <div className="modal-content py-4 text-left px-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={onClose} className="modal-close p-2 -mt-4 -mr-4">
              &#215;
            </button>
          </div>
          {/* Modal content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
