import mongooseConnect from "../../lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';
import {Order}  from "../../models/Order";
import {NextResponse} from 'next/server'

const endpointSecret = "whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6";

export default async function handler(req,res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      console.log('----------event data', data);
      // const orderId = data.metadata.orderId;
      // const paid = data.payment_status === 'paid';
      // if (orderId && paid) {
      //   await Order.findByIdAndUpdate(orderId,{
      //     paid:true,
      //   })
      // }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
  api: {bodyParser:false,}
};



// bright-thrift-cajole-lean
// acct_1Lj5ADIUXXMmgk2a



//------------- Mine
//golden-joy-bonny-hooray
// acct_1PWnyELD4jNSFkrV

//whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6


//whsec_eb595a6025226aebc3885a081c692ea82312764fbd1deeb9ed701fe8135f9cd6


//gains-warm-trusty-uphold