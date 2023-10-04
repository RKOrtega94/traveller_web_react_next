import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({
    message: "Users retrieved successfully!",
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@email.com",
      },
    ],
  });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    {
      message: "User created successfully!",
      data: {
        id: 3,
        name: "John Doe",
        email: "john.doe@email.com",
      },
    },
    { status: 201 }
  );
}
