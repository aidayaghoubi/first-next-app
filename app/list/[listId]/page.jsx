"use client"; // This is a client component 👈🏽

import { usePathname } from "next/navigation";

const List = () => {
  //by this we can access to our url and its dynamic part
  const router = usePathname();

  return <div>{router}</div>;
};
export default List;
