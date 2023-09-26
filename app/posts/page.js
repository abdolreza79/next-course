import PostsList from "@/components/postsList";
import { getPosts } from "@/lib/posts";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <main>
      <PostsList posts={posts} />
    </main>
  );
}
