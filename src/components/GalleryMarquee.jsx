import React from 'react';
import Marquee from "react-fast-marquee";

const GalleryMarquee = () => {
  const images = [
    "/images/gallery/gallery1.jpeg",
    "/images/gallery/gallery2.jpeg",
    "/images/gallery/gallery3.jpeg",
    "/images/gallery/gallery4.jpeg",
    "/images/gallery/gallery5.jpeg",
    "/images/gallery/gallery6.jpeg",
    "/images/gallery/gallery7.jpeg",
    "/images/gallery/gallery8.jpeg",
    "/images/gallery/gallery9.jpeg",
    "/images/gallery/gallery10.jpeg",
    "/images/gallery/gallery11.jpeg",
    "/images/gallery/gallery12.jpeg",
    "/images/gallery/gallery13.jpeg",
  ];

  return (
    <div className="w-full overflow-hidden py-4">
      <Marquee loop={0} speed={20}>
        {images.map((src, index) => (
          <div
            key={index}
            className="h-40 w-60 sm:h-50 sm:w-80 flex items-center justify-center mr-5 overflow-hidden"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default GalleryMarquee;
