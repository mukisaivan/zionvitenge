"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "../components/Spinner";
import { ReactSortable } from "react-sortablejs";
// import { uploadFile } from "../home/products/components/upload";
import { useRef } from "react";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [isUploading, setIsUploading] = useState(false);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  const existingImages = [];

  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      // setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await  axios.post("/api/upload", data);
      console.log('----------------- CLient response ',res.data);
      
    }
  }


  const fileInput = useRef(null);
  async function uploadFile(evt) {
    evt.preventDefault();
    const files = fileInput.current.files;
    if (!files.length) {
      console.error('No files selected');
      return;
    }

    const formData = new FormData();
    formData.append("files", fileInput?.current?.files);

    try {
      
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
      
    } catch (error) {
      console.error('Error uploading files:', error.response ? error.response.data : error.message);
    }

  }

  async function saveProduct(ev) {
    try {
      ev.preventDefault();
      const data = {
        title,
        description,
        price,
      };

      if (_id) {
        await axios.put(`/api/products/${_id}`, { _id, ...data });
      } else {
        //create
        await axios.post("/api/products", data);
      }
      setGoToProducts(true);
    } catch (error) {
      console.error("Error: ++++++++++++++;", error.response);
    }
  }

  if (goToProducts) {
    router.push("/home/products");
    router.refresh()
  }

  return (
    <form className=" flex flex-col space-y-4" onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        required
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
      </select>
      <label>Photos</label>
      <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              Add image
            </div>
            <input type="file" ref={fileInput} onChange={uploadFile} className="hidden"/>
          </label>


      <label>Description</label>
      <textarea
        required
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        required
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white p-3 rounded-xl inline-flex px-3 justify-center mx-auto"
      >
        Save
      </button>
    </form>
  );
}
