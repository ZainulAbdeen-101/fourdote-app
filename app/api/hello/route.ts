import { formValues } from "@/types/types";
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(request:NextRequest){

    const {
        email,
        subject,
        message
    }:formValues=await request.json()
    const result=await sql`CREATE TABLE formDatas (email varchar,subject varchar,message varchar);`

    return NextResponse.json({result})
}