"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";

import white_logo from "../../public/assets/Logo_white.png";
import login_image from "../../public/assets/login.png";
import google_icon from "../../public/assets/google_icon.svg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
              <form onSubmit={handleLogin}>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="mb-8">
                  <Link
                    href="/forgotpassword"
                    className="text-secondBackground text-2xl hover:text-[#06c3d4] transition font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-[450px]" title="Sign in" />
              </form>
              <button className="flex justify-center items-center mt-8 border-2 border-gray-300 w-[450px] p-3 rounded-md hover:border-3 hover:border-gray-400 transition">
                <FcGoogle className="h-8 w-8" />
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
