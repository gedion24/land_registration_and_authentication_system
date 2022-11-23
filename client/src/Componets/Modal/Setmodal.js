import React, { useState } from "react";
import Modal from "./Modal";
function Setmodal() {
  const [showmodal, Setmodal] = useState(false);
  const handleclose = () => Setmodal(false);

  return (
    <>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => Setmodal(true)}
          //onClick={() => setShow(false)}
          className="  px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
        >
          open
        </button>

        <Modal onClose={handleclose} visable={showmodal} />
      </div>
    </>
  );
}

export default Setmodal;
