import React from "react";
import image from "../../assets/hero-image.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-[#264653]">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-[#e9c46a]">
            Hello KeyBoard Geeks!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
            Wanna <span className="text-[#e9c46a] font-medium">buy/sell</span>{" "}
            original keyBoards at a reasonable price? <br />
            <span className=" text-[#e9c46a] ">KeyBoard Warrior</span> is the
            place to go.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
    </section>
  );
};

export default Home;
