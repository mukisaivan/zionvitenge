'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../lib/images/bg1.jpeg'
import Image from "next/image";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div>
     
        <title>Zion Vitenge</title>
        <meta name="description" content="Zion Vitenge Official Website" />
        <link rel="icon" href="/favicon.ico" />

      <main className="bg-white">
        <header className="bg-gray-900 text-white p-5">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">African Fashion</h1>
            <nav>
              <a href="#collections" className="ml-5">Collections</a>
              <a href="#about" className="ml-5">About</a>
              <a href="#contact" className="ml-5">Contact</a>
            </nav>
          </div>
        </header>

    

        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage.src})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold" data-aos='fade-up'>Experience the Beauty of African Fashion</h2>
              <p className="mt-4 text-lg md:text-2xl">Authentic designs from the heart of Kenya</p>
              <a href="#collections" className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full">Shop Now</a>
            </div>
          </div>
        </section>

        <section id="collections" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
              <img src="/images/collection1.jpg" alt="Collection 1" className="w-full h-60 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Traditional Wear</h3>
              <p className="mt-2">Explore our range of traditional African garments.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/collection2.jpg" alt="Collection 2" className="w-full h-60 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Modern Styles</h3>
              <p className="mt-2">Discover contemporary fashion inspired by African culture.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
              <img src="/images/collection3.jpg" alt="Collection 3" className="w-full h-60 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">Accessories</h3>
              <p className="mt-2">Find unique accessories to complete your look.</p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold" data-aos="fade-up">About Us</h2>
            <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">We are a Kenya-based fashion brand dedicated to bringing the beauty of African fashion to the world. Our designs are inspired by the rich cultural heritage of Africa, blending traditional elements with modern styles to create unique and stunning pieces.</p>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center" data-aos="fade-up">Contact Us</h2>
          <form className="mt-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-6">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full">Send Message</button>
          </form>
        </section>

        <footer className="bg-gray-900 text-white text-center p-5">
          <p>&copy; 2024 African Fashion. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
