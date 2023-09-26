import Link from "next/link";

export default function PostsList({ posts }) {
  return (
    <div className="flex flex-wrap gap-3 m-5 justify-around items-center">
      {posts.map((post) => {
        return (
          <div
          className=" bg-slate-600 text-white border-2 border-indigo-400 rounded-md w-96 p-2"
          key={post.id}
          >
          <h3 className="my-3 font-bold text-xl">
            <Link href={`/posts/${post.title.split(" ").join("-")}`}>
              {post.title}
            </Link>
          </h3>
          <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}


