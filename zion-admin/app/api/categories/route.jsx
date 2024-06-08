import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from 'next/server';


import {Category} from "../../../models/Category";


export async function GET() {
  await mongooseConnect();
  return NextResponse.json( await Category.find().populate('parent'));
}

export async function POST(req) {
  const { name,parentCategory,properties } = req.body()
  const category = await Category.create({
    name,
    parent: parentCategory || undefined,
    properties
  })

  return NextResponse.json({category})

}
export async function PUT(req) {
   const {name,parentCategory,properties,_id} = req.body();
    const categoryDoc = await Category.updateOne({_id},{
      name,
      parent: parentCategory || undefined,
      properties,
    });
   return NextResponse.json(categoryDoc);

}
export  async function DELETE(req) {
  const { _id } = req.query()
  await Category.deleteOne({ _id })
 return NextResponse.json('OK')

}