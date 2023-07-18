import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    { id: "cars", name: "cars report" },
    { id: "airport", name: "airport report" },
  ];

  return (
    <div>
      <h1>blogs</h1>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}>
            <Link href={`/blog/${blog.id}`}>{blog.name}</Link>
          </li>
        ))}
        {/* {
          it is an alternative way to setting links in href
        } */}
        {/* {blogs.map((blog, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: "/blog/[id]",
                query: { id: blog.id },
              }}
            >
              {blog.name}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
export default Blog;
