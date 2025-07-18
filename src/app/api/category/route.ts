import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    const result = await prisma.categoryResult.findMany({
      where: {
        user_id: parseInt(`${session?.user?.id}`)
      }
    })
    return NextResponse.json(result)
  } catch (error) {
      return NextResponse.json({
        error: 'server error' + error
      }, 
      {
        status: 500
      }
    )
  }
  
}