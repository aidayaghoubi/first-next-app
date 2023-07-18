"use client"; // This is a client component 👈🏽
import React from "react";

import { usePathname, useRouter } from "next/navigation";

const AllBlog = () => {
  const path = usePathname();

  const router = useRouter();

  function onSendToB() {
    //doing something
    router.push("/blog/45");
  }

  return (
    <div>
      BLOGS {path}
      <button onClick={onSendToB}>Load Blog B</button>
    </div>
  );
};
export default AllBlog;
