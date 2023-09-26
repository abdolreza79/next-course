import { NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(
    products,
    { status: 200 }
  );
}

export async function POST(request) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  console.log(body)
  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: parseFloat(body.price),
    },
  });
  return NextResponse.json(product, { status: 201 });
}
