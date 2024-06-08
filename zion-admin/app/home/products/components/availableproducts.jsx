
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


  const tbasic = 'w-full bg-white rounded-sm shadow-md'
  const tbasic_thead_tr_td_th = 'text-sm text-gray-600 uppercase border-b border-gray-200 px-4 py-2'
  const tbasic_tr_td = 'px-4 py-1'
  const tbasic_a = 'px-4 rounded-sm inline-flex mx-1 items-center gap-1 text-sm py-1'
  
  
  const resultswithtable = (
    <table className={tbasic}>
      <thead className={tbasic+tbasic_thead_tr_td_th}>
        <tr className={tbasic+tbasic_tr_td}>
          <th className={tbasic+tbasic_thead_tr_td_th}>title</th>
          <th className={tbasic+tbasic_thead_tr_td_th}>description</th>
          <th className={tbasic+tbasic_thead_tr_td_th}>price</th>
          <th className={tbasic+tbasic_thead_tr_td_th}>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          gotproducts?.map(p => (
            <tr key={p._id} className={tbasic+tbasic_tr_td}>
              <td className={tbasic+tbasic_tr_td}>

                  <div className="flex justify-center items-center font-bold">
                    {p.title}
                  </div>
              </td>
              <td className={tbasic+tbasic_tr_td}>{p.description}</td>
              <td className={tbasic+tbasic_tr_td}>{p.price}</td>
              <td className={tbasic+tbasic_tr_td}>
                  <div className=" gap-5 p-4  px-4 rounded-sm inline-flex mx-1 items-center  text-sm py-1">
                      <DeletePdt  id = {p._id}  />
                      <EditPdt id = {p._id}/>
                    </div> 
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
      <div className="h-5 m-4"></div>
      
      {resultswithtable}
    </>
  );
}
