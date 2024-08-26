import { PropType } from "@/app/srr-basic/[id]/page";
import React from "react";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const PostDetail = async ({ params }: PropType) => {
  const { id } = params;
  let post = null;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Thất bại khi fetch bài viết");
    }
    post = await res.json();
  } catch (error: any) {
    return (
      <div>
        <h1>Chi tiết Bài viết với Static Params</h1>
        <p>Đã xảy ra lỗi: {error.message}</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-[24px] font-[700] mb-[20px]">
        Tiêu đề: {post.title}
      </h1>
      <p>Nội dung: {post.body}</p>
    </div>
  );
};

export default PostDetail;
