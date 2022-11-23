import React, { useState, Fragment, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import Graph from "../../assets/Graph.png";
import Ownerprofile from "./Ownerprofile";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  // show: boolean;
  // setShow: Dispatch<SetStateAction<boolean>>;
};

const EmployeePage = (Props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="     ">
        {/* <!-- This is an example component --> */}
        <div>
          <div className="flex w-full h-screen overflow-hidden  ">
            {/* <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div> */}
            <div
              id="main-content"
              className="h-full w-full bg-gray-50 relative overflow-y-auto "
            >
              <main>
                <div className="pt-9 px-4">
                  <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-shrink-0">
                          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            $45,385
                          </span>
                          <h3 className="text-base font-normal text-gray-500">
                            Sales this week
                          </h3>
                        </div>
                        <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                          12.5%
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>{" "}
                      </div>
                      <div id="main-chart">
                        <img
                          className="w-full h-full"
                          // sizes={30}
                          src={Graph}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Latest Transactions
                          </h3>
                          <span className="text-base font-normal text-gray-500">
                            This is a list of latest transactions
                          </span>
                        </div>
                        <div className="flex-shrink-0">
                          <a
                            href="/"
                            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                          >
                            View all
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col mt-8">
                        <div className="overflow-x-auto rounded-lg">
                          <div className="align-middle inline-block min-w-full">
                            <div className="shadow overflow-hidden sm:rounded-lg">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Transaction
                                    </th>
                                    <th
                                      scope="col"
                                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Date & Time
                                    </th>
                                    <th
                                      scope="col"
                                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                      Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white">
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Bonnie Green
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 23 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $2300
                                    </td>
                                  </tr>
                                  <tr className="bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment refund to{" "}
                                      <span className="font-semibold">
                                        #00910
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 23 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      -$670
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment failed from{" "}
                                      <span className="font-semibold">
                                        #087651
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 18 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $234
                                    </td>
                                  </tr>
                                  <tr className="bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Lana Byrd
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $5000
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Jese Leos
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $2300
                                    </td>
                                  </tr>
                                  <tr className="bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        THEMESBERG LLC
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 11 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $560
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Lana Lysle
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 6 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $1437
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- boxs --> */}
                  <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            2,340
                          </span>
                          <h3 className="text-base font-normal text-gray-500">
                            New products this week
                          </h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                          14.6%
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            5,355
                          </span>
                          <h3 className="text-base font-normal text-gray-500">
                            Visitors this week
                          </h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                          32.9%
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                            385
                          </span>
                          <h3 className="text-base font-normal text-gray-500">
                            User signups this week
                          </h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                          -2.7%
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <Link to="/employeehomepage/landregistration"> Landreg </Link>
              <Link to="/employeehomepage/employeeprofile">empprofile</Link>
              <div className="">
                <button
                  onClick={openModal}
                  //onClick={() => setOwner(true)}
                  className=" top-0 px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600  focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
                >
                  open modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<Ownerprofile show={isOpen} setShow={setIsOpen} />}
    </>
  );
};

export default EmployeePage;
