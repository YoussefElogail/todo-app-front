"use client";
import { apis } from "@/app/_services/apis";
import { fetchFunc } from "@/app/_util/fetchFunc";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ todo }: { todo: any }) => {
  const defaultValues = {
    title: todo.title,
    description: todo.description,
    isComplete: todo.isComplete,
  };
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const req = await fetchFunc(
        todo ? "PATCH" : "POST",
        `${apis.todos}${todo && `/${todo._id}`}`,
        data
      );
      const res = await req.json();
      if (res.status === "success" && !todo) reset();
    } catch (error: unknown) {
      console.log(error?.message || "");
    }
  };

  return (
    <section>
      <Card className="px-4 ">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1>{todo ? "edit" : "create"} todo</h1>
              {todo && (
                <Checkbox
                  defaultChecked={defaultValues.isComplete}
                  onCheckedChange={(value) => setValue("isComplete", value)}
                />
              )}
            </div>
            <Button>Save</Button>
          </div>
          <Input required placeholder="todo title" {...register("title")} />
          <Textarea
            placeholder="todo description"
            {...register("description")}
          />
        </form>
      </Card>
    </section>
  );
};

export default TodoForm;
