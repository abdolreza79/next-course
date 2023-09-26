import { getMovies } from "@/lib/movies";
import { getPostById, getPostBySlug, getPosts } from "@/lib/posts";
import { getUserById } from "@/lib/users/users";
import { notFound } from "next/navigation";
import React from "react";

export default async function Post({
  params: { slug },
  searchParams: { name, email },
}) {
  const [post] = await getPostBySlug(slug);
  let content = "";
  if (post) {
    content = (
      <div className="m-2 p-2 bg-slate-800 text-white w-3/5 flex flex-col gap-3">
        <h3 className="font-bold">{post.title}</h3>
        <p>{post.body}</p>
        <p className="italic">{email}</p>
      </div>
    );
  } else {
    content = notFound();
  }
  return content;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.title.split(" ").join("-"),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.title === slug.split("-").join(" "));
  const user = await getUserById(post.userId);
  return {
    title: {
      absolute: user.name,
    },
  };
}
