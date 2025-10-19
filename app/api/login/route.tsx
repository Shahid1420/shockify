import { connectToDb } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
// import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();
    const { email, password } = await req.json();

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    // }
    if (password != user.password)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LOGIN_API_ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
