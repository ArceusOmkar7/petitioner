import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request){

    // const allVoters = await prisma.votes.findMany();
    return NextResponse.json("Working On")
}


export async function POST(req : NextRequest){
    const {user_id , proposal_id, vote} = await req.json();

    try{
        const CreateVote = await prisma.votes.create({
            data: {
                user_id, 
                proposal_id,
                vote
            }

        });

        return NextResponse.json( CreateVote,{ status: 200 });
    }
    catch(error){
        return NextResponse.json({ error: "Failed to create Vote" },{ status: 401 })
    }
}

