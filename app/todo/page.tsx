import React from "react";
import Link from "next/link";
import { prisma } from "../../db";
import TodoItem from "@/components/TodoItem";

function getToDos() {
  return prisma.todo.findMany();
}

// async function onToggleTodo(id: string, complete: boolean) {
//   "use server";
// }

export default async function Todo() {
  //to add item for testing
  // await prisma.todo.create({ data: { title: "test", complete: false } });

  const toDos = await getToDos();

  return (
    <div className="h-[100%] w-[100%] text-inky-1 mx-auto p-5 container">
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-inky-2 px-2 py-1 rounded hover:bg-inky-6 focus-within:bg-inky-6 outline-none "
          href="/newTodo"
        >
          New
        </Link>
      </header>
      <ul>
        {toDos.map((todo) => (
          <TodoItem
            // toggleTodo={onToggleTodo}
            id={todo.id}
            isComplete={todo.complete}
            title={todo.title}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
