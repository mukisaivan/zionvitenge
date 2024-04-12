import connectMongoDB from '@/lib/mongodd'
import Commente from '@/models/comment'
import { NextResponse } from 'next/server'


export async function DELETE(params: String) {
  await connectMongoDB()
  const id  = params
  
  const commentToBeDeleted = await Commente.findOne({ _id: id })
  
  NextResponse.json({commentToBeDeleted})

}