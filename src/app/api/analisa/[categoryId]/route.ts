import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: { params: Promise<{ categoryId: string }> }) {
  try {
    const {categoryId} = await context.params 
    const session = await auth()
    const categoryUser = await prisma.categoryResult.findFirst({
      where: {
        user_id: parseInt(`${session?.user?.id}`),
        id: parseInt(categoryId)
      },
      include: {
        items: true
      }
    })
    if(session && categoryUser ){
      return NextResponse.json(categoryUser.items)
    }
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