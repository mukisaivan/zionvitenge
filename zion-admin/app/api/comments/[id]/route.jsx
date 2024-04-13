import connectMongoDB from '@/lib/mongodd'
import Commente from '@/models/comment'
import { NextResponse } from 'next/server'


export async function DELETE({params}) {
  const {id}  = params
  await connectMongoDB()
  const commentToBeDeleted = await Commente.findOne({ _id: id })
  return NextResponse.json({commentToBeDeleted}, { status: 200 })

}



export async function PUT(req, { params }) {
  const { id } = params
  const { newcontent: content } = await req.json()
  await Commente.findByIdAndUpdate(id, { content })
  return NextResponse.json({ message: "Comment updated" }, { status: 200 });
  
}