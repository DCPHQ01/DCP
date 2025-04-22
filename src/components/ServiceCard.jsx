import { useState, useRef, useEffect, useCallback, memo } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ServiceCard = ({ image, title, services }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
  const animationRef = useRef();

  const closeModal = useCallback(() => {
    setIsVisible(false);
    // Delay the state update to allow the animation to complete
    const timer = setTimeout(() => setIsModalOpen(false), 200);
    return () => clearTimeout(timer);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    // Trigger the animation on the next frame
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = '';
      // Clean up any pending animations
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isModalOpen, closeModal]);

  return (
    <div className="relative bg-white shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <button 
          onClick={openModal} 
          className="text-red-600 hover:underline text-sm cursor-pointer"
          aria-label={`View services for ${title}`}
        >
          Click to see list of our services
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <div
            ref={modalRef}
            className={`bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg transition-all duration-200 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer hover:scale-110 transition-transform"
              aria-label="Close modal"
            >
              <AiOutlineClose />
            </button>
            <h4 className="text-lg font-bold mb-4">{title}</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm marker:text-red-600">
              {services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ServiceCard);