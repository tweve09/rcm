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
        {/* Navigation Bar */}
        <header className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Image
                className="cursor-pointer hover:opacity-90 transition-opacity"
                src={logo}
                alt="logo"
                width={60}
                height={60}
                onClick={handleHome}
                priority
              />
            </div>

            <nav className="flex flex-wrap justify-center gap-3 sm:gap-5">
              <Link
                href="/"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-customText hover:text-secondBackground transition-colors px-2 py-1"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-customText hover:text-secondBackground transition-colors px-2 py-1"
              >
                About us
              </Link>
              <Link
                href="/features"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-customText hover:text-secondBackground transition-colors px-2 py-1"
              >
                Features
              </Link>
              <Link
                href="/register"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-customText hover:text-secondBackground transition-colors px-2 py-1"
              >
                Join us
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Content Section */}
            <div className="w-full lg:basis-1/2 mt-12 sm:mt-16 md:mt-24 lg:mt-0">
              <h1 className="font-extrabold text-customText text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 md:mb-10">
                Expertly interpreting your patients' heartbeats
              </h1>

              <p className="text-[#2C3D68BD] text-lg sm:text-xl md:text-2xl mb-8 md:mb-12">
                We understand that interpreting ECG readings can be a complex
                task, and our goal is to provide you with the tools to
                accurately diagnose and treat your patients
              </p>

              <Button
                type="button"
                onClick={handleJoinUs}
                className="w-full sm:w-[220px]"
                title="Join us"
              />
            </div>

            {/* Image Section */}
            <div className="w-full lg:basis-1/2 relative mt-10 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={doctor}
                  className="w-full h-full object-cover"
                  alt="Doctor analyzing heartbeats"
                  priority
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
