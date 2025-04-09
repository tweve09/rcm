"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import white_logo from "../../public/assets/Logo_white.png";
import security from "../../public/assets/security.png";
export default function ForgotPassword() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Column - Image Section */}
        <div className="hidden lg:flex lg:basis-1/2 bg-secondBackground flex-col">
          <div className="px-8 pt-8 xl:px-12 xl:pt-12">
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

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-[550px] w-full">
              <Image
                src={security}
                alt="Security illustration"
                className="mx-auto"
                width={550}
                height={600}
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Column - Reset Form */}
        <div className="w-full lg:basis-1/2 bg-customBackground flex flex-col items-center justify-center py-12 px-6 sm:px-8 md:px-12">
          <div className="w-full max-w-[450px]">
            <h1 className="text-customText font-bold text-3xl sm:text-4xl md:text-5xl text-center">
              Reset password
            </h1>

            <p className="text-customText text-lg sm:text-xl md:text-2xl text-center mt-6 sm:mt-8">
              Just enter the email address you registered with and we'll send
              you a link to reset your password.
            </p>

            <form className="mt-8 sm:mt-10 w-full">
              <div className="mb-6 sm:mb-8">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-white outline-none placeholder:text-gray-400 placeholder:text-lg sm:placeholder:text-xl p-3 border-2 border-gray-300 rounded-md focus:border-secondBackground transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg sm:text-xl md:text-2xl border-none bg-secondBackground text-white hover:bg-[#06c3d4] p-3 transition-colors duration-200 rounded-md shadow-sm hover:shadow-md"
              >
                Send Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
