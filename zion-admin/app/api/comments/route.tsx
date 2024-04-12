import connectMongoDB from '@/lib/mongodd';
import Commente from '@/models/comment'

import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const comments = await Commente.find();
  return NextResponse.json ({ comments })

}
export async function POST(request: Request) {
  await connectMongoDB();

  const { name, email,  content } = await request.json()

  const comments = await Commente.create({ name, email, content });
  
  return NextResponse.json({comments}) 

}

