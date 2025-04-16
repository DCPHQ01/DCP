import React from 'react';
import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
    const images = [
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
      "/images/marqueepics/firs.jpg",
      "/images/marqueepics/iasl.jpg",
      "/images/marqueepics/jap.jpg",
      "/images/marqueepics/ksg.jpg",
      "/images/marqueepics/ksgn.jpg",
      "/images/marqueepics/meca.jpg",
      "/images/marqueepics/ncc.jpg",
      "/images/marqueepics/ncdmb.jpg",
      "/images/marqueepics/ncs.jpg",
      "/images/marqueepics/nddc.jpg",
      "/images/marqueepics/ndic.jpg",
      "/images/marqueepics/neiti.jpg",
      "/images/marqueepics/ngf.jpg",
      "/images/marqueepics/nicon.jpg",
      "/images/marqueepics/nimasa.jpg",
      "/images/marqueepics/nipost.jpg",
      "/images/marqueepics/nirsal.jpg",
      "/images/marqueepics/nis.jpg",
      "/images/marqueepics/niwa.jpg",
      "/images/marqueepics/njcn.jpg",
      "/images/marqueepics/nnpc.jpg",
      "/images/marqueepics/npa.jpg",
      "/images/marqueepics/ns.jpg",
      "/images/marqueepics/pc.jpg",
      "/images/marqueepics/pefmb.jpg",
      "/images/marqueepics/pppra.jpg",
      "/images/marqueepics/secn.jpg",
      "/images/marqueepics/stl.jpg",
      "/images/marqueepics/uc.jpg",
      "/images/marqueepics/upu.jpg",
      "/images/marqueepics/wbg.jpg",
      "/images/marqueepics/zsg.jpg",
    ];
  
    return (
      <div className="w-full overflow-hidden bg-transparent py-4">
        <Marquee loop={0}>
          {images.concat(images).map((src, index) => (
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

export default ImageMarquee;
  