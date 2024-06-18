
import mongooseConnect from "../../../lib/mongoose";
import Product from "../../../models/product";
import {NextResponse} from 'next/server'

export  async function POST(req) {
  await mongooseConnect();
  // const ids = req.body.ids;
  // const pdt =await Product.find({ _id: ids })
  // console.log('Server side cart', pdt);
  // console.log('Req format', data.ids);
  
  const data  = await req.json()
  const cartpdtsids = data.ids
  const pdtsids =await Product.find({ _id: cartpdtsids })

  return NextResponse.json({pdtsids});
}