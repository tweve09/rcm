"use client";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import search from "../../public/assets/search.svg";
import profile from "../../public/assets/profile.jpg";
import bell from "../../public/assets/bell.svg";
import ecg from "../../public/assets/ecg.png";
import file from "../../public/assets/file.svg";
export default function Dashboard() {
  return (
    <>
      <div>
        <div className="bg-customBackground p-3">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex">
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={60}
                className="cursor-pointer ml-6"
              />
              <div className="relative w-[450px] ml-6">
                <input
                  placeholder="Search Patients"
                  type="search"
                  name=""
                  id=""
                  className="w-full outline-none placeholder:text-xl placeholder:text-[#959EB3]  border border-[#959EB3] rounded-full p-3 pl-12"
                />
                <Image
                  src={search}
                  alt="search-icon"
                  width={30}
                  height={30}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Image
                  src={profile}
                  alt="profile picture"
                  width={60}
                  height={60}
                  className="object-contain rounded-full"
                />
                <h1 className="text-2xl ml-6 text-customText font-semibold cursor-pointer">
                  Dr. Emmanuel Tweve
                </h1>
                <Image
                  src={bell}
                  alt="notification bell"
                  width={30}
                  height={30}
                  className="rounded-full ml-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          {/* welcome note */}
          <div className="mt-2">
            <h1 className="text-3xl text-customText font-bold">
              Welcome, Dr. Emmanuel Tweve
            </h1>
            <p className="text-xl text-[#2C3D6880] mt-2">
              18 Jan 2025 <span className="ml-10">10:00</span>
            </p>
          </div>
          <div className="mt-2 flex space-x-3">
            <div className="basis-2/3">
              <Image
                src={ecg}
                alt="ecg graph"
                className="w-full cursor-pointer"
              />
            </div>
            <div className="basis-1/3 border border-[#2C3D681A] rounded-md p-4">
              <div className="flex justify-between ">
                <h1 className="text-2xl text-customText font-semibold">
                  Patients
                </h1>
                <p className="text-xl text-customText ">Total: 30</p>
              </div>
              <div className="h-full mt-6">
                <div className="flex justify-between items-center mb-3 p-3 hover:bg-customBackground hover:rounded-lg cursor-pointer">
                  <div>
                    <h1 className="text-2xl text-[#2C3D6880] font-semibold">
                      Noel Swila
                    </h1>
                    <p className="text-[#2C3D6880] text-xl">
                      Since: 12 sept 2023
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#2C3D6880] text-xl font-semibold">
                      19 YRS
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3 bg-secondBackground p-3 rounded-lg cursor-pointer">
                  <div>
                    <h1 className="text-2xl text-white font-semibold">
                      Evance Mwakyoma
                    </h1>
                    <p className="text-white text-xl">Since: 2 oct 2024</p>
                  </div>
                  <div>
                    <h1 className="text-white text-xl font-semibold">18 YRS</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3 p-3  hover:bg-customBackground hover:rounded-lg cursor-pointer">
                  <div>
                    <h1 className="text-2xl text-[#2C3D6880] font-semibold">
                      Anna Yona
                    </h1>
                    <p className="text-[#2C3D6880] text-xl">
                      Since: 12 sept 2021
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#2C3D6880] text-xl font-semibold">
                      32 YRS
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3 p-3  hover:bg-customBackground hover:rounded-lg cursor-pointer">
                  <div>
                    <h1 className="text-2xl text-[#2C3D6880] font-semibold">
                      Aisha Samweli
                    </h1>
                    <p className="text-[#2C3D6880] text-xl">
                      Since: 12 Jan 2022
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#2C3D6880] text-xl font-semibold">
                      25 YRS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex space-x-3">
            <div className="basis-1/3 border border-[#2C3D681A] rounded-md p-2">
              <h1 className="text-2xl text-customText font-semibold">
                Physical examination
              </h1>
              <div className="flex flex-wrap">
                <div className="basis-1/2 p-2">
                  <h1 className="text-xl text-customText text-center p-3">
                    Blood pressure
                  </h1>
                  <div>
                    <h1 className="text-4xl text-secondBackground text-center font-extrabold">
                      120/80{" "}
                      <span className="text-xl text-customText ml-2 ">
                        mmHg
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="basis-1/2 p-2">
                  <h1 className="text-xl text-customText text-center p-3">
                    Heart rate
                  </h1>
                  <div>
                    <h1 className="text-4xl text-secondBackground text-center font-extrabold">
                      76{" "}
                      <span className="text-xl text-customText ml-2 ">Bpm</span>
                    </h1>
                  </div>
                </div>
                <div className="basis-1/2 p-2">
                  <h1 className="text-xl text-customText text-center p-3">
                    Oxygen saturation
                  </h1>
                  <div>
                    <h1 className="text-4xl text-secondBackground text-center font-extrabold">
                      92%{" "}
                    </h1>
                  </div>
                </div>
                <div className="basis-1/2">
                  <h1 className="text-xl text-customText text-center p-3">
                    Respiratory rate
                  </h1>
                  <div>
                    <h1 className="text-4xl text-secondBackground text-center font-extrabold">
                      20{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border border-[#2C3D681A] rounded-md p-2">
              <h1 className="text-2xl text-customText font-semibold">
                Patient History
              </h1>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-[#2C3D6880]">Last checked: 10 Jan 2025</p>
                <Image
                  src={file}
                  alt="update icon"
                  width={25}
                  height={25}
                  className="cursor-pointer"
                />
              </div>
              <p className="text-[#2C3D6880] text-justify mt-2">
                Evance Mwakyoma is a 18-year-old male who presents with a
                complaint of chest pain and shortness of breath. The symptoms
                started a few days ago and have progressively gotten worse. The
                patient reports having a family history of heart disease,
                including his father who passed away from a heart attack at the
                age of 40. The patient reports no prior medical issues or
                hospitalizations. He reports engaging in occasional physical
                activity but has no prior history of chest pain or shortness of
                breath during exercise
              </p>
            </div>
            <div className="basis-1/3 border border-[#2C3D681A] rounded-md p-2">
              <h1 className="text-2xl text-customText font-semibold">
                Medical records
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
