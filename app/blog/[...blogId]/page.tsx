"use client"; // This is a client component 👈🏽

import { usePathname, useRouter } from "next/navigation";

const AllBlog = () => {
  const path = usePathname();

  const router = useRouter();

  return <div>ALL BLOGS</div>;
};
export default AllBlog;
