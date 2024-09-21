import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    const { name } = await req.json();
    const isContain = name.include;
    return NextResponse.json({ message: isContain ? "yes" : "no" });
}