import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";
  //   const title = data.get("title")?.valueOf();
  //   if (typeof title !== "string" || title.length === 0) {
  //     throw new Error("Invalid title");
  //   }
  //   await prisma.todo.create({ data: { title, complete: false } });
  //   redirect("/todo");
}

export default function About() {
  
  return (
    <div className="text-inky-1 text-xl">
      <h2>New</h2>
      <form action={createTodo}>
        <input
          className="border bg-[transparent] m-5  border-inky-2 px-2 py-1 rounded hover:bg-inky-6 focus-within:bg-inky-6 outline-none "
          type="text"
          name="title"
        />
        <Link
          className="border border-inky-2 px-2 py-1 rounded hover:bg-inky-6 focus-within:bg-inky-6 outline-none "
          href=".."
        >
          cancel
        </Link>
        <button
          className="border mx-5 border-inky-2 px-2 py-1 rounded hover:bg-inky-6 focus-within:bg-inky-6 outline-none "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
