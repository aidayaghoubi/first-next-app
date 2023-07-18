import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1>hello next world</h1>
      <ul>
        <li>
          <Link href="/about">about us </Link>
        </li>
        <li>
          <Link href="/list">list</Link>
        </li>
        <li>
          <Link href="/blog">blog </Link>
        </li>
      </ul>
    </main>
  );
}
