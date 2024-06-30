'use client'

import React from 'react'
// import CommentsList from '../trialtasks/components/CommentsList'
import { useState, useEffect } from 'react';
import axios from "axios";


export default function page() {


  async function getOrders() {
    const response = await axios.get('/api/orders')
    // const resdata =  await response.json()
    // console.log('----Orders response', response.data);
  }



  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders').then(response => {
      setOrders(response.data);
    });
  }, []);
  return (
    <>
      {/* <button className=' bg-red-600 text-white p-5 rounded-md' onClick={getOrders}>
        Get orders
      </button> */}
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 && orders.map((order,index) => (
            <tr key={order._id}>
              <td>{index+1}</td>
              <td>{(new Date(order.createdAt)).toLocaleString()}
              </td>
              <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
                {order.paid ? 'YES' : 'NO'}
              </td>
              <td>
                {order.name} {order.email}<br />
                {order.city} {order.postalCode} {order.country}<br />
                {order.streetAddress}
              </td>
              <td>
                {order.line_items.map(l => (
                  <>
                    {l.price_data?.product_data.name} x
                    {l.quantity}<br />
                  </>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <CommentsList/> */}
    </>
  )
}
