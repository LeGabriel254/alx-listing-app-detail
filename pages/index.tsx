import Image from 'next/image';
// import hero from  '@/public/hero-bg.jpg'
import FilterSection from "@/components/layout/FilterSection"

export default function Home() {
  return (
    <div>
        <FilterSection />
    <section className="relative h-[80vh] w-full flex items-center justify-center bg-gray-800 text-white">
     
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src={hero} 
          alt="Hero Background"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority
        /> */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for readability */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
      </section>
      </div>
    
  );
}
