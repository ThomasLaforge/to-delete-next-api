import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Bonjour Thomas" });
}

export const POST = async (request: NextRequest) => {
  const { titi } = await request.json()

  const newUser = await prisma.user.create({
    data: {
      email: "thomas.laforge@toto.fr",
      name: titi
    }
  });

  return NextResponse.json({ message: `Hello, ${newUser.id} !` });
}
