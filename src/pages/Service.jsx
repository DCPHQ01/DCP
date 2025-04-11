import Test from "../components/Test";
import { GiOrganigram } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { BsClipboard2CheckFill } from "react-icons/bs";

const Service = () => {
    return (
        <>
            {/* Services Section */}
            <section className="py-16" id="service-area">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">Services</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Service Box 1 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.2s">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="flex-shrink-0">
                                    <AiOutlineFileSearch size={30} color="red" />
                                </div>
                                <h4 className="text-lg font-bold text-left pl-2">
                                    Tax, Forensic Accounting, Audit & Asset Recovery Services
                                </h4>
                            </div>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>Asset Tracing & Recovery</li>
                                <li>Forensic Accounting & Auditing</li>
                                <li>Tax Advisory, Audit & Assurance Services</li>
                                <li>Forensic Data Recovery & Data Analytics</li>
                                <li>Investigation, Intelligence & Polygraph Testing</li>
                                <li>Documents Examination, Authentication, Verification, Signature & Handwriting Analysis</li>
                            </ul>
                        </div>

                        {/* Service Box 2 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.4s">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <GiOrganigram size={30} color="red"/>
                                </div>
                                <h4 className="text-lg font-bold text-left pl-2">Management Consulting</h4>
                            </div>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>Project Management</li>
                                <li>Governance & Reforms</li>
                                <li>Compliance & Regulation</li>
                                <li>Training, Learning & Development</li>
                                <li>Process Transformation & Outsourcing</li>
                                <li>Corporate Strategy & Communications</li>
                                <li>Institutional Strengthening & Capacity Building</li>
                            </ul>
                        </div>

                        {/* Service Box 3 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.6s">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="flex-shrink-0">
                                    <RiMoneyDollarBoxFill size={30} color="red" />
                                </div>
                                <h4 className="text-lg font-bold text-left pl-2">
                                    Revenue Optimization
                                </h4>
                            </div>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>Property Tax Solutions</li>
                                <li>IGR Enhancement Project</li>
                                <li>Customs Revenue Enhancement</li>
                                <li>Extractive Industry Revenue Enhancement</li>
                            </ul>
                        </div>

                        {/* Service Box 4 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.6s">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="flex-shrink-0 text-red-600 text-3xl">
                                    <BsClipboard2CheckFill size={30} color="red"/>
                                </div>
                                <h4 className="text-lg font-bold text-left pl-2">
                                    Monitoring & Evaluation Consulting
                                </h4>
                            </div>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>Project Monitoring & Evaluation</li>
                                <li>Project Scoping, Analysis & Evaluation</li>
                                <li>Strategy Development and Evaluation</li>
                                <li>Revenue Enhancement Profiling & Review</li>
                            </ul>
                        </div>

                        {/* Service Box 5 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.6s">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="flex-shrink-0">
                                    <GrTechnology size={30} color="red" />
                                </div>
                                <h4 className="text-lg font-bold text-left pl-2">
                                    Technology Innovation
                                </h4>
                            </div>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>ERP Solutions & Bespoke Applications</li>
                                <li>Application Development & Deployment</li>
                                <li>Hardware Preventive & Scheduled Maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="section-padding bg-gray-100" id="skill-area">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="w-full lg:w-5/12">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold wow fadeInUp">Our Core Competencies</h2>
                                <p className="mt-2 wow fadeInUp">
                                    DCP works with over 700 staff, Consultants, Associates, Virtual Support, Academics,
                                    Bureaucrats and Professionals.
                                </p>
                            </div>

                            <div className="">
                               <Test />
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 flex justify-center items-center">
                            <img src="images/skill-image.png" alt="Core Competency Illustration" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
