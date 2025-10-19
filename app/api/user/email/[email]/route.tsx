import { connectToDb } from "@/lib/mongodb";
import User from "@/models/User";
import UserMeta from "@/models/UserMeta";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await connectToDb();
    const user = await User.findOne({ email: params.email })
      .select("-password")
      .lean();
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const meta = await UserMeta.findOne({ userId: user._id }).lean();
    return NextResponse.json({ ...user, meta: meta || null }, { status: 200 });
  } catch (err) {
    console.error("[FIND_BY_EMAIL_ERROR]", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
};
