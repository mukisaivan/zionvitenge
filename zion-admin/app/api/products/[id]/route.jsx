import connectMongoDB from '@/lib/mongodd'
import Product from '@/models/Product';
import { NextResponse } from 'next/server'


export async function GET(params) {
  const pathname = `${params.nextUrl.pathname}`;
  const segments = pathname.split('/')
  const id = segments[segments.length - 1];
  await connectMongoDB();
  const product = await Product.findOne({_id: id})
  // console.log('================Server side pathname: ', pathname);
  // console.log('================ Details of product to be edited: ', product);
  
  return NextResponse.json({product}, { message: 'Request reached the server' }, { status: 200 });
}


export async function PUT(res) {
  const data = await res.json()
  // console.log('-----------------------Response to be edited', data);
  const { _id, title, description, price } = data
  await connectMongoDB();
  await Product.updateOne({ _id }, { title, description, price })
  return NextResponse.json({ message: "Product updated" }, { status: 200 });

  
}