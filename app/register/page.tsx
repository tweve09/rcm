"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import white_logo from "../../public/assets/Logo_white.png";
import register_image from "../../public/assets/register.png";
import Button from "@/components/UI/Button";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm password is required" }),
});

type FormData = z.infer<typeof schema>;

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-customBackground">
        {/* Left Column - Hidden on mobile */}
        <div className="hidden md:flex md:basis-1/2 bg-secondBackground flex-col">
          <div className="px-10 pt-10">
            <Image
              className="cursor-pointer hover:opacity-90 transition-opacity"
              src={white_logo}
              alt="logo"
              width={60}
              height={60}
              onClick={handleHome}
              priority
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center px-4">
            <div className="mb-8 w-full max-w-[500px]">
              <Image
                src={register_image}
                alt="register"
                width={500}
                height={539}
                className="mx-auto"
                priority
              />
            </div>

            <h1 className="text-white text-center text-xl md:text-2xl font-semibold px-4">
              Heart care, Heart trust
            </h1>
          </div>
        </div>

        {/* Right Column - Registration Form */}
        <div className="w-full md:basis-1/2 p-4 md:p-8 lg:p-12">
          <div className="max-w-md mx-auto md:ml-12 lg:ml-16 xl:ml-24">
            <div className="mt-8 md:mt-12 lg:mt-24">
              <p className="text-xl md:text-2xl text-customText">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-secondBackground hover:text-[#06c3d4] transition-colors duration-200 font-semibold"
                >
                  Sign in
                </Link>
              </p>

              <h1 className="text-customText font-bold text-4xl md:text-5xl lg:text-6xl mt-6 md:mt-8">
                Join Us!
              </h1>
            </div>

            <div className="mt-8 md:mt-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Full name"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500 font-medium">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Confirm password"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.confirmPassword && (
                    <span className="text-sm text-red-500 font-medium">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <Button type="submit" title="Sign up" className="w-full" />
              </form>

              <div className="mt-6">
                <button className="flex items-center justify-center w-full gap-4 p-3 border-2 border-gray-300 rounded-md hover:border-gray-400 transition-colors duration-200">
                  <FcGoogle className="h-6 w-6" />
                  <span className="text-lg text-secondBackground font-medium">
                    Sign up with Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
