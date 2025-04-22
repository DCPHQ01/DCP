import { useEffect, useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[400px] h-[300px]">
        <motion.img
          key={index}
          src={images[index]}
          className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default CardCarousel;