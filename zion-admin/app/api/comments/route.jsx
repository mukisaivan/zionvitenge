import connectMongoDB from '@/lib/mongodd';
import Commente from '@/models/comment'

import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const comments = await Commente.find();
    return NextResponse.json({ comments })
}



export async function POST(request) {
    await connectMongoDB();
    const { name, email, content } = await request.json()
    const comments = await Commente.create({ name, email, content });
    return NextResponse.json({ comments })
}


export async function DELETE(req) {
    const { id } = req.query;
    await connectMongoDB();
    await Commente.findByIdAndDelete(id);
    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
}


// export default async function handler(req, res) {
//     const { id } = req.query; // Access the ID from URL query params
//     try {
//         if (req.method === 'DELETE') {
//             await connectMongoDB();
//             await Commente.findByIdAndDelete(id);
//             res.status(200).json({ message: "Comment deleted" });
//         } else {
//             res.status(405).json({ message: "Method not allowed" });
//         }
//     } catch (err) {
//         res.status(500).json({ message: "Error deleting comment" });
//     }
// }