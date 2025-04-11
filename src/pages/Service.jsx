const Service = () => {
    return ( 
        <>
            <section className="py-16" id="service-area">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">Services</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Service Box 1 */}
                        <div className="feature-box p-6 shadow-md hover:shadow-lg transition-all wow fadeInUp" data-wow-delay="0.2s">
                            <div className="box-icon mb-4 text-red-600 text-3xl">
                                <i className="icofont icofont-cash-on-delivery-alt"></i>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-left">Tax, Forensic Accounting, Audit & Asset Recovery Services</h4>
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
                            <div className="box-icon mb-4 text-red-600 text-3xl">
                                <i className="icofont icofont-chart-flow-alt-1"></i>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Management Consulting</h4>
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
                            <div className="box-icon mb-4 text-red-600 text-3xl">
                                <i className="icofont icofont-money-bag"></i>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Revenue Optimization</h4>
                            <ul className="list-[square] list-outside pl-5 text-sm space-y-1 text-left marker:text-red-600">
                                <li>Property Tax Solutions</li>
                                <li>IGR Enhancement Project</li>
                                <li>Customs Revenue Enhancement </li>
                                <li>Extractive Industry Revenue Enhancement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
     );
}
 
export default Service;