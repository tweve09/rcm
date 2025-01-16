import Image from "next/image";

import logo from "../public/assets/heart_pulse.svg";
import doctor from "../public/assets/doctor.png";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-customBackground">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-3">
            <div>
              <Image src={logo} alt="logo" width={60} height={60} />
            </div>
            <div className="flex">
              <a
                href=""
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Home
              </a>
              <a
                href=""
                className="mx-5 text-3xl font-semibold text-customText"
              >
                About us
              </a>
              <a
                href=""
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Features
              </a>
              <a
                href="/register"
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex">
            <div className="basis-1/2">
              <h1 className="font-extrabold text-customText text-6xl mt-48 mb-16">
                Expertly interpreting your patients' heartbeats
              </h1>
              <p className="text-[#2C3D68BD] text-2xl mb-24">
                We understand that interpreting ECG readings can be a complex
                task, and our goal is to provide you with the tools to
                accurately diagnose and treat your patients
              </p>

              <div>
                <button className="border-none w-[220px] rounded-md text-white bg-[#008894] text-2xl p-3 mt-8">
                  Join us
                </button>
              </div>
            </div>
            <div className="basis-1/2 overflow-hidden">
              <Image
                src={doctor}
                className="w-full h-full object-cover transform scale-125"
                alt="doctor image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
