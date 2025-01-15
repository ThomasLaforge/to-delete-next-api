import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Bonjour toto" });
}

export const POST = async (request: NextRequest) => {
  const { title, content, email } = await request.json()

  const postObj = await prisma.post.create({
    data: {
      title,
      content,
      slug: title.toLowerCase().replace(/ /g, "-"),
      author: {
        connect: {
          email
        }
      }
    }
  })

  return NextResponse.json(postObj)
}