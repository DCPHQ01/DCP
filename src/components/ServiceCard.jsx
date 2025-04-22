import { useState, useRef, useEffect, useCallback, memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="relative bg-white shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ServiceCard);