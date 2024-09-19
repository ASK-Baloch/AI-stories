import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col md:grid md:grid-cols-2">
      {/* Background image for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url('/login.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional dark overlay */}
      </div>

      {/* Image for larger screens */}
      <div className="hidden md:block">
        <Image
          src="/login.png"
          alt="login"
          fill
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Sign-in form without className */}
      <div className="relative z-10 flex justify-center items-center h-screen md:h-auto">
        <div className="w-full max-w-sm">
          {/* You can style the wrapper div instead */}
          <SignUp />
        </div>
      </div>
    </div>
  );
}
