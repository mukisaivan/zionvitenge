"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "../components/Spinner";
import { RingLoader, CircleLoader } from "react-spinners";
import { ReactSortable } from "react-sortablejs";
// import { uploadFile } from "../home/products/components/upload";
import { useRef } from "react";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  images: existingImages,
  price: existingPrice,
  category:assignedCategory,
  properties:assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImageURLs] = useState(existingImages || []);
  const [productProperties, setProductProperties] = useState(assignedProperties || {});
  const [category, setCategory] = useState(assignedCategory || '');
  const [isUploading, setIsUploading] = useState(false);
  
  const [categories, setCategories] = useState([]);
  const [goToProducts, setGoToProducts] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // const existingImages = [];

  useEffect(() => {
    setLoading(true);
    const storedImages = JSON.parse(
      localStorage.getItem("uploadedImages") || "[]"
    );
    setImageURLs(storedImages);
    setLoading(false);
  }, []); 

  useEffect(() => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    })
  }, []);

  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const fileInput = useRef(null);

  async function uploadFile(evt) {
    evt.preventDefault();
    const files = fileInput.current.files;
    if (!files.length) {
      console.error("No files selected");
      return;
    }
    const formData = new FormData();
    // formData.append("files", fileInput?.current?.files?.[0]);
    if (fileInput.current?.files) {
      for (const file of fileInput.current.files) {
        formData.append("files", file);
      }
    }
    try {
      setLoading(true);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.downloadURLs) {
        const newImages = [...images, ...result.downloadURLs];
        setImageURLs(newImages);
        // Save images to storage
        localStorage.setItem("uploadedImages", JSON.stringify(newImages));
      }
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error(
        "Error uploading files:",
        error.response ? error.response.data : error.message
      );
    }
  }

  function removeImage(urlToRemove) {
    const filteredImages = images.filter((url) => url !== urlToRemove);
    setImageURLs(filteredImages);
    // Save images to storage after removing
    localStorage.setItem("uploadedImages", JSON.stringify(filteredImages));
  }

  function updateImagesOrder(images) {
    setImageURLs(images);
  }

  async function saveProduct(ev) {
    try {
      ev.preventDefault();
      const data = {
        title,
        description,
        price,
        images,
        category,
        properties:productProperties
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
    router.refresh();
  }

    function setProductProp(propName,value) {
    setProductProperties(prev => {
      const newProductProps = {...prev};
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({_id}) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while(catInfo?.parent?._id) {
      const parentCat = categories.find(({_id}) => _id === catInfo?.parent?._id);
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
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
      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-3">
        {loading ? (
          <div className="flex items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <RingLoader color="#36d7b7" />
            <CircleLoader color="#36d7b7" />
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          <div className="mt-4 max-h-48 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              <ReactSortable
                list={images}
                setList={updateImagesOrder}
                className="flex flex-grow gap-2"
              >
                {images.map((url, index) => (
                  <div key={index} className="relative w-24 h-24 ">
                    <img
                      src={url}
                      alt={`Uploaded file ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(url)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </ReactSortable>
            </div>
          </div>
        )}

        <label className="w-24 max-h-48 mt-4 bg-slate-300 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input
            type="file"
            ref={fileInput}
            onChange={uploadFile}
            multiple
            className="hidden"
          />
        </label>
      </div>

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
