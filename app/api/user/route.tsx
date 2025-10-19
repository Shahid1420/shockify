import { connectToDb } from "@/lib/mongodb";
import User from "@/models/User";
import UserMeta from "@/models/UserMeta";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const users = await User.find().select("-password").lean();
    const metas = await UserMeta.find({
      userId: { $in: users.map((u) => u._id) },
    }).lean();

    const usersWithMeta = users.map((user) => ({
      ...user,
      meta:
        metas.find((m) => m.userId.toString() === user._id.toString()) || null,
    }));

    return NextResponse.json(usersWithMeta, { status: 200 });
  } catch (err) {
    console.error("[GET_USERS_ERROR]", err);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();
    const body = await req.json();

    const {
      fullName,
      email,
      password,
      riskTolerance,
      investmentGoals,
      preferredIndustry,
    } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Optional: Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = await User.create({ fullName, email, password });
    await UserMeta.create({
      userId: newUser._id,
      ...{ riskTolerance, investmentGoals, preferredIndustry },
    });
    return NextResponse.json({ userId: newUser._id }, { status: 201 });
  } catch (err) {
    console.error("[PUSH_USER_ERROR]", err);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
