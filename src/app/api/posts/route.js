import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Posts from "@/models/Posts";

export const GET = async (request) => {
  try {
    await connect();
    const data = await Posts.find();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("sds", { status: 500 });
  }
};
