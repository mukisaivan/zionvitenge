"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "../components/Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
 
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  
  async function saveProduct(ev) {


    try {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
    };
    //create
   await axios.post('/api/products', data);
      
    
      setGoToProducts(true);
  
    } catch (error) {
      console.error("Error: ++++++++++++++;",error.response);
    }
    
  }

      if (goToProducts) {
        router.push("/home/products");
      }


  return (
      <form
          className=" flex flex-col space-y-4"
        onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button type="submit" className="bg-black text-white p-3 rounded-xl inline-flex px-3 justify-center mx-auto">
        Save
      </button>
    </form>
  );
}
