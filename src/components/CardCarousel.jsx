import { useEffect, useState } from "react";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const images = [
  "../../images/ServiceCarousel/2.svg",
  "../../images/ServiceCarousel/3.svg",
  "../../images/ServiceCarousel/4.svg",
  "../../images/ServiceCarousel/5.svg",
  "../../images/ServiceCarousel/6.svg",
  "../../images/ServiceCarousel/7.svg",
  "../../images/ServiceCarousel/8.svg",
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[400px] h-[300px]">
        <motion.img
          key={index}
          src={images[index]}
          className="absolute top-0 left-0 w-full h-full rounded-xl object-contain"
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