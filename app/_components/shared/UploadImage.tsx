"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import { TOKEN } from "@/app/_util/Constants";
import { apis } from "@/app/_services/apis";
import { useUser } from "@/app/_contexts/UserContext";

interface UploadImageProps {
  data?: {
    image?: string;
  };
  endPoint: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ data, endPoint }) => {
  const { setUserData } = useUser();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>(
    data?.currentUser?.image || ""
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${endPoint}`,
        {
          body: formData,
          headers: {
            Authorization: `Bearer ${Cookies.get(TOKEN)}`,
          },
          method: "PATCH",
        }
      );

      const res = await req.json();

      console.log(res);

      if (req.ok) {
        if (res?.data?.user?.image) {
          setPreview(res?.data?.user?.image);
          if (endPoint == apis.uploadImage) setUserData(res);
        }
      } else {
        console.error("Upload failed:", res);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);

    uploadImage(file);
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
        onClick={handleClick}
      >
        {preview ? (
          <Image
            unoptimized
            height={1000}
            width={1000}
            src={preview}
            alt="profile preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            + Upload
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadImage;
