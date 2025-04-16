import React from 'react';
import Marquee from "react-fast-marquee";

const GalleryMarquee = () => {
    const images = [

    ];
    
return (
    <div className="w-full overflow-hidden bg-transparent py-4">
      <Marquee loop={0} speed={100}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`marquee-img-${index}`}
            className="h-22 w-auto object-contain mr-10"
          />
        ))}
      </Marquee>
    </div>
  );

};