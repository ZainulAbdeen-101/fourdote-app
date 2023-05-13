import { formValues } from "@/types/types";
import { sql } from "@vercel/postgres";
import { NextRequest,NextResponse } from "next/server";

export  async function POST(request:NextRequest){

    const {
        email,
        subject,
        message
    }:formValues=await request.json()
    
    const result1=await sql`INSERT INTO formDatas (email,subject,message) VALUES (${email},${subject},${message}) returning *` 
// const result1=await sql`DELETE FROM formdatas WHERE message='asdfsdf'`
    return NextResponse.json({result1})
}