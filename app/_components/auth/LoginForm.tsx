"use client";
import { useUser } from "@/app/_contexts/UserContext";
import { apis } from "@/app/_services/apis";
import { fetchFunc } from "@/app/_util/fetchFunc";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { TOKEN, USER_DATA } from "@/app/_util/Constants";
import { links } from "@/routes/links";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
const LoginForm = () => {
  const { setUser, setUserData } = useUser();
  const nav = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const req = await fetchFunc("post", apis.login, data);
      const res = await req.json();
      setUserData(res);
      nav.replace(links.home);
    } catch (error: unknown) {
      console.log(error?.message || "");
    }
  };

  return (
    <Card>
      <form
        className="px-4 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input type="email" placeholder="email" {...register("email")} />
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
