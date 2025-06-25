import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, context: { params: Promise<{ categoryId: string }> }){
  try {
    const {categoryId} = await context.params  
    await prisma.categoryResult.delete({
      where: {
       id: parseInt(categoryId ) 
      }
    })
    return NextResponse.json({'message': 'berhasil menghapus'})
  } catch (error) {
    return NextResponse.json({'message': 'Gagal menghapus'}, {
      status: 500
    })
  }
}