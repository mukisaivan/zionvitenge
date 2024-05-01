
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodd';

import Product from "../../../models/Product";


export async function POST(req) {
  console.log("the whole req  is:******************", req)

  const responsedata = await req.json()


  mongooseConnect()
  const { title, description, price } = responsedata;

  const prod = await Product.create({title, description, price})

  console.log("+++++++++++++++++++++++++++",prod);
  
  return NextResponse.json({prod})
}
