import React from "react";

const EditTodo = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div></div>;
};

export default EditTodo;
