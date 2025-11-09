import ChangeStatus from "@/app/_components/shared/ChangeStatus";
import { GetTodo } from "@/app/_services/Todos/GetTodo";
import { Button } from "@/app/components/ui/button";
import { links } from "@/routes/links";
import Link from "next/link";
import React from "react";

const ShowTodo = async ({ params }) => {
  const { id } = await params;

  const { data } = await GetTodo({ id });

  console.log(data);

  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{data.title}</h1>
          <ChangeStatus id={id} />
        </div>
        <Link href={`${links.todos}/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
      </div>
      <div>
        <h4>description</h4>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default ShowTodo;
