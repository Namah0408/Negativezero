import { useEffect, useState } from "react";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="event"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Nagpur’s Most Vibrant Flea Fair
        </h1>
        <p className="text-gray-300 mb-8">
          Connecting brands, creators, and communities.
        </p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}