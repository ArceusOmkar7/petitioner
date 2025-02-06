import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const fetchedUser = await prisma.users.findMany();

  if (!fetchedUser) {
    return NextResponse.json({ error: "Users not found" }, { status: 404 });
  }

  return NextResponse.json(fetchedUser, { status: 200 });
}

export async function POST(req: NextRequest) {
  /* 
        name: str
        email: str
        password: str
        role: enum: 'citizen', 'admin'
    */

  const { name, email, password, role } = await req.json();

  try {
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
