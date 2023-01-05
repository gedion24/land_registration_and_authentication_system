import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.jpg";
type Props = {};

const PasswrdPage = (props: Props) => {
  let { userId } = useParams();

  // const id = router.query;
  React.useEffect(() => {
    // console.log(id);
  }, []);
  return (
    <>
      <div className=" w-full h-screen  bg-slate-200/100 flex flex-col justify-center items-center font-poppins ">
        <div className=" bg-white md:w-[800px] w-[400px] h-96 flex rounded-lg flex-col items-center  ">
          <div className=" md:w-32 w-28 md:h-32 h-28   rounded-full -mt-[70px]">
            <img src={logo} className="rounded-full drop-shadow-xl" alt="" />
          </div>
          <div className="md:mt-5 mt-14">
            <h1 className="font-bold md:text-xl text-base text-center">
              Security password for {userId}
            </h1>
            <h1 className="font-light md:text-base text-sm">
              Please enter secret key to access full information
            </h1>
            <div className=" w-full md:px-0  mt-4">
              <div className=" ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-800 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswrdPage;
