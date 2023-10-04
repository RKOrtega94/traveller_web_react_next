import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: "Hello World!" }, { status: 200 });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(req.body, { status: 200 });
}
