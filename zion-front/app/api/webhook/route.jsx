import { headers } from "next/headers";
import mongooseConnect from "../../../lib/mongoose";
// import { buffer } from 'micro';
import { Order } from "../../../models/Order";
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SK);
const endpointSecret = "whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6";

export async function POST(req, res) {
  // const sig = req.headers['stripe-signature'];
  await mongooseConnect();
  const sig = headers().get('Stripe-Signature');

  const body = await req.text();

  let event;
  
  // console.log('------------ req body', body);
  // console.log('-------Request format', req);
  // console.log('-------Request Header1', req.headers);
  // console.log('-------Request Header2', headers());
  // console.log('------------------stripe signature', sig);


  try {
    console.log('++++++++++++++++++++  entered try block');
    // event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    console.log('++++++++++++++++++++ gotten event try block');
    
    console.log('----------- Event', event);
  } catch (err) {
    const errorMessage = `Webhook Error: ${err.message}`;
    console.error(errorMessage);
    return new NextResponse(errorMessage, {status: 400})
  }

  // Handle the event
  // switch (event.type) {
  //   case 'checkout.session.completed':
  //     const data = event.data.object;
  //     console.log('---------- checkout.session.completed event data', data);
  //     const orderId = data.metadata.orderId;
  //     const paid = data.payment_status === 'paid';
  //     if (orderId && paid) {
  //       await Order.findByIdAndUpdate(orderId, {
  //         paid: true,
  //       });
  //     }
  //     break;
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  if (event.type === 'checkout.session.completed') {
    console.log(' +++++++++++++ ++++++++ Payment was successful for user');
    const data = event.data.object;
      console.log('---------- checkout.session.completed event data', data);
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
      }
  }



  return new NextResponse('ok', { status: 200 });

}

export const config = {
  api: { bodyParser: false },
};



// bright-thrift-cajole-lean
// acct_1Lj5ADIUXXMmgk2a



//------------- Mine
//golden-joy-bonny-hooray
// acct_1PWnyELD4jNSFkrV

//whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6


//whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6


//gains-warm-trusty-uphold