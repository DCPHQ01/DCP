import { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ServiceCard = ({ image, title, services }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isModalOpen]);

    return (
        <div className="relative bg-white shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
                <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <button onClick={openModal} className="text-red-600 hover:underline text-sm cursor-pointer">
                    Click to see list of our services
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-30 backdrop-blur-sm">
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg animate-fadeZoomIn"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer"
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

export default ServiceCard;