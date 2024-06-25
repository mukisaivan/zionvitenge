import Featured from '../../components/Featured'
import NewProducts from '../../components/NewProducts'
import mongooseConnect from "../../../lib/mongoose";
import Product from '../../../models/product' 
import { NextResponse } from 'next/server';


export async function GET() {
  const featuredProductId = '666d768d061352c18fa561e6';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  
  console.log('++++++++++++++++ server featured product', featuredProduct);

  return NextResponse.json({
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  })
  
  // return {
  //   props: {
  //     featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
  //     newProducts: JSON.parse(JSON.stringify(newProducts)),
  //   },
  // };
  

}