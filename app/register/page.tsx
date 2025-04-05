"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

import white_logo from "../../public/assets/Logo_white.png";
import register_image from "../../public/assets/register.png";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e: React.FormEvent) => {
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
              src={register_image}
              alt="register"
              width={500}
              height={539}
              className="mx-auto"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-white text-center text-xl font-semibold">
              Heart care, Heart trust
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="ml-52">
            <div className="mt-32">
              <p className="text-2xl font-semibold text-customText">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-secondBackground hover:text-[#06c3d4] transition"
                >
                  Sign in
                </Link>
              </p>
              <h1 className="text-customText font-bold text-6xl mt-10">
                Join Us!
              </h1>
            </div>
            <div className="mt-12">
              <form onSubmit={handleRegister}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                />
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
                <Input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <Button type="submit" title="Sign up" className="w-[450px]" />
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
