"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import white_logo from "../../public/assets/Logo_white.png";
import register_image from "../../public/assets/register.png";
import google_icon from "../../public/assets/google_icon.svg";

export default function Register() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/dashboard");
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex bg-customBackground">
        <div className="basis-1/2 bg-secondBackground">
          <div className="ml-10 mt-10">
            <Image
              className="cursor-pointer"
              src={white_logo}
              alt="logo"
              width={60}
              height={60}
              onClick={handleHome}
            />
          </div>
          <div className="mt-20">
            <Image
              src={register_image}
              alt="register"
              width={500}
              height={539}
              className="mx-auto"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-white text-center text-2xl font-semibold">
              Heart care, Heart trust
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="ml-52">
            <div className="mt-32">
              <p className="text-2xl font-semibold text-customText">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-secondBackground hover:text-[#06c3d4] transition"
                >
                  Sign in
                </a>
              </p>
              <h1 className="text-customText font-bold text-6xl mt-10">
                Join Us!
              </h1>
            </div>
            <div className="mt-12">
              <form action="">
                <div className="mb-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                  />
                </div>
                <button
                  type="button"
                  className="text-2xl border-none bg-secondBackground text-white hover:bg-[#06c3d4] w-[450px] p-3 transition rounded-md"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
              </form>
              <button className="flex justify-center items-center mt-8 border-2 border-gray-300 w-[450px] p-3 rounded-md hover:border-3 hover:border-gray-400 transition">
                <Image
                  src={google_icon}
                  alt="google icon"
                  width={40}
                  height={40}
                />
                <span className="text-2xl text-secondBackground hover:text-[#06c3d4] font-semibold pl-6">
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
