import UploadImage from "@/app/_components/shared/UploadImage";
import { apis } from "@/app/_services/apis";
import { GetMyData } from "@/app/_services/User/GetMyData";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const { data } = await GetMyData();
  console.log(data);
  return (
    <section>
      <h1>{data.currentUser.name} Profile</h1>
      <h4>email: {data.currentUser.email}</h4>
      <UploadImage data={data} endPoint={apis.uploadImage} />
    </section>
  );
};

export default ProfilePage;
