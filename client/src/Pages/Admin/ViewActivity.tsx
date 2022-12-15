import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from "react";
import { Dialog, Transition } from "@headlessui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  viewactvity: boolean;
  setViewactvity: Dispatch<SetStateAction<boolean>>;
  setid: number;
};

const ViewActivity = ({ viewactvity, setViewactvity, setid }: Props) => {
  return (
    <>
      <Transition appear show={viewactvity} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setViewactvity}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            {<ToastContainer />}
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
                <div className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle  transition-all">
                  <div className=" flex justify-between items-center p-3">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-semibold my-0"></h2>
                      <p className="text-sm font-light">
                        Staff Registration From
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={}
                      onClick={() => setViewactvity(false)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="w-full h-auto ">
                    <div className="w-full h-full bg-white flex flex-col px-8 ">
                      <h1>{setid}</h1>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ViewActivity;
