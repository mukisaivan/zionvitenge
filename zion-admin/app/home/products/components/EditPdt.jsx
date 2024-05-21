'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


function EditPdt({ id }) {

  const router = useRouter()

  function movetoeditpage() {
    router.push(`./products/edit/${id}`)
  }

  const editbtn = (
      <button
        type="button"
        onClick={movetoeditpage}
        className=" bg-blue-700  px-5 p-1 text-white rounded-lg"
      >
        Edit
      </button>
  );

  return <>{editbtn}</>;
}

export default EditPdt;
