"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/logo.png";
import doctor from "../public/assets/doctor.png";
import Button from "@/components/UI/Button";

export default function Home() {
  const router = useRouter();

  const handleJoinUs = () => {
    router.push("/register");
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen bg-customBackground">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-5">
            <div>
              <Image
                className="cursor-pointer"
                src={logo}
                alt="logo"
                width={60}
                height={60}
                onClick={handleHome}
              />
            </div>
            <div className="flex">
              <Link
                href=""
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="mx-5 text-3xl font-semibold text-customText"
              >
                About us
              </Link>
              <Link
                href="/features"
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Features
              </Link>
              <Link
                href="/register"
                className="mx-5 text-3xl font-semibold text-customText"
              >
                Join us
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex">
            <div className="basis-1/2">
              <h1 className="font-extrabold text-customText text-6xl mt-48 mb-16">
                Expertly interpreting your patients&apos; heartbeats
              </h1>
              <p className="text-[#2C3D68BD] text-2xl mb-24">
                We understand that interpreting ECG readings can be a complex
                task, and our goal is to provide you with the tools to
                accurately diagnose and treat your patients
              </p>

              <Button
                type="button"
                onClick={handleJoinUs}
                className="w-[220px] mt-8"
                title="Join us"
              />
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
