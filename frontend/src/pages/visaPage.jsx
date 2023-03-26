import Image from "next/image";
import Link from "next/link";
import cancel from "../assets/cancel.png";

const visaPage = () => {
  return (
    <div
      className="w-full bg-[#252C31] text-[#eee] min-h-screen py-10 
    flex flex-col md:py-20 bg-[url('../assets/bgvisa.png')] md:bg-repeat md:bg-contain bg-no-repeat bg-cover"
    >
      <div className="w-[90%] mx-auto flex justify-end">
        <Link href={"/visa"}>
          <Image src={cancel} />
        </Link>
      </div>

      <div className="w-[90%] mx-auto flex flex-col">
        <h1 className="font-bold text-3xl">INDIAN E-VISA</h1>
        <h1 className="font-bold text-3xl">
          Electronic Travel Authorisation (ETA)
        </h1>

        {/* small info */}
        <p className="mt-5">Dear YUVI GREWELLA, </p>
        <p>Your applicarion for Indian Visa has been proecessed with </p>
        <p>the following result: GRANTED </p>
        <p>ETA NUMBER: 564878 </p>
        {/* small info */}

        {/* more info */}
        <p className="mt-5 ">Application ID: 8978173 </p>
        <p>Passport Number: 56986793 </p>
        <p>Nationality: British Citizen </p>
        <p>Visa Type: e-Visa </p>
        <p>Service Name: eTOURIST visa </p>
        <p>Number of Entries: Multiple </p>
        <p>Date of issue of ETA: 09/NOV/2017 </p>
        <p>Date of expiry of ETA: 07/nov/2022 </p>
        <p>Activities permitted: Recreation/Sightseeing </p>
        <p>Continuous visit during each visit should not exceed 180 days. </p>
        <p>
          Multiple entries within the e-Visa validity period stamped on your
          passport.{" "}
        </p>
        {/* more info */}
      </div>
    </div>
  );
};

export default visaPage;
