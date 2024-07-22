import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[50%] bg-[#3399CC] flex justify-center items-center">
        <img src="/assets/wave.gif" alt="A doctor waving" className="w-full" />
      </div>
      <div className="w-[50%] h-full p-6 flex flex-col justify-center items-center">
        <div>
          <img
            src="/assets/logo-text.png"
            alt="CareTrack Logo"
            className="w-40"
          />
        </div>
        <div className="w-full mt-5 flex gap-3">
          <form className="w-full flex flex-col gap-5 items-center">
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="email" className="text-sm text-black">Email</label>
              <input type="email" name="email" id="email" className="outline-none border-2 border-primary p-2 px-3 rounded-lg"/>
            </div>
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="email" className="text-sm text-black">Password</label>
              <input type="password" name="password" id="password" className="outline-none border-2 border-primary p-2 px-3 rounded-lg"/>
            </div>
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="email" className="text-sm text-black">Confirm Password</label>
              <input type="password" name="password" id="password" className="outline-none border-2 border-primary p-2 px-3 rounded-lg"/>
            </div>
            <button className="w-[50%] bg-primary text-white p-3 rounded-lg font-semibold">Continue</button>
          </form>
        </div>
        <p className="mt-5 text-sm">
          Already have an account?{" "}
          <span className="text-primary">
            <Link href={"/"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
