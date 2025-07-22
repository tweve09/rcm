import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = {
    name: "Emmanuel Tweve",
    proffesional: "Software Engineer",
    location: "Mbeya, Tanzania",
    age: "25",
  };
  return new NextResponse(JSON.stringify(data));
}
