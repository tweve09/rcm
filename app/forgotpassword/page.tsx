import Image from "next/image";

import white_logo from "../../public/assets/Logo_white.png";
import security from "../../public/assets/security.png";
export default function ForgotPassword() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="basis-1/2 bg-secondBackground">
          <div className="ml-10 mt-10">
            <Image src={white_logo} alt="logo" width={60} height={60} />
          </div>
          <div className="mt-20">
            <Image
              src={security}
              alt="register"
              className="mx-auto"
              width={550}
              height={600}
            />
          </div>
        </div>
        <div className="basis-1/2 bg-customBackground">
          <h1 className="text-customText font-bold text-5xl text-center mt-48">
            Reset password
          </h1>
          <p className="text-customText w-[60%] text-2xl mx-auto text-center mt-10">
            Just enter the email address you registered with and we’ll send you
            a link to reset your password.
          </p>

          <form action="" method="post" className="mt-10 text-center">
            <div className="mb-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-white w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
              />
            </div>
            <button
              type="submit"
              className="text-2xl border-none bg-secondBackground text-white hover:bg-[#06c3d4] w-[450px] p-3 transition rounded-md"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
