import mongooseConnect from "../../../lib/mongoose";
import Category from "../../../models/Category";
import Product from "../../../models/product";
import { NextResponse } from 'next/server';

export async function GET() {
  await mongooseConnect();

  // Fetch all categories
  const categories = await Category.find({});


  // Fetch products for each category
  const categoriesWithProducts = await Promise.all(categories.map(async (category) => {
    const products = await Product.find({ category: category._id });
    return {
      ...category.toObject(),
      products,
    };
  }));

  return NextResponse.json({ categories: categoriesWithProducts });
}
