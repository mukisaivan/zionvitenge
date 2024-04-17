import connectMongoDB from '@/lib/mongodd'
import Commente from '@/models/comment'
import { NextResponse } from 'next/server'


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const comment = await Commente.findOne({ _id: id });
  return NextResponse.json({ comment }, { status: 200 });
}



export async function PUT(req, { params }) {
  const { id } = params
  const { newname: name, newemail: email, newcontent: content } = await req.json()
  await connectMongoDB();
  await Commente.findByIdAndUpdate(id, { name, email, content })
  return NextResponse.json({ message: "Comment updated" }, { status: 200 });
  
}

// export default async function handler(req, res) {
//   const { id } = req.query;

//   if (req.method === 'DELETE') {
//     try {
//       await connectMongoDB(); // Connect to MongoDB
//       // Find the topic by ID and delete it
//       const deleteComment = await Commente.findByIdAndDelete(id)
//       await Commente.findByIdAndDelete(id)
//       if (!deletedTopic) {
//         return res.status(404).json({ error: 'Commente not found' });
//       }
//       return res.status(200).json({ message: 'Commente deleted', deletedTopic });
//     } catch (error) {
//       console.error('Error deleting topic:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

// }

