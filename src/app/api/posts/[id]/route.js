import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Posts from "@/models/Posts";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const data = await Posts.findById(id);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Went Wrong", { status: 500 });
  }
};
