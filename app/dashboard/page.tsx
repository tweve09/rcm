import Image from "next/image";

import logo from "../../public/assets/logo.png";
import search from "../../public/assets/search.svg";
import profile from "../../public/assets/profile.jpg";
export default function Dashboard() {
  return (
    <>
      <div className="bg-customBackground p-4">
        <div className="container flex justify-between items-center">
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
            <div>
              <Image
                src={profile}
                alt="profile picture"
                width={60}
                height={60}
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
