import mongooseConnect from "../../../../lib/mongoose";
import Product from "../../../../models/product";
import Category from "../../../../models/Category";
import { NextResponse } from "next/server";

export async function GET(request) {
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  await mongooseConnect();

  const category = await Category.findById(id);
  if (!category) {
    return NextResponse.json({ message: 'Category not found' }, { status: 404 });
  }

  const products = await Product.find({ category: id });

  return NextResponse.json({
    category: {
      id: category._id,
      name: category.name,
    },
    products,
  });
}
