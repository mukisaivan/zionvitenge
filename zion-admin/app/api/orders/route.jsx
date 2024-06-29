import {mongooseConnect} from '../../../lib/mongoose';
import { Order } from "../../../models/Order";
import { NextResponse } from 'next/server';

export async function GET() { 
  await mongooseConnect();
  const gottenOrders = await Order.find().sort({ createdAt: -1 })
  // console.log('++++++++  Server Side gotten Orders', gottenOrders);
  return NextResponse.json(gottenOrders );
}