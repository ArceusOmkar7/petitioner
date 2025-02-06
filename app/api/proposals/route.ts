import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const fetchedProposals = await prisma.proposals.findMany();

  if (!fetchedProposals) {
    return NextResponse.json({ error: "Proposals not found" }, { status: 404 });
  }

  return NextResponse.json(fetchedProposals, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { user_id, title, description, category } = await req.json();

  try {
    const newProposal = await prisma.proposals.create({
      data: {
        user_id,
        title,
        description,
        category,
      },
    });

    return NextResponse.json(newProposal, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to create proposal", e },
      { status: 500 }
    );
  }
}
