"use client";

import prisma from "@/app/lib/prisma";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  const searchParams = useSearchParams();
  const fetchedId = searchParams.get("proposals_fetchedId");

  if (!fetchedId) {
    return NextResponse.json(
      {
        error: "Invalid proposal id",
      },
      { status: 401 }
    );
  }
  try {
    const id = parseInt(fetchedId);

    const votes = await prisma.votes.findMany({
      where: {
        proposal_id: id,
      },
    });
    const totalVotes = votes.length;
    votes.filter((vote) => {
      if (vote.vote === "upvote") return vote;
    });

    return NextResponse.json({
      upvotes: votes.length,
      downvote: totalVotes - votes.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Cannot find votes",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const { user_id, proposal_id, vote } = await req.json();

  try {
    const CreateVote = await prisma.votes.create({
      data: {
        user_id,
        proposal_id,
        vote,
      },
    });

    return NextResponse.json(CreateVote, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Vote" },
      { status: 401 }
    );
  }
}
