import { db } from '@/lib/prismadb'
import { NextResponse } from "next/server";

 
export async function POST(request: Request) {

    //generate password
    const data = await request.json()
    console.log('data',data)
    let result1;
    let result2;


    const adminPlaintextPassword = '$2b$12$ONPS7J8u6CuhRvjCbo7WOOTvnQg4K.I48TEfQeJE9OC2gNLRoJhNy';
   
    const user = await db.user.create({
      data: {
        email: data?.email?data?.email:null,
        firstName: data?.firstName,
        phone: data?.phone ?data?.phone :null,
        lastName:data?.lastName ,
        code: data?.code,
        password: adminPlaintextPassword,
      
      },
      })

        console.log('user -->',user)

try {  


    return  NextResponse.json({ message: 'user created successfully',result1,result2});
  } catch (error) {
    console.log('error',error)
    return new Response(`error`);
  }
}