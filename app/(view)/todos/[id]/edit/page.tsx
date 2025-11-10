import TodoForm from "@/app/_components/todo/TodoForm";
import { GetTodo } from "@/app/_services/Todos/GetTodo";
import React from "react";

const EditTodo = async ({ params }) => {
  const { id } = await params;
  const { data } = await GetTodo({ id });
  return <TodoForm todo={data} />;
};

export default EditTodo;
