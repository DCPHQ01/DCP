const Project = () => {
    return (
        <section className="section-padding px-4" id="portfolio-area">
            {/* 🌟 Main Title */}
            <div className="container mx-auto text-center mb-8 md:mb-12">
                <h2 className="title font-bold text-2xl md:text-3xl mb-3 md:mb-4">Project Portfolio</h2>
                <p className="max-w-3xl mx-auto text-sm md:text-base">
                    DCP collaborates with international partners to drive sustainable economic development in Nigeria through purpose-driven, solution-focused projects. Each initiative is meticulously designed with a forward-thinking approach, addressing both immediate needs and long-term growth, while leveraging our expertise to create lasting impact for our clients and communities.
                </p>
            </div>
        
            {/* 🔹 Group 1 */}
            <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Management Consulting and Public Administration Support Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="mb-2 md:mb-3 w-full md:w-auto">
                                <img src="../../images/marqueepics/efcc.jpg" alt="EFCC" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Economic and Financial Crimes Commission (EFCC)</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                        Technical Assistance and capacity building on Anti Corruption, Fiscal responsibility and effective leadership. Implemented for key officers across the 774 Local Government Councils of Nigeria in conjunction with the Economic and Financial Crimes Commission (EFCC).
                        </p>
                    </div>
        
                    {/* Card 2 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="mb-2 md:mb-3 w-full md:w-auto">
                                <img src="../../images/marqueepics/ksgn.jpg" alt="KSGN" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Katsina State Government Nigeria</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Katsina State Baseline Survey: Comprehensive Mapping of Revenue Optimization Opportunities and Baseline Survey of Markets, Parks, Agro and Livestock Processing Enterprises, Commodities & Trade Groups in Katsina State, Nigeria.
                        </p>
                    </div>
        
                    {/* Card 3 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="mb-2 md:mb-3 w-full md:w-auto">
                                <img src="../../images/marqueepics/ns.jpg" alt="Niger State" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Niger State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                        DCP Technical support to MECA in partnership with the Government of Niger State: Programme design for Joint Management of Tractor with the Tractors Owners & Operators Association of Nigeria (TOOAN) in Minna, supported by the Niger State Government; Tractors Refurbishment and Redeployment in Niger State.
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 2 */}
            <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Tax, Audit and Risk Advisory Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 4 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/cac.jpg" alt="Corporate Affairs Commission" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Corporate Affairs Commission (CAC)</h4>
                        </div>
                        <p className="text-justify text-red-700 text-xs md:text-sm">                             
                            Revenue Management: Technical Assistance and Capacity Support on Internally Generated Revenue through the enhancement of "Annual Returns Compliance" and "Registration of Companies". N50billion IGR projection during the first phase of implementation in selected pilot states.      
                        </p>
                    </div>
        
                    {/* Card 5 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/bsn.jpg" alt="Bauchi State Nigeria" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Bauchi State Nigeria</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Bond Project Monitoring Consultancy: PMC to the Joint Trustees on the N30billion Bond Programme of Bauchi State (Under the N15billion 15.5% series Fixed Rate Issue)
                        </p>
                    </div>
            
                    {/* Card 6 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/kano.jpeg" alt="Kano State Government" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Kano State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            DCP Technical Support to MECA in partnership with the Government of Kano State: Program design for Joint Management of Tractors with All Farmers Association (AFAN) Kano Chapter supported by Kano State Government
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 3 */}
            <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Technology and Innovation Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 7 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/aicl.jpg" alt="Abuja Investement Company Limited" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Abuja Investement Company Limited</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Provided comprehensive technology advisory services to Abuja Investment Company Limited, delivering a full-scale ICT infrastructure assessment and strategic recommendations for optimization. Our engagement included the deployment of scalable IT systems, implementation of cybersecurity and risk management frameworks, and the introduction of innovative digital tools to enhance operational efficiency and data integrity across the organization.
                        </p>
                    </div>
            
                    {/* Card 8 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/amml.png" alt="AMML Microfinance Bank" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">AMML Microfinance Bank</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Offered end-to-end technology consulting services aimed at strengthening their digital foundation. This included an in-depth evaluation of their ICT infrastructure, deployment of secure and efficient IT systems, and the implementation of cybersecurity best practices. Our solutions empowered the bank to improve service delivery, enhance data protection, and align its technology ecosystem with industry regulatory standards.
                        </p>
                    </div>
            
                    {/* Card 9 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/nipost.jpg" alt="NIPOST and Universal Postal Union" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">NIPOST and Universal Postal Union (UPU)</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Nationwide ICT Deployment: Deployment of the Universal Postal Union (UPU), Switzerland - International Financial Systems (IFS) across over 3600 post offices in Nigeria as a payment and collection platform for the sub- national Government. A partnership project of NIPOST & UPU.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔹 Group 4 */}
            <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Corporate Advisory Division Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 10 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/osiwa.jpeg" alt="Open Society Initiative for West Africa" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Open Society Initiative for West Africa (OSIWA)</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">                             
                            The Education Support Programme of the Open Society Foundations (ESP): Evaluation of the ESP/OSIWA Project on Sustainable Livelihoods for War-Affected Youth in Liberia.      
                        </p>
                    </div>
            
                    {/* Card 11 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/amml.png" alt="AMML Microfinance Bank" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">AMML Microfinance Bank</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Setup of AMML Microfinance Bank (MFB): Total setup from acquisition of relevant licenses from the CBN, MIS, Recruitment, HR Management, total network infrastructure and statutory integration with relevant authorities in accordance with CBN guidelines.
                        </p>
                    </div>
            
                    {/* Card 12 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/rep.png" alt="Renewable Energy Programme" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Renewable Energy Programme</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            Development Partner on the Rural Women Energy Security (RUWES) programme in Nigeria: Developed and managed the framework for the participation of Market Women (through the Market Women Association of Nigeria) in the Federal Ministry of Environment - National Renewable Energy Office's Rural Women Energy Security Project – RUWES with BOI/UNDP's Access to Renewable Energy (AtRE) Programme as major stakeholders.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔹 Group 5 */}
            <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
                    Project Management Consulting
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 13 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/ksgn.jpg" alt="Katsina State Government" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Katsina State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                        The team delivered a quarterly report on the ₦22.1 billion portion of Katsina State's ₦55 billion Development Sukuk, highlighting thorough due diligence, transparent fund use across key sectors, and verification of secure monthly deductions into a sinking fund to ensure timely repayment.
                        </p>
                    </div>

                    {/* Card 14 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/asgn.jpg" alt="Adamawa State Government" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Adamawa State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            DCP delivered a quarterly report on the ₦20 billion tranche of Adamawa State's ₦100 billion Development Bond, detailing due diligence, transparent use of funds for key infrastructure and obligations, and a clear reporting framework through 2028 to ensure accountability and support economic growth.
                        </p>
                    </div>

                    {/* Card 15 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/bsn.jpg" alt="Bauchi State Government" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Bauchi State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            A quarterly report was delivered on Bauchi State's ₦40.98 billion Series 1 bond under its ₦100 billion private bond programme, highlighting due diligence, transparent use of funds for road projects, and a structured reporting system through 2034 to ensure accountability and effective infrastructure financing.
                        </p>
                    </div>

                    {/* Card 16 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex flex-col md:flex-row items-start gap-3 mb-3">
                            <div className="w-full md:w-auto">
                                <img src="../../images/marqueepics/osg.jpg" alt="Ogun State Government" className="w-full md:w-50 h-20 object-contain mx-auto" />
                            </div>
                            <h4 className="text-lg font-bold">Ogun State Government</h4>
                        </div>
                        <p className="text-justify text-xs md:text-sm">
                            The report outlines due diligence and transparent fund use for key sectors and obligations, explains the legal structures of Ogun State's Sukuk and bond issuances, confirms secure monthly deductions into sinking funds, and establishes quarterly reporting through 2028 to ensure accountability and effective capital use.
                        </p>
                    </div>
                </div>
            </div>
        </section>      
    );
};

export default Project;
