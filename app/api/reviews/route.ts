import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const fetchedReviews = await prisma.reviews.findMany();

  if (!fetchedReviews) {
    return NextResponse.json({ error: "Reviews not found" }, { status: 404 });
  }

  return NextResponse.json(fetchedReviews, { status: 200 });
}

export async function POST(req: NextRequest) {
  /* 
        name: str
        email: str
        password: str
        role: enum: 'citizen', 'admin'
    */

  const { official_id, proposal_id, decision , remarks} = await req.json();

  try {
    const NewReview = await prisma.reviews.create({
      data: {
     
        official_id,
        proposal_id,
        decision,
        remarks
      },
    });

    return NextResponse.json(NewReview, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
