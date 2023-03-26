import Link from "next/link";
import React from "react";

const visa = () => {
  return (
    <div className="w-full bg-[#252C31] text-white min-h-screen pt-5 pb-10  md:py-20">
      <div className="flex justify-start">
        <Link
          href={"/homepage"}
          className="p-1 mx-5  mb-5 border-2 border-white rounded w-1/3 r"
        >
          Go back
        </Link>
      </div>

      <h1 className=" text-5xl md:text-6xl font-bold">Yuvi's Visas</h1>
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col gap-5 mt-10 md:mt-20">
        <Link
          href={"/visaPage"}
          className="rounded-lg md:py-20 py-10 md:bg-[url('../assets/india.jpg')] bg-[url('../assets/ret3.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">India</h1>
        </Link>
        <Link
          href={"/visaPage"}
          className="rounded-lg md:py-20 py-10 bg-[url('../assets/ret1.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">Jordan</h1>
        </Link>
        <Link
          href={"/visaPage"}
          className="rounded-lg md:py-20 py-10 bg-[url('../assets/ret2.png')] bg-no-repeat bg-cover"
        >
          <h1 className="text-3xl font-bold">Kenya</h1>
        </Link>
      </div>

      <h1 className="border-[0.1rem] border-white w-2/3 mx-auto mt-5 p-1 font-bold bg-[#464646]">
        View Travel Insurance Documentation
      </h1>
    </div>
  );
};

export default visa;
