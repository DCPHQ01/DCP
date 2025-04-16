import { AiOutlineAreaChart } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Project = () => {
    return (
        <section className="section-padding" id="portfolio-area">
            {/* 🌟 Main Title */}
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="title font-bold text-3xl mb-4">Project Portfolio</h2>
                <p className="max-w-3xl mx-auto">
                    In supporting economic development in Nigeria, DCP in collaboration with its international partners,
                    offers purpose-built and solution-focused projects for its clients. These projects are uniquely
                    developed and designed with a bi-focal vision of both the present and the future. Some of these
                    customised projects and programmes are:
                </p>
            </div>
        
            {/* 🔹 Group 1 */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Tax & Revenue Solutions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <BsBank2 size={30} color="red" />
                            <h4 className="text-lg font-bold">Property Tax Solutions</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Prudent assessment, collection, and accounting for property tax pose significant challenges to both
                            the Tax Authorities and the Taxable Entities, especially in developing countries. DCP delivers
                            end-to-end solutions to its clients for resolving these difficulties.
                        </p>
                    </div>
        
                    {/* Card 2 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <AiOutlineAreaChart size={40} color="red" />
                            <h4 className="text-lg font-bold">Customs Revenue Enhancement Project (CREP)</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Continuous performance improvement in the collection of customs revenue is one of the major
                            sources of funding government activities around the world.
                        </p>
                    </div>
        
                    {/* Card 3 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <FaChartBar size={40} color="red" />
                            <h4 className="text-lg font-bold">Sustainable Revenue Enhancement Programme</h4>
                        </div>
                        <p className="text-justify text-sm">
                            This project is developed to support Governments at all levels to enhance their Internally Generated Revenue (IGR) portfolios.
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 2 */}
            <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold mb-6 text-center">Extractive Sector Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Card 4 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Extractive Industry Revenue Enhancement Project (EIREP)</h4>
                        </div>
                        <p className="text-justify text-sm">
                            The EIREP is a tool designed to help extractive sector producers manage recurring revenue loss issues.
                        </p>
                    </div>
        
                    {/* Placeholder Card 5 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Oil Revenue Analytics Framework</h4>
                        </div>
                        <p className="text-justify text-sm">
                            An advanced framework for analyzing oil revenue leakages and optimizing resource-based income.
                        </p>
                    </div>
            
                    {/* Placeholder Card 6 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Mining Compliance Support</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Designed to ensure compliance, transparency, and effective reporting for mining revenue sources.
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 3 */}
            <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold mb-6 text-center">Governance & Advisory Programmes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Placeholder Card 7 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Public Finance Management Reform</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Advisory program supporting the modernization of budgeting and financial systems in public institutions.
                        </p>
                    </div>
            
                    {/* Placeholder Card 8 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Digital Governance Transformation</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Solutions that help government bodies digitize their processes for better transparency and service delivery.
                        </p>
                    </div>
            
                    {/* Placeholder Card 9 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <IoIosSettings size={40} color="red" />
                            <h4 className="text-lg font-bold">Local Government Advisory Services</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Custom support for local councils in administrative, legal, and financial governance practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>      
    );
};

export default Project;
