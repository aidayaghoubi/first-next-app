import Link from "next/link";
import React from "react";

async function getTime() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const dataRepo = await res.json();
  return dataRepo;
}

async function getRepo() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repoJson = await res.json();
  return repoJson;
}

export default async function Home() {
  const [data, repo] = await Promise.all([getTime(), getRepo()]);

  return (
    <main className="text-gray-1">
      <h1>hello next world</h1>
      <ul>
        <li>{data.datetime}</li>
        <li>{repo.id}</li>
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
