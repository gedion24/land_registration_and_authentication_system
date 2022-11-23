import { type } from "os";
import React, { Dispatch, SetStateAction, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
const Ownerprofile = ({ show, setShow }: props) => {
  const [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* {show && (
        <div className=" fixed   inset-0  w-full h-screen flex flex-col justify-center items-center bg-black opacity-30 backdrop-blur-sm z-40 ">
          {" "}
         
          <div className="bg-white z-50 ">
            <div className=" flex flex-col w-[900px] h-[600px]  ">
              <div className=" flex justify-end p-3">
                <button
                  //onClick={toggleowner}
                  onClick={() => setShow(false)}
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
      )} */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                      //onClick={() => setShow(true)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Ownerprofile;
