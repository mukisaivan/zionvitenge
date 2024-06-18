import mongooseConnect from '../../../lib/mongoose'
import Product from '../../../models/product'
import NextResponse from 'next'

export async function GET() {
   await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return NextResponse.json({products})
}