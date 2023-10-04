import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { API_ROUTE } from "@/constants/api";

// Config axios for tis route
const API_URL = "http://localhost:8000/api/users";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const response = await axios.get(API_URL);

    const { data, message } = response.data;

    return NextResponse.json({
      message: message,
      data: data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Ha ocurrido un error" },
      { status: 500 }
    );
  }
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
