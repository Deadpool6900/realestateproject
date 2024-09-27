import CardHolder from "@/components/CardHolder";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Qualities from "@/components/Qualities";
import PropertySearch from "@/components/Search";
import Image from "next/image";
import home from '../images/Home illustarstion.webp'
import i1 from "../images/Charis_Solomou_3.jpg";
import i2 from "../images/images.jpg";
import i3 from "../images/modernist-decor-inspiration-01.webp";
import i4 from "../images/Shinkenchiku_Sha_2.jpg";
import i5 from "../images/648c6fbc2b4da9c936d70d0468d6d880.jpg";
import News from "@/components/news";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 bg-[#fff7f0] text-black">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-left mb-4">Find a perfect property</h1>
          <h2 className="text-4xl font-bold text-center md:text-left mb-4">Where you’ll love to live</h2>
          <p className="text-gray-600 text-center md:text-left mb-8">We help clients customize, automate and scale up their ad production and delivery.</p>
          <PropertySearch />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <Image src={home} alt="home image" />
        </div>
      </main>
      <Qualities />
      <CardHolder />

      <div className="container mx-auto p-8 bg-white px-20 text-black">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Simple & easy way to find your dream property</h1>
            <p className="text-gray-600 mb-6">
              Our platform provides a seamless experience for clients to find their ideal property. With a user-friendly interface and advanced search features, you can easily browse through a wide range of properties and find the one that suits your needs.
            </p>
            <button className="bg-black text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image src={i1} alt="image" className="rounded-md" />
            <Image src={i3} alt="image" className="rounded-md" />
            <Image src={i4} alt="image" className="rounded-md" />
            <Image src={i2} alt="image" className="rounded-md" />

          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={i5} alt="image" className="rounded-md" />

          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Best rated host on popular rental sites</h2>
            <p className="text-gray-600">
              Our platform is trusted by thousands of clients who have found their dream properties with us. We pride ourselves on providing exceptional customer service and ensuring that our clients have a seamless experience.
            </p>
          </div>
        </div>
      </div>
      {/* <News/> */}
      <Footer />
    </>
  );
}
