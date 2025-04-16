import React, { useMemo } from 'react';
import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
    const images = useMemo(() => [
      "/images/marqueepics/aicl.jpg",
      "/images/marqueepics/airs.jpg",
      "/images/marqueepics/algon.jpg",
      "/images/marqueepics/alibert.jpg",
      "/images/marqueepics/arm.jpg",
      "/images/marqueepics/asgn.jpg",
      "/images/marqueepics/bsn.jpg",
      "/images/marqueepics/cac.jpg",
      "/images/marqueepics/ccb.jpg",
      "/images/marqueepics/cd.jpg",
      "/images/marqueepics/dpr.jpg",
      "/images/marqueepics/efcc.jpg",
      "/images/marqueepics/fara.jpg",
      "/images/marqueepics/fbn.jpg",
      "/images/marqueepics/fbnq.jpg",
    ], []);

    // Create a duplicated array of images to ensure continuous scrolling
    const duplicatedImages = useMemo(() => [...images, ...images, ...images], [images]);
  
    return (
      <div className="w-full overflow-hidden bg-transparent py-4">
        <Marquee 
          gradient={false}
          pauseOnHover={true}
          speed={30}
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={`${index}-${src}`}
              src={src}
              alt={`marquee-img-${index}`}
              className="h-22 w-auto object-contain mx-10"
              loading="lazy"
              decoding="async"
            />
          ))}
        </Marquee>
      </div>
    );
};

export default React.memo(ImageMarquee);
  