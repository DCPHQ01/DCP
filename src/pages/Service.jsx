
import ServiceCard from "../components/ServiceCard";
import Test from "../components/Test";

// import Test from "../components/Test";

const Service = () => {
    const serviceData = [
        {
          image: "/images/servicecard1.jpg",
          title: "Tax, Forensic Accounting, Audit & Asset Recovery Services",
          services: [
            "Asset Tracing & Recovery",
            "Forensic Accounting & Auditing",
            "Tax Advisory, Audit & Assurance Services",
            "Forensic Data Recovery & Data Analytics",
            "Investigation, Intelligence & Polygraph Testing",
            "Documents Examination, Authentication, Verification, Signature & Handwriting Analysis",
          ],
        },
        {
          image: "/images/servicecard2.jpg",
          title: "Management Consulting",
          services: [
            "Project Management",
            "Governance & Reforms",
            "Compliance & Regulation",
            "Training, Learning & Development",
            "Process Transformation & Outsourcing",
            "Corporate Strategy & Communications",
            "Institutional Strengthening & Capacity Building",
          ],
        },
        {
          image: "/images/servicecard3.jpg",
          title: "Revenue Optimization",
          services: [
            "Property Tax Solutions",
            "IGR Enhancement Project",
            "Customs Revenue Enhancement",
            "Extractive Industry Revenue Enhancement",
          ],
        },
      ];
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
                        {serviceData.map((item,index)=>(
                            <ServiceCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            services={item.services}
                          />
                        ))}
                       
                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="section-padding bg-gray-100" id="skill-area">
                <div className="container mx-auto px-4">
                    <div className="w-full mx-auto">
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold fadeInUp">Our Core Competencies</h2>
                            <p className="mt-2 fadeInUp">
                            DCP works with multiple Consultants, Associates, Virtual Support, Academics,
                            Bureaucrats and Professionals.
                            </p>
                        </div>

                    <div>
                        <Test />
                    </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Service;
