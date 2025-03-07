import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/lib/prismadb'
import { login } from '@/lib/login'



export const options: NextAuthOptions = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Code:",
          type: "text",
          placeholder: "Code"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password"
        }
      },
      async authorize(credentials) {

        // This is where we retrieve user data 
        // to verify with credentials

        if (!credentials?.username || !credentials.password) {
          return null
        }


        //fetch user from db
        const user = await db.user.findUnique({
          where: {
            code: credentials.username
          }
        })
        console.log('user')

        //if no user found 
        if (!user) {
          return null
        }

        const isPasswordValid  = await login(credentials.password, user.password)

      

        if (!isPasswordValid) {
          return null
        }
      
     

        return {
          id: user.id + '',
          email: user.email,
          fname: user.firstName,
          lname:user.lastName,
          role: user.role
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          firstName: token.firstName,
          lastName: token.lastName
        }
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
          // eslint-disable-next-line
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          role: u.role,
          firstName: u.firstName,
          lastName: u.lastName
        }
      }
      return token
    }

  },

}