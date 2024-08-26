import React from "react";

export const metadata = {
  title: "ISR với Next.js",
};

const ISRPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  const posts = await res.json();

  return (
    <div>
      <h1>ISR với Next.js</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ISRPage;
