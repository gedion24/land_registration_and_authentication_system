import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  Empreg: boolean;
  setEmpreg: Dispatch<SetStateAction<boolean>>;
};

const RegisterEmp = ({ Empreg, setEmpreg }: Props) => {
  const [date, setdate] = useState("");
  return (
    <>
      <Transition appear show={Empreg} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setEmpreg}>
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
                    <h1 className="">Empyee Registration </h1>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      // onClick={}
                      onClick={() => setEmpreg(false)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="w-full h-auto ">
                    <div className="w-full h-full bg-white flex flex-col px-8 py-4">
                      <div className="flex items-center  max-h-min justify-between w-full">
                        <div className="flex flex-col">
                          <h2 className="text-2xl font-semibold my-0">
                            Empyee Registration
                          </h2>
                          <p className="text-sm font-light">
                            View Sales information and manage them here
                          </p>
                        </div>
                        <div className="flex"></div>
                      </div>

                      <div className="mt-10 mx- flex flex-col w-full justify-end">
                        <div className="w-full h-s  ">
                          <section className=" w-full h-full items-start justify-center p-3 rounded-md   text-black">
                            <h1 className="text-xl font-bold capitalize ">
                              Sales Registration Form
                            </h1>
                            <form>
                              <div className="flex justify-between my-4  ">
                                <div className="w-5/6  h- flex flex-col    px-2">
                                  {" "}
                                  <div className="">
                                    <div>
                                      <label className="block text-sm  font-medium">
                                        Employee Image
                                      </label>
                                      <div className="mt-1 flex justify-center  items-center px-6 pt-5 pb-6 border-2 h-96 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                          <svg
                                            className="mx-auto h-12 w-12"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </svg>
                                          <div className="flex text-sm text-gray-600">
                                            <label
                                              htmlFor="file-upload"
                                              className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                              <span className="">
                                                Upload a file
                                              </span>
                                              <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                              />
                                            </label>
                                            <p className="pl-1">
                                              or drag and drop
                                            </p>
                                          </div>
                                          <p className="text-xs">
                                            PNG, JPG, GIF up to 10MB
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-full  h-full  px-2 ">
                                  <div className="col-span-1 w-full space-y-5">
                                    {" "}
                                    <div className="flex space-x-4 ">
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          First Name
                                        </label>
                                        <input
                                          id="username"
                                          type="text"
                                          placeholder="First Name"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-800 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          Middle Name
                                        </label>
                                        <input
                                          id="username"
                                          type="text"
                                          placeholder="Middle Name"
                                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder:text-black bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-800 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          Last Name
                                        </label>
                                        <input
                                          id="username"
                                          type="text"
                                          placeholder="Last Name"
                                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder:text-black bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-800 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                    </div>
                                    <div className=" flex w-full space-x-8">
                                      {" "}
                                      <div className="w-full">
                                        <label
                                          className=" dark:text-gray-900"
                                          htmlFor="passwordConfirmation"
                                        >
                                          Sex
                                        </label>
                                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder:text-black bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-800 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                          <option>male</option>
                                          <option>female</option>
                                          <option>toster</option>
                                        </select>
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          birth date
                                        </label>
                                        <input
                                          id="username"
                                          type="date"
                                          onChange={(e) =>
                                            setdate(e.target.value)
                                          }
                                          placeholder="Birth data"
                                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder:text-black bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex w-full space-x-8">
                                      {" "}
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          Phone number
                                        </label>
                                        <input
                                          id="phonenumber"
                                          type="number"
                                          placeholder="Phone number"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          currnet address
                                        </label>
                                        <input
                                          id="username"
                                          type="text"
                                          placeholder="current address"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex w-full space-x-4">
                                      {" "}
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          Email
                                        </label>
                                        <input
                                          id="username"
                                          type="email"
                                          placeholder="Email"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          User name
                                        </label>
                                        <input
                                          id="username"
                                          type="text"
                                          placeholder="username"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                      <div className="w-full">
                                        <label className="" htmlFor="username">
                                          Password
                                        </label>
                                        <input
                                          id="username"
                                          type="password"
                                          placeholder="Password"
                                          className="block w-full px-4 py-2 mt-2 placeholder:text-black text-gray-800 bg-white border border-gray-300 rounded-md dark:bg-white dark:text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end   space-x-4">
                                <button
                                  type="button"
                                  className="hidden md:flex   px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Canel
                                </button>
                                <button
                                  type="button"
                                  className="  hidden md:flex   px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-center"
                  >
                    LARS
                  </Dialog.Title> */}
                  {/* <div className="mt-2">
              <p className="text-sm text-gray-500">
                Your payment has been successfully submitted. We’ve sent
                you an email with all of the details of your order.
              </p>
            </div> */}
                  {/* <div className="flex h-full">
                    <div className="w-full h-full pt-4 flex flex-col justify-center items-center  bg-gray-00">
                      <h1>Scan the following QR to access full information</h1>
                    </div>
                  </div>

                  <div className="mt-4"></div> */}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RegisterEmp;
