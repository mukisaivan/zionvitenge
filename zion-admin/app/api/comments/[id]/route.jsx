import connectMongoDB from '@/lib/mongodd'
import Commente from '@/models/comment'
import { NextResponse } from 'next/server'

export async function PUT(req, { params }) {
  const { id } = params
  const { newname: name, newemail: email, newcontent: content } = await req.json()
  await connectMongoDB();
  await Commente.findByIdAndUpdate(id, { name, email, content })
  return NextResponse.json({ message: "Comment updated" }, { status: 200 });
  
}