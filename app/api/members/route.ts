import { db } from '@/lib/prismadb'
import { NextResponse } from "next/server";


export const revalidate = 0;
 
export async function GET() {

  const user = await db.user.findMany({    
   
    orderBy: {
      id: "asc",
    },})
  return  NextResponse.json({ members: user});

}