import { fetchData } from "../page";
import { NextRequest } from "next/server";

export interface PropType {
  params: {
    id: string | number;
  };
}

const IdPage = async ({ params }: PropType) => {
  const { id } = params;
  const data = await fetchData();
  const users = await JSON.parse(JSON.stringify(data));
  const foundUser = users.find((item: any) => item.id === +id);

  if (!foundUser) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2 className="text-24px">Chi tiết bài viết</h2>
      <ul className="border-[1px]">
        <li>User ID: {foundUser.userId}</li>
        <li>ID: {foundUser.id}</li>
        <li>Title: {foundUser.title}</li>
        <li>Body: {foundUser.body}</li>
      </ul>
    </div>
  );
};

export default IdPage;
