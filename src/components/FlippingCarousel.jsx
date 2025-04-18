import { useState, useEffect } from 'react';

const ImageFlipper = ({ images, flipInterval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the flip animation
      setIsFlipping(true);
      
      // Halfway through the animation, change the image
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, flipInterval / 2);
      
      // End the flip animation
      setTimeout(() => {
        setIsFlipping(false);
      }, flipInterval);
    }, flipInterval);

    return () => clearInterval(interval);
  }, [images.length, flipInterval]);

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Current Image */}
      <div className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
        isFlipping ? 'opacity-0 rotate-y-90' : 'opacity-100 rotate-y-0'
      }`}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Next Image (appears during flip) */}
      <div className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
        isFlipping ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-90'
      }`}>
        <img 
          src={images[(currentIndex + 1) % images.length]} 
          alt={`Next slide`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageFlipper;