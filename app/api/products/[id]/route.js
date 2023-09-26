import { destroy, getProductById, update } from "@/lib/products";
import { NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(request, { params: { id } }) {
  const product = await prisma.product.findUnique({
    where:{id:parseInt(id)}
  });
  if (!product) {
    return NextResponse.json(
      {
        error: "product not found",
      },
      { status: 404 }
    );
  }
  return NextResponse.json(product);
}

export async function PUT(request, { params: { id } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const product = await getProductById(id);
  if (!product.name) {
    return NextResponse.json(
      {
        error: "this product not found",
      },
      { status: 404 }
    );
  }
  const updateProduct = await update(id, body);
  return NextResponse.json(updateProduct);
}

export async function DELETE(request, { params: { id } }) {
  const product = await getProductById(id);
  if (!product.name) {
    return NextResponse.json({
      error: "product not found ...",
    });
  }
  await destroy(id);
  return NextResponse.json({
    message: `product with id equal ${id} deleted successfully`,
  });
}
