
import React from "react";
import DeletePdt from './DeletePdt'
import EditPdt from './EditPdt'

async function getavailableproducts() {
  console.log("trying to get products");
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("the response is not ok");
    }
    // const data  = await  res.json()
    const data2 = await res.json();
    const data2res = data2.res;
    const stringifiedres = JSON.stringify(data2res);

    // console.log(
    //   "++++++++++++++++++++++++++++The response is",
    //   stringifiedres
    // );

    return data2res;

    // return stringifiedres
  } catch (error) {
    console.log("This Error happened:", error);
  }
  console.log("done getting products");
}
export default async function Availableproducts() {
  const gotproducts = await getavailableproducts();

  // console.log("--------------these are the got produxts:", gotproducts);

  const tablesample = (
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
          <th>price</th>
        </tr>
       
        </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  )


  const resultswithtable = (
    <table className="border w-full border-collapse border-red-500">
      <thead>
        <tr>
          <th className="border-red-400 border">title</th>
          <th className="border-red-400 border">description</th>
          <th className=" border-red-400 border">price</th>
          <th className=" border-red-400 border">Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          gotproducts?.map(p => (
            <tr key={p._id}>
              <td className=" border-red-400 border">

                  <div className="flex justify-center items-center font-bold">
                    {p.title}
                  </div>
              </td>
              <td className=" border-red-400 border pl-2">{p.description}</td>
              <td className=" border-red-400 border pl-2">{p.price}</td>
              <td className="  border-red-400 border flex justify-center items-center">
                  <td className="flex flex-row gap-5 p-4">
                      <DeletePdt  id = {p._id} />
                      <EditPdt id = {p._id}/>
                    </td> 
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )


  const pdtsrender = (

    gotproducts.map(p => (
      <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>Price: ${p.price}</p>
        </div>
    ))
  )

  if (!gotproducts || gotproducts.length === 0) {
    return <div>No products available</div>; // Handle empty data
  }

  return (
    <>
      <div className=" font-bold mt-5  underline">Available Products</div>
      <div class="h-5 m-4"></div>
      
      {resultswithtable}
    </>
  );
}
