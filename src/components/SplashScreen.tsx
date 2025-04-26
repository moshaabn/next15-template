import React from "react";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white dark:bg-gray-900">
      <div className="animate-pulse-scale">
        <Image
          src={"/images/logo/logo.svg"}
          alt="Logo"
          width={231}
          height={48}
        />
      </div>
      <div className="mt-4 animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
    </div>
  );
}