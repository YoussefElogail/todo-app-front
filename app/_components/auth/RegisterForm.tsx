"use client";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { apis } from "@/app/services/apis";
import { fetchFunc } from "@/app/util/fetchFunc";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const req = await fetchFunc("post", apis.register, data);
      const res = await req.json();
      console.log(res);
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
        <Input type="text" placeholder="name" {...register("name")} />
        <Input type="email" placeholder="email" {...register("email")} />
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <Button type="submit">Register</Button>
      </form>
    </Card>
  );
};

export default RegisterForm;
