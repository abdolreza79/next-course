"use client";
import { useRouter } from "next/navigation";
import React from "react";

function NewUser() {
  const router = useRouter();
  return (
    <div className="m-5">
      <button
        className="py-2 px-4 bg-sky-400 rounded-md text-white"
        onClick={() => router.push("/users")}
      >
        Create user
      </button>
    </div>
  );
}

export default NewUser;
