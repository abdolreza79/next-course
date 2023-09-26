import React from "react";
import Image from "next/image";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        width={100}
        height={100}
        src={"/images/Spinner.gif"}
        className="block mt-5 mx-auto"
        alt="spinner"
      />
    </div>
  );
}
