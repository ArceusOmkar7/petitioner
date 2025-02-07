
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(){
    const fetchedComments = await prisma.comments.findMany();

    if( !fetchedComments ){
        return NextResponse.json({error :"User not found "}, { status: 404 })
    }

    return NextResponse.json(fetchedComments, { status: 200 })
}

export async function POST (req : NextRequest){

    const { user_id , proposal_id ,content} = await req.json();


    try {
        const NewComment = await prisma.comments.create({
            data: {
                user_id,
                proposal_id,
                content
            }
        });

        return NextResponse.json(NewComment,{status: 200})
    }
    catch (error){
        return NextResponse.json({ error },{ status: 500 });
    }
}


