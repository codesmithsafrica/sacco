import { db } from '@/lib/prismadb'
import { NextResponse } from "next/server";

 
export async function POST(request: Request) {

    //generate password
    const data = await request.json()
    let result1;
    let result2;
    console.log('data',data)
   
      const deleteUser = await db.user.delete({
        where: {
          id: data.id,
        },
      })

        console.log('user -->',deleteUser)

try {  


    return  NextResponse.json({ message: 'Member deleted successfully',result1,result2});
  } catch (error) {
    console.log('error',error)
    return new Response(`error`);
  }
}