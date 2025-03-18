import { db } from '@/lib/prismadb'
import { NextResponse } from "next/server";

 
export async function POST(request: Request) {

    //generate password
    const data = await request.json()
    let result1;
    let result2;

      const updateUser = await db.user.update({
        where: {
          id: data.id,
        },
        data: {

          firstName: data?.firstName,
          lastName:data?.lastName ,
          code: data?.code,
          email: data?.email,
          phone: data?.phone
     
        },
      })

        console.log('user -->',updateUser)

try {  

    return  NextResponse.json({ message: 'Student created successfully',result1,result2});
  } catch (error) {
    console.log('error',error)
    return new Response(`error`);
  }
}