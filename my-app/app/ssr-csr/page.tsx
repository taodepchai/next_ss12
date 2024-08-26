"use client";
import { useState, useEffect } from "react";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const initialPosts = await res.json();

  return <PostsList initialPosts={initialPosts} />;
}

function PostsList({ initialPosts }: any) {
  const [posts, setPosts] = useState(initialPosts);
  const refreshData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newPosts = await res.json();
    setPosts(newPosts);
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button onClick={refreshData}>Refresh</button>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
