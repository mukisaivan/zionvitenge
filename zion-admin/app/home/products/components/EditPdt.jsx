import { json } from "node:stream/consumers";
import React from "react";

function EditPdt({ id }) {
  async function handleedit() {
    try {
      const res = fetch(`http://localhost:3000/api/products/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      router.refresh();
      router.push("/home/products");
      router.refresh();

    } catch (error) {
      console.log("+++++++++++++++++++++++++ error", error);
    }
  }

  const editbtn = (
    <button
      type="button"
      onClick={handleedit}
      className=" bg-blue-700  px-5 p-1 text-white rounded-lg"
    >
      Edit
    </button>
  );

  return <>{editbtn}</>;
}

export default EditPdt;
