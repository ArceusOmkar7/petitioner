import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const proposalId = parseInt(params.id, 10);

  if (isNaN(proposalId)) {
    return NextResponse.json({ error: "Invalid proposal ID" }, { status: 400 });
  }

  try {
    const fetchedProposal = await prisma.proposals.findUnique({
      where: { id: proposalId },
    });

    if (!fetchedProposal) {
      return NextResponse.json(
        { error: "Proposal not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(fetchedProposal, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
