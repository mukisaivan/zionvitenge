'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductGrid from '../../components/ProductsGrid';
import Center from '@/app/components/Center';

function CategoryPage({params}) {
  const id = params.id;
  const [products, setProducts] = useState([]);
   const [categoryName, setCategoryName] = useState('');


  async function fetchCategoryProducts() {
    console.log('+++++ params',params);
        try {
          const response = await axios.get(`/api/categories/${id}`);
          const { category, products } = response.data;
          setProducts(products);
          setCategoryName(category.name);

          // console.log(response.data.products);
        } catch (error) {
          console.error("Error fetching category products", error);
        }
      }

  useEffect(() => {
    if (id) {
      
      fetchCategoryProducts();
    }
  }, [id]);

  return (
    <Center>
      <div>
        <h1 className='p-7'> Viewing Products in {categoryName.toUpperCase()}</h1>
        {/* <button
          className=" block mt-5 rounded-lg bg-red-700 p-6 ml-4"
          onClick={() => fetchCategoryProducts()}
        >
          get category products
        </button> */}
        <ProductGrid products={products} />
      </div>
    </Center>
  );
}

export default CategoryPage;
