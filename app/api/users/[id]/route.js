import { getUserById } from "@/lib/users/users";
import { NextResponse } from "next/server";
import schema from "../schema";
import {prisma} from "@/prisma/client";

export async function GET(request, { params: { id } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "user not exist",
      },
      { status: 404 }
    );
  }
  return NextResponse.json({
    user,
  });
}

export async function PUT(request, { params: { id } }) {
  const body = await request.json();
  const validate = schema.safeParse(body);
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "user not found",
      },
      { status: 404 }
    );
  }
  const isEmailExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (isEmailExist) {
    return NextResponse.json(
      {
        error: "email already exist...",
      },
      { status: 400 }
    );
  }
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(request, { params: { id } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "user not found",
      },
      { status: 404 }
    );
  }
  await prisma.user.delete({
    where: { id: parseInt(user.id) },
  });
  return NextResponse.json(
    {
      msg: `${user.name} with id equal ${id} deleted successfully`,
    },
    { status: 200 }
  );
}
