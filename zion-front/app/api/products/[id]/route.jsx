import mongooseConnect from '../../../../lib/mongoose'
import Product from '../../../../models/product'
import { NextResponse } from 'next/server';


export async function GET(params) {
  
  const pathname = `${params.nextUrl.pathname}`;
  const segments = pathname.split('/')
  const id = segments[segments.length - 1];
  await mongooseConnect();
  const product = await Product.findOne({ _id: id })
  


  // const id = req.nextUrl.searchParams.get('id')
  // const product = await Product.findById(id);


  return NextResponse.json({product})
}