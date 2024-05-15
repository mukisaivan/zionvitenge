import React from "react";
import { useRouter } from "next/navigation";


function EditPdt({ id }) {

  const router = useRouter()

  function movetoeditpage() {
    router.push(`/home/edit/${id}`)
  }

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
