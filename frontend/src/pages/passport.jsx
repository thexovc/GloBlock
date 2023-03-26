import Image from "next/image";
import flag from "../assets/flag.png";
import woman from "../assets/woman.png";
import vector from "../assets/Vector.png";
import arrow from "../assets/arrow.png";
import Link from "next/link";

const passport = () => {
  return (
    <div className="w-full bg-[#252C31] text-white min-h-screen py-10  md:py-20">
      <div className="flex gap-10 w-full justify-center items-center">
        <h1 className=" text-3xl md:text-4xl font-bold">Yuvi's Passport</h1>
        <Image src={flag} />
      </div>
      <h1 className="py-10 text-xl md:text-3xl font-semibold">
        United Kingdom of Great Britain and Northern Ireland{" "}
      </h1>

      <div className="w-full flex flex-col items-center gap-5 justify-center">
        <Image src={woman} alt="" />
        <Image src={vector} alt="" />
      </div>

      <div className="w-[90%] mx-auto mt-10 flex justify-end">
        <Link href={"/passportPage"}>
          <Image src={arrow} />
        </Link>
      </div>
    </div>
  );
};

export default passport;
