import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Bonjour Thomas" });
}

type Params = {
  params: Promise<{
    id: string;
  }>
}

export const POST = async (request: NextRequest, {
  params
}: Params) => {
  const { id } = await params;
  console.log(id);
  const computers = await prisma.computer.findMany()
  return NextResponse.json({ message: `Hello, ${computers.length} !` });
}
