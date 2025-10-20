import { connectToDb } from "@/lib/mongodb";
import User from "@/models/User";
import UserMeta from "@/models/UserMeta";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(params.id))
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    await connectToDb();
    const user = await User.findById(params.id).select("-password").lean();
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const meta = await UserMeta.findOne({ userId: user._id }).lean();
    return NextResponse.json({ ...user, meta: meta || null }, { status: 200 });
  } catch (err) {
    console.error("[GET_USER_ERROR]", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
};
