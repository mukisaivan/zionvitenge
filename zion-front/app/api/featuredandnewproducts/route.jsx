import mongooseConnect from "../../../lib/mongoose";
import Product from '../../../models/product' 
import { NextResponse } from 'next/server';


export async function GET() {
  const featuredProductId = '666d768d061352c18fa561e6';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  
  // console.log('++++++++++++++++ server featured product', featuredProduct);
  // console.log('++++++++++++++++ new products ', featuredProduct);

  return NextResponse.json({
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  })
  
}