"use client"; // This is a client component 👈🏽

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function List() {
  //by this we can access to our url and its dynamic part
  const path = usePathname();

  const router = useRouter();

  return <div>{path}</div>;
}
export default List;
