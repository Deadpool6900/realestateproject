'use client'
import CardHolder from "@/components/CardHolder";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Qualities from "@/components/Qualities";
import PropertySearch from "@/components/Search";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 bg-[#fff7f0] text-black">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-left mb-4">Find a perfect property</h1>
          <h2 className="text-4xl font-bold text-center md:text-left mb-4">Where you’ll love to live</h2>
          <p className="text-gray-600 text-center md:text-left mb-8">We helps businesses customize, automate and scale up their ad production and delivery.</p>
          <PropertySearch/>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="A beautiful house with a well-maintained garden" className="w-full" />
        </div>
      </main>
      <Qualities/>
      <CardHolder/>

      <div className="container mx-auto p-8 bg-white px-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Simple & easy way to find your dream Appointment</h1>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.
            </p>
            <button className="bg-black text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://placehold.co/300x200" alt="A beautiful house" className="rounded-lg" />
            <img src="https://placehold.co/300x200" alt="People signing documents" className="rounded-lg" />
            <img src="https://placehold.co/300x200" alt="Handing over keys" className="rounded-lg" />
            <img src="https://placehold.co/300x200" alt="A modern kitchen" className="rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://placehold.co/600x400" alt="A yellow house with a garden" className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Best rated host on popular rental sites</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our power of choice is untrammelled.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">News & Consult</h1>
          <a href="#" className="text-orange-500">Explore All <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Tall building with unique architecture" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">9 Easy-to-Ambitious DIY Projects to Improve Your Home</h2>
            <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Modern living room with large windows" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">Serie Shophouse Launch In July, Opportunity For Investors</h2>
            <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Suburban house with a well-maintained lawn" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">Looking for a New Place? Use This Time to Create Your Wishlist</h2>
            <a href="#" className="text-orange-500">Read the Article <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="bg-gray-200 text-black p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">For Recent Update, News.</h2>
          <p className="mb-4">We helps businesses customize, automate and scale up their ad production and delivery.</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your Email" className="p-2 rounded-l-lg border border-gray-400" />
            <button className="bg-black text-white p-2 rounded-r-lg">Subscribe</button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
