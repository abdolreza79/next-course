"use client"
import React from "react";
import Image from "next/image";
import Redemption from "@/public/images/redemption.webp";
import { toast } from "react-toastify";

const ImageToast = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <Image
      src={Redemption}
      alt="react"
      // fill
      className="object-cover" // contain or fill
      sizes="(max-width:480px) 100vw , (max-width:768px) 50vw , 33vw"
      quality={75}
      priority={true}
      onClick={() => notify()}
    />
  );
};

export default ImageToast;
