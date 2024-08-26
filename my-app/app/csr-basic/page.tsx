"use client";
import React, { useEffect, useState } from "react";

const csr = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Bài 2</h2>
      {users.map((item) => {
        return (
          <ul>
            <li>{item.userId}</li>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.body}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default csr;
