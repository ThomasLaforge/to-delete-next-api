import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = { params: { id: string } };

export const GET = async (
  request: NextRequest, 
  { params }: Params
) => {
  const { id } = await params

  const posts = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      author: {
        select: {
          email: true
        }
      }
    }
  })

  return NextResponse.json(posts);
}