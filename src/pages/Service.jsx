
import ServiceCard from "../components/ServiceCard";
import Test from "../components/Test";

// import Test from "../components/Test";

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
                        {/* Service Card 1 */}
                        <ServiceCard
                            image='/images/servicecard1.jpg'
                            title="Tax, Forensic Accounting, Audit & Asset Recovery Services"
                            services={[
                                "Asset Tracing & Recovery",
                                "Forensic Accounting & Auditing",
                                "Tax Advisory, Audit & Assurance Services",
                                "Forensic Data Recovery & Data Analytics",
                                "Investigation, Intelligence & Polygraph Testing",
                                "Documents Examination, Authentication, Verification, Signature & Handwriting Analysis",
                            ]}
                        />

                        {/* Service Card 2 */}
                        <ServiceCard
                            image="/images/servicecard2.jpg"
                            title="Management Consulting"
                            services={[
                                "Project Management",
                                "Governance & Reforms",
                                "Compliance & Regulation",
                                "Training, Learning & Development",
                                "Process Transformation & Outsourcing",
                                "Corporate Strategy & Communications",
                                "Institutional Strengthening & Capacity Building",
                            ]}
                        />

                        {/* Service Card 3 */}
                        <ServiceCard
                            image="/images/servicecard3.jpg"
                            title="Revenue Optimization"
                            services={[
                                "Property Tax Solutions",
                                "IGR Enhancement Project",
                                "Customs Revenue Enhancement",
                                "Extractive Industry Revenue Enhancement",
                            ]}
                        />
                        
                        {/* Service Card 4 */}
                        <ServiceCard
                            image="/images/servicecard4.jpg"
                            title="Monitoring & Evaluation Consulting"
                            services={[
                                "Project Monitoring & Evaluation",
                                "Project Scoping, Analysis & Evaluation",
                                "Strategy Development and Evaluation",
                                "Revenue Enhancement Profiling & Review",
                            ]}
                        />
                        
                        {/* Service Card 5 */}
                        <ServiceCard
                            image="/images/servicecard5.jpg"
                            title="Technology Innovation"
                            services={[
                                "ERP Solutions & Bespoke Applications",
                                "Application Development & Deployment",
                                "Hardware Preventive & Scheduled Maintenance",
                            ]}
                        />
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
                            <img src="images/DCPServices.png" alt="Core Competency Illustration" className="max-w-full h-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
