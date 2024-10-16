import { NextRequest, NextResponse } from "next/server";
import {issueSchema} from '@/app/validationSchemas';
import prisma from '@/prisma/client';

export async function POST(request: NextRequest) {
    const body = await request.json();
    // validate sent data
    const validation = issueSchema.safeParse(body);
    // check if validated failed
    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400});
    }
    // insert new issue to the database through prisma
    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    })
    return NextResponse.json(newIssue, {status: 201});
}