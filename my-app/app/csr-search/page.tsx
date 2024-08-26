"use client";
import React, { useState, useEffect } from "react";

const CSRSearch = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <div>
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CSRSearch;
