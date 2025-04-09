"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import white_logo from "../../public/assets/Logo_white.png";
import login_image from "../../public/assets/login.png";
import Button from "@/components/UI/Button";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleHome = () => {
    router.push("/");
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-customBackground">
        {/* Left Column - Hidden on mobile */}
        <div className="hidden md:flex md:basis-1/2 bg-secondBackground flex-col items-center">
          <div className="w-full px-10 pt-5">
            <Image
              className="cursor-pointer hover:opacity-90 transition-opacity"
              src={white_logo}
              alt="logo"
              width={60}
              height={60}
              onClick={handleHome}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center px-10">
            <div className="mb-8 w-full max-w-[500px]">
              <Image
                src={login_image}
                alt="register"
                className="mx-auto"
                width={500}
                height={600}
                priority
              />
            </div>

            <h1 className="text-white text-center text-2xl md:text-3xl font-semibold px-4">
              Caring for your Patients' heart, one beat at a time.
            </h1>
          </div>
        </div>

        {/* Right Column - Always visible */}
        <div className="w-full md:basis-1/2 p-4 md:p-8 lg:p-12">
          <div className="max-w-md mx-auto md:ml-12 lg:ml-16 xl:ml-24">
            <div className="mt-8 md:mt-12 lg:mt-24">
              <p className="text-xl md:text-2xl text-customText">
                Are you new?{" "}
                <Link
                  href="/register"
                  className="text-secondBackground hover:text-[#06c3d4] transition-colors duration-200 font-semibold"
                >
                  Create account.
                </Link>
              </p>

              <h1 className="text-customText font-bold text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-8">
                Welcome back!
              </h1>
            </div>

            <div className="mt-8 md:mt-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 font-medium">
                      This field is required
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-secondBackground transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400 shadow-sm"
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500 font-medium">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <Link
                    href="/forgotpassword"
                    className="text-secondBackground hover:text-[#06c3d4] transition-colors duration-200 text-lg font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full" title="Sign in" />
              </form>

              <div className="mt-6">
                <button className="flex items-center justify-center w-full gap-4 p-3 border-2 border-gray-300 rounded-md hover:border-gray-400 transition-colors duration-200">
                  <FcGoogle className="h-6 w-6" />
                  <span className="text-lg text-secondBackground font-medium">
                    Sign in with Google
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
