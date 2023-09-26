"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="An orange picture"
          className="m-3"
        />
      )}
      <CldUploadWidget
        uploadPreset="nflxfjdy"
        options={{
          sources: ["local"],
          showAdvancedOptions: true,
          cropping: true,
          multiple: false,
          defaultSource: "local",
        }}
        onUpload={(result, widget) => {
          console.log(result);
          if (result.event !== "success") {
            return;
          }
          setPublicId(result.info.public_id);
        }}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button
              className="py-2 px-4 m-5 bg-sky-400 rounded-md text-white"
              onClick={handleOnClick}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;


