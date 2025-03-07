import { PrismaClient } from "@prisma/client"

// declare global {
//   // eslint-disable-next-line no-var
//   var cachedPrisma
// }

let prisma
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  // @ts-expect-error:unreachable code
  if (!global.cachedPrisma) {
    // @ts-expect-error: Unreachable code error
    global.cachedPrisma = new PrismaClient();
  }
  // @ts-expect-error: Unreachable code error
  prisma = global.cachedPrisma;
}

export const db = prisma