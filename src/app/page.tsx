import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[50%] bg-[#3399CC] flex justify-center items-center">
        <img src="/assets/wave.gif" alt="A doctor waving" className="w-full" />
      </div>
      <div className="w-[50%] h-full p-6 flex flex-col justify-center items-center">
        <div>
          <img src="/assets/logo.png" alt="CareTrack Logo" className="w-40" />
        </div>
        <div className="mt-5 flex gap-3">
          <Link href={"/doctor/login"}>
            <button className="bg-primary p-3 px-6 text-white font-black rounded-xl">
              Continue as a doctor
            </button>
          </Link>
          <Link href={"/patient/login"}>
            <button className="bg-primary p-3 px-6 text-white font-black rounded-xl">
              Continue as a patient
            </button>
          </Link>
        </div>
        <p className="mt-5 text-sm">
          New to CareTrack?{" "}
          <span className="text-primary">
            <Link href={"/signup"}>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
