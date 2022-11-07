import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Secure from "../../assets/Secure.svg";

function Wellcomepage() {
  return (
    <>
      {/* <div className=" flex md:flex-row flex-col-reverse justify-center items-center max-w-[1240px] h-screen mx-auto px-3 bg scroll-smooth ">
        <div className=" pr-4">
          <h1 className="md:text-6xl text-4xl font-bold text-[#F43855]">
            Wellcome dolor sit amet.
          </h1>
          <p className="md:text-base text-sm  my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptas, quasi quaerat cum nisi ipsa.
            <br />
            Perferendis harum culpa aliquid natus repellendus,
          </p>
          <button className="p-2  w-full   bg-[#F43855] text-white rounded-md md:w-40 text-lg">
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
        <div className="">
          <img src={Secure} alt="" />
        </div>
      </div> */}
      <section>
        <div class="bg-black text-white py-20 h-screen">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 class="text-3xl md:text-5xl  text-yellow-300 tracking-loose">
                TechFest
              </h1>
              <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Space : The Timeless Infinity
              </h2>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Explore your favourite events and register now to showcase your
                talent and win exciting prizes.
              </p>
              <a
                href="/"
                class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                <Link to="/signup">Get Started</Link>
              </a>
            </div>
            <div class="p-8 mt- mb- md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              {/* <div class="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    class="inline-block mt-28 hidden xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-28 hidden lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wellcomepage;
