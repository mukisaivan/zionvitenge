'use client'

import React from "react";
import Link from 'next/link';


function EditPdt({ id }) {


  function click() {
    console.log(`ive been clicked ${id}`);
  }

  const editbtn = (
    <Link href={`./products/edit/${id}`}>
      <button
        type="button"
        onClick={click}
          className=" bg-blue-700  px-5 p-1 text-white rounded-lg z-40 relative"
        >
        Edit    
        </button>
    </Link>
  );

  return <>{editbtn}</>;
}


export default EditPdt;
