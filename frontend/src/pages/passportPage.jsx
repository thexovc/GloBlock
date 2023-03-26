import Image from "next/image";
import Link from "next/link";
import cancel from "../assets/cancel.png";
import docgh from "../assets/docgh.png";

const passportPage = () => {
  return (
    <div className="w-full bg-[#252C31] text-white min-h-screen py-10  md:py-20">
      <div className="w-[90%] mx-auto flex justify-end">
        <Link href={"/passport"}>
          <Image src={cancel} />
        </Link>
      </div>

      <div className="w-5/6 md:w-2/3 mx-auto border-2 mt-5 border-[#907C4D] p-5">
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <h1 className="md:text-2xl font-semibold">Type</h1>
            <p className="md:text-xl text-[#786641]">P</p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-2xl font-semibold">Code</h1>
            <p className="md:text-xl text-[#786641]">GBR</p>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-2xl font-semibold">Passport Number</h1>
            <p className="md:text-xl text-[#786641]">56986793</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-5 items-start">
          <div className="flex flex-col items-start">
            <h1 className="md:text-xl font-semibold">Surname</h1>
            <p className="md:text-xl text-[#786641]">GREWELLA</p>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="md:text-xl font-semibold">Given Names/Pronouns</h1>
            <p className="md:text-xl text-[#786641]">YUVI </p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="md:text-xl font-semibold">Nationality</h1>
            <p className="md:text-xl text-[#786641]">BRITISH CITIZEN</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="md:text-xl font-semibold">Date of birth </h1>
            <p className="md:text-xl text-[#786641]">04 DEC/ 1998</p>
          </div>

          {/* 2 columns */}
          <div className="w-full flex justify-between">
            <div>
              <h1 className="md:text-xl font-semibold">SEX </h1>
              <p className="md:text-xl text-[#786641]">F</p>
            </div>
            <div>
              <h1 className="md:text-xl font-semibold">Place of birth </h1>
              <p className="md:text-xl text-[#786641]">CROYDON</p>
            </div>
          </div>
          {/* 2 COLUmns */}
          {/* 2 columns */}
          <div className="w-full flex justify-between">
            <div>
              <h1 className="md:text-xl font-semibold">Date of expiry </h1>
              <p className="md:text-xl text-[#786641]">27 SEP/ SEPT 25</p>
            </div>
            <div>
              <h1 className="md:text-xl font-semibold">Holders signature </h1>
              <p className="md:text-xl text-[#786641]"></p>
            </div>
          </div>
          {/* 2 COLUmns */}

          {/* 2 columns */}
          <div className="w-full flex justify-between">
            <div>
              <h1 className="md:text-xl font-semibold">Date of Issue </h1>
              <p className="md:text-xl text-[#786641]">28 SEP/ SEPT 15</p>
            </div>
            <div>
              <h1 className="md:text-xl font-semibold">Authority </h1>
              <p className="md:text-xl text-[#786641]">HMPO</p>
            </div>
          </div>
          {/* 2 COLUmns */}
        </div>
      </div>

      <div className="w-full mt-10 flex items-center flex-col font-bold gap-2">
        {/* document desc */}
        <h1>THIS DOCUMENT IS FOR OFFICIAL PURPOSES ONLY </h1>
        <h1>VERIFIED BY UK VISAS AND IMMIGRATION </h1>
        <div className="w-full flex justify-center">
          <Image src={docgh} />
        </div>
        {/* document desc */}
      </div>
    </div>
  );
};

export default passportPage;
