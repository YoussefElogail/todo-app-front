import { apis } from "@/app/_services/apis";
import { TOKEN } from "@/app/_util/Constants";
import { Button } from "@/app/components/ui/button";
import { links } from "@/routes/links";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { getTodos } from "@/app/_services/Todos/GetTodos";
import { Card, CardDescription, CardTitle } from "@/app/components/ui/card";

const TodoCard = ({ todo }) => {
  console.log(todo);
  return (
    <Link href={`${links.todos}/${todo._id}`}>
      <Card className="w-fit p-4">
        <CardTitle>{todo.title}</CardTitle>
        {todo.description && (
          <CardDescription>{todo.description}</CardDescription>
        )}
      </Card>
    </Link>
  );
};

const TodosPage = async () => {
  const { data } = (await getTodos()) || [];
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h1>Todos</h1>
        <Link href={`${links.todos}/create`}>
          <Button>Caret one</Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-4">
        {data?.map((todo) => (
          <TodoCard key={todo._id} todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default TodosPage;
