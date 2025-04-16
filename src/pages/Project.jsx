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
                <h3 className="text-2xl font-semibold mb-6 text-center">Management Consulting and Public Administration Support Projects</h3>
                <div className="flex justify-between sm:flex-row flex-col gap-4">
                    {/* Card 1 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="mb-3">
                                <img src="../../images/marqueepics/efcc.jpg" alt="EFCC" className="w-50 h-20 object-cover rounded-full" />
                            </div>
                            <h4 className="text-lg font-bold flex items-start">Economic and Financial Crimes Commission (EFCC)</h4>
                        </div>
                        <p className="text-justify text-sm">
                        Technical Assistance and capacity building on Anti Corruption, Fiscal responsibility and effective leadership. Implemented for key officers across the 774 Local Government Councils of Nigeria in conjunction with the Economic and Financial Crimes Commission (EFCC).
                        </p>
                    </div>
        
                    {/* Card 2 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="mb-3">
                                <img src="../../images/marqueepics/ksgn.jpg" alt="KSGN" className="w-50 h-25 object-cover rounded-full" />
                            </div>
                            <h4 className="text-lg font-bold">Katsina State Government Nigeria</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Katsina State Baseline Survey: Comprehensive Mapping of Revenue Optimization Opportunities and Baseline Survey of Markets, Parks, Agro and Livestock Processing Enterprises, Commodities & Trade Groups in Katsina State, Nigeria.
                        </p>
                    </div>
        
                    {/* Card 3 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="mb-3">
                                <img src="../../images/marqueepics/ns.jpg" alt="Niger State" className="w-35 h-20 object-cover rounded-full" />
                            </div>
                            <h4 className="text-lg font-bold">Niger State Government</h4>
                        </div>
                        <p className="text-justify text-sm">
                        DCP Technical support to MECA in partnership with the Government of Niger State: Programme design for Joint Management of Tractor with the Tractors Owners & Operators Association of Nigeria (TOOAN) in Minna, supported by the Niger State Government; Tractors Refurbishment and Redeployment in Niger State.
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 2 */}
            <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold mb-6 text-center">Extractive Sector Projects</h3>
                <div className="flex justify-between sm:flex-row flex-col gap-4">
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
                <div className="flex justify-between sm:flex-row flex-col gap-4">
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
