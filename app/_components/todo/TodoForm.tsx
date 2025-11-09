"use client";
import { apis } from "@/app/_services/apis";
import { fetchFunc } from "@/app/_util/fetchFunc";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ id }: { id?: string }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const req = await fetchFunc("post", apis.todos, data);
      const res = await req.json();
      if (res.status === "success") reset();
    } catch (error: unknown) {
      console.log(error?.message || "");
    }
  };

  return (
    <section>
      <Card className="px-4 ">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <h1>create todo</h1>
            <Button>Save</Button>
          </div>
          <Input required placeholder="todo title" {...register("title")} />
          <Textarea placeholder="todo title" {...register("title")} />
        </form>
      </Card>
    </section>
  );
};

export default TodoForm;
