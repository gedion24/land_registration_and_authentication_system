import React from "react";

function modal({ visable, onClose }) {
  const handleonclose = () => {
    onClose();
  };
  if (!visable) return null;

  return (
    <>
      <div
        //  onClick={handleonclose}
        className=" fixed     inset-0  bg-black opacity-25 backdrop-blur-sm flex flex-col justify-center items-center "
      >
        <div className="bg-red-400 z-50 ">
          <div className=" flex flex-col w-[900px] h-[600px]  ">
            <div className=" flex justify-end p-3">
              <button
                onClick={onClose}
                className="  px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
              >
                close
              </button>
            </div>
            <div className="flex h-full">
              <div className="w-2/3 p-5 h-auto ">
                <div className=" w-full h-72 bg-red-300"></div>
              </div>
              <div className="w-full h-full p-4 bg-gray-00">
                <div className="flex flex-col my-5 ">
                  <span className=" font-bold text-2xl">Owner Info</span>
                  <div className="grid grid-cols-2 gap-1 mx-4 my-3">
                    <div className=" my-4">
                      <h1 className="font-semibold text-lg">First name</h1>
                      <p>jane doe</p>
                    </div>
                    <div className="my-4 ">
                      <h1 className="font-semibold text-lg">Middle name</h1>
                      <p>jane doe</p>
                    </div>
                    <div className=" my-4">
                      <h1 className="font-semibold text-lg">Last name</h1>
                      <p>jane doe</p>
                    </div>
                    <div className="my-4 ">
                      <h1 className="font-semibold text-lg">Phone Number</h1>
                      <p>0991222</p>
                    </div>
                    <div className=" my-4">
                      <h1 className="font-semibold text-lg">Nationality</h1>
                      <p>0991222</p>
                    </div>
                    <div className="my-4 ">
                      <h1 className="font-semibold text-lg">Email</h1>
                      <p>0991222</p>
                    </div>
                    <div className="my-4 ">
                      <h1 className="font-semibold text-lg">sex</h1>
                      <p>0991222</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default modal;
