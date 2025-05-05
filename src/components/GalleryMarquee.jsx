import React from 'react';
import Marquee from "react-fast-marquee";

const GalleryMarquee = () => {
  const images = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
    "/images/gallery/7.png",
    "/images/gallery/8.png",
    "/images/gallery/9.png",
    "/images/gallery/10.png",
    "/images/gallery/11.png",
    "/images/gallery/12.png",
    "/images/gallery/13.png",
    "/images/gallery/14.png",
    "/images/gallery/15.png",
    "/images/gallery/16.png",
    "/images/gallery/17.png",
    "/images/gallery/18.png",
    "/images/gallery/19.png",
    "/images/gallery/20.png",
  ];

  return (
    <div className="w-full overflow-hidden py-4">
      <Marquee loop={0} speed={100} pauseOnHover={true}>
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
