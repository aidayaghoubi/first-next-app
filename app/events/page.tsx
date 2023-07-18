
import React from "react";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const repo = {
    name: "ayda",
    stargazers_count: 5,
  };
  return { props: { repo } };
};

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(repo, "frfr");

  return (
    <div className="bg-inky-6 h-8 w-full">{repo?.stargazers_count}frefer</div>
  );
}
