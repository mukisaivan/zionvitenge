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

    console.log('delete req is being worked upon in the general route');
    // console.log('req', req);

    const id = req.nextUrl.searchParams.get("id");


    console.log('-------  id from the server ', id);

    await connectMongoDB();
    await Commente.findByIdAndDelete(id);
    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
}