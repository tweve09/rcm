"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import white_logo from "../../public/assets/Logo_white.png";
import login_image from "../../public/assets/login.png";
import google_icon from "../../public/assets/google_icon.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(result);

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setMessage("Invalid credentials");
    }
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
              src={login_image}
              alt="register"
              className="mx-auto transform scale-125"
              width={500}
              height={600}
            />
          </div>
          <div className="mt-20">
            <h1 className="text-white text-center text-2xl font-semibold">
              Caring for your Patients’ heart, one beat at a time.
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="ml-52">
            <div className="mt-32">
              <p className="text-2xl font-semibold text-customText">
                Are you new?
                <Link
                  href="/register"
                  className="text-secondBackground hover:text-[#06c3d4] transition p-1"
                >
                  Create account.
                </Link>
              </p>
              <h1 className="text-customText font-bold text-6xl mt-10">
                Welcome back!
              </h1>
            </div>
            <div className="mt-12">
              {message && (
                <>
                  <div className="text-xl text-red-600 p-3">{message}</div>
                </>
              )}
              <form onSubmit={handleLogin}>
                <div className="mb-8">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-8">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-8">
                  <Link
                    href="/forgotpassword"
                    className="text-secondBackground text-2xl hover:text-[#06c3d4] transition font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="text-2xl border-none bg-secondBackground text-white hover:bg-[#06c3d4] w-[450px] p-3 transition rounded-md"
                >
                  Sign in
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
