"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { fetchFunc } from "@/app/_util/fetchFunc";
import { apis } from "@/app/_services/apis";

const ChangeStatus = ({
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  const updateTodoStatus = async (status: boolean) => {
    await fetchFunc("PATCH", `${apis.todos}/${props.id}`, {
      isComplete: status,
    });
  };
  return (
    <>
      <Checkbox onCheckedChange={updateTodoStatus} />
    </>
  );
};

export default ChangeStatus;
