import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="w-full bg-[#252C31] text-white min-h-screen py-10  md:py-20">
      <h1 className=" text-5xl md:text-6xl font-bold">Yuvi's HomePage</h1>
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col gap-5 mt-10 md:mt-20">
        <Link
          href={"/passport"}
          className=" rounded-lg p-10 bg-[url('../assets/rec1.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">View your passport</h1>
        </Link>
        <Link
          href={"/visa"}
          className=" rounded-lg p-10 bg-[url('../assets/rec2.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">View your Visas</h1>
        </Link>
        <div className=" rounded-lg p-10 bg-[url('../assets/rec3.png')] bg-no-repeat bg-cover">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <Link
          href={"/contact"}
          className=" rounded-lg p-10 bg-[url('../assets/rec4.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">Contact Us/FAQ</h1>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
