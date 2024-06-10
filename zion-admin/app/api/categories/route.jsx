import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from 'next/server';


import {Category} from "../../../models/Category";


export async function GET() {
  await mongooseConnect();
  return NextResponse.json( await Category.find().populate('parent'));
}

export async function POST(req) {
  const data  = await req.json()
  console.log('----------new req', data);
  
  const { name, parentCategory, properties } = data
  console.log('---properties', properties);
  const category = await Category.create({
    name,
    parent: parentCategory || undefined,
    properties
  })

  return NextResponse.json({category})
  // return NextResponse.json({message : 'OK'})

}
export async function PUT(req) {
   const {name,parentCategory,properties,_id} = await  req.json();
    const categoryDoc = await Category.updateOne({_id},{
      name,
      parent: parentCategory || undefined,
      properties,
    });
   return NextResponse.json(categoryDoc);

}
export  async function DELETE(req) {
  const  idparam  =  req.nextUrl.searchParams.get('_id')
  await Category.findByIdAndDelete(idparam)
 return NextResponse.json('OK')

}