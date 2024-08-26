import React from "react";

export const fetchData = async () => {
  const res: any = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Không thể Fetch dữ liệu");
  }
  const data = await res.json();
  return data;
};
const srr = async () => {
  const data = await fetchData();
  const users = await JSON.parse(JSON.stringify(data, null, 2));
  return (
    <div>
      <h1 className="text-[24px]">Bài 1</h1>
      {users.map((item: any) => (
        <ul className="border-[1px]">
          <li>{item.userId}</li>
          <li>{item.id}</li>
          <li>{item.title}</li>
          <li>{item.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default srr;
