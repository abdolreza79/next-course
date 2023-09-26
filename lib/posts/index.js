import { notFound } from "next/navigation";
export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"force-cache"});
  if (!res.ok) {
     notFound()
  }
  return res.json();
};


export const getPostBySlug = async(slug)=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug.split("-").join(" ")}`)
  if(!response.ok){
     notFound()
  }
  return response.json()
}
