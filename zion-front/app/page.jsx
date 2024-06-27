"use client";
import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import bgImage from "../lib/images/bg1.jpeg";
import Image from "next/image";
import Featured from "./components/Featured";
import NewProducts from "./components/NewProducts";
import Custombutton from './components/Custombutton'

export default function Home() {
  const [featuredProduct, setfeaturedProduct] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  async function getfeaturedproductsandnewproducts() {
    const res = await fetch(
      "http://localhost:3000/api/featuredandnewproducts",
      {
        method: "GET",
      }
    );
    const responsedata = await res.json();

    const { featuredProduct, newProducts } = responsedata;
    setNewProducts(newProducts);
    setfeaturedProduct(featuredProduct);

    return responsedata;
  }

  useEffect(() => {
    getfeaturedproductsandnewproducts();
  }, []);

  return (
    <div>
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
      <Custombutton action={getfeaturedproductsandnewproducts}/>
    </div>
  );
}






// export function Home2() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Animation duration
//     });
//   }, []);

//   const phoneNumber = "+2540701203389";

//   const possibleheader = (
//     <header className="bg-gray-900 text-white p-5">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold">African Fashion</h1>
//         <nav>
//           <a href="#collections" className="ml-5">
//             Collections
//           </a>
//           <a href="#about" className="ml-5">
//             About
//           </a>
//           <a href="#contact" className="ml-5">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );

//   return (
//     <div>
//       <title>Zion Vitenge</title>
//       <meta name="description" content="Zion Vitenge Official Website" />
//       <link rel="icon" href="/favicon.ico" />

//       <main className="bg-white">
//         <section
//           className="relative bg-cover bg-center h-screen"
//           style={{ backgroundImage: `url(${bgImage.src})` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="text-center text-white">
//               <h2 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
//                 Experience the Beauty of African Fashion
//               </h2>
//               <p className="mt-4 text-lg md:text-2xl">
//                 Authentic designs from the heart of Kenya
//               </p>
//               <a
//                 href="#collections"
//                 className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full"
//               >
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </section>

//         <section id="collections" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold text-center">Our Collections</h2>
//           <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//             <div
//               className=" relative bg-gray-100 p-6 rounded-lg group"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <Image
//                 src="/images/bg4.jpeg"
//                 alt="Collection 3"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white group-hover:opacity-100 transition-opacity duration-500">
//                 <h3 className="mt-4 font-semibold mb-2 transition-transform duration-500 group-hover:-translate-y-5">
//                   Accessories
//                 </h3>
//                 <p className="mt-2 text-center">
//                   Find unique accessories to complete your look hhhhhh.
//                 </p>
//               </div>
//             </div>
//             <div
//               className=" relative bg-gray-100 p-6 rounded-lg group"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <Image
//                 src="/images/bg4.jpeg"
//                 alt="Collection 3"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white group-hover:opacity-100 transition-opacity duration-500">
//                 <h3 className="mt-4 font-semibold mb-2 transition-transform duration-500 group-hover:-translate-y-5">
//                   Accessories
//                 </h3>
//                 <p className="mt-2 text-center">
//                   Find unique accessories to complete your look.
//                 </p>
//               </div>
//             </div>
//             <div
//               className=" relative bg-gray-100 p-6 rounded-lg group"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <Image
//                 src="/images/bg4.jpeg"
//                 alt="Collection 3"
//                 // layout="fill"
//                 objectFit="cover"
//                 width={240}
//                 height={240}
//                 className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white group-hover:opacity-100 transition-opacity duration-500">
//                 <h3 className="mt-4 font-semibold mb-2 transition-transform duration-500 group-hover:-translate-y-5">
//                   Accessories
//                 </h3>
//                 <p className="mt-2 text-center">
//                   Find unique accessories to complete your look.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="about" className="bg-gray-900 text-white py-20">
//           <div className="container mx-auto text-center">
//             <h2 className="text-3xl font-bold" data-aos="fade-up">
//               About Us
//             </h2>
//             <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
//               We are a Kenya-based fashion brand dedicated to bringing the
//               beauty of African fashion to the world. Our designs are inspired
//               by the rich cultural heritage of Africa, blending traditional
//               elements with modern styles to create unique and stunning pieces.
//             </p>
//           </div>
//         </section>

//         <section id="contact" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
//             Contact Us
//           </h2>
//           <form
//             className="mt-10 max-w-xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="mb-6">
//               <label className="block text-gray-700">Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700">Message</label>
//               <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>

//         <footer className="bg-gray-900 text-white text-center p-5 relative">
//           <p>&copy; 2024 African Fashion. All rights reserved.</p>
//           {/* <WhatsAppButton phoneNumber={phoneNumber}/> */}
//         </footer>
//       </main>
//     </div>
//   );
// }
