/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import land from "../../assets/land.png";

function Navbar() {
  const [showOption, setShowOption] = useState(false);
  const [signout, setSignOut] = useState(false);
  const handlesignout = () => {
    setSignOut(!signout);
  };
  const handleclick = () => {
    setShowOption(!showOption);
  };

  return (
    <>
      <div className=" w-full h-20 border-b-[1px] border-slate-200 bg-slate-00 flex justify-between">
        {/* LEFT SIDE NAV */}
        <div className=" flex items-center md:mx-10 mx-0 ">
          <img src={land} alt="" className="w-32 h-full " />
          <ul className="hidden md:flex p-3 ">
            <button className=" mx-3">Home</button>
            <button className="mx-3">Land Owners</button>
            <button className="mx-3">Land Details</button>
            {/* <button className="mx-3">Registration</button> */}
            <div class="relative inline-block text-left pl-2 ">
              <div>
                <button
                  onClick={handleclick}
                  type="button"
                  class="inline-flex w-full justify-center px-2 border-none py-2  text-gray-700  "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Registration
                </button>
              </div>
              {showOption && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="/"
                      class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="/"
                      class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* PROFILE NAV */}
        <div className=" md:mx-10 mx-4  flex  justify-center items-center   ">
          <div className="flex h-14  ">
            {/* this comes after the emp sign in */}
            <div class="m-1 mr-2 w-12 h-12 relative  rounded-full bg-gray-500 text-xl text-white z-10">
              <button onClick={handlesignout}>
                {" "}
                <img
                  src="http://source.unsplash.com/100x100/?girl"
                  class="rounded-full"
                />
              </button>
              {signout && (
                <div
                  class=" right-0 z-10 mt-2 md:w-56 w-40  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      View Profile
                    </button>
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className=" hidden lg:flex  ">
              <div class="font-medium dark:text-black  ">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
