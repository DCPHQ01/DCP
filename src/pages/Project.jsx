const Project = () => {
    return (
        <section className="section-padding" id="portfolio-area">
            {/* 🌟 Main Title */}
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="title font-bold text-3xl mb-4">Project Portfolio</h2>
                <p className="max-w-3xl mx-auto">
                    DCP collaborates with international partners to drive sustainable economic development in Nigeria through purpose-driven, solution-focused projects. Each initiative is meticulously designed with a forward-thinking approach, addressing both immediate needs and long-term growth, while leveraging our expertise to create lasting impact for our clients and communities.
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
                                <img src="../../images/marqueepics/efcc.jpg" alt="EFCC" className="w-50 h-20 object-contain" />
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
                                <img src="../../images/marqueepics/ksgn.jpg" alt="KSGN" className="w-50 h-20 object-contain" />
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
                                <img src="../../images/marqueepics/ns.jpg" alt="Niger State" className="w-50 h-20 object-contain" />
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
                <h3 className="text-2xl font-semibold mb-6 text-center">Tax, Audit and Risk Advisory Projects</h3>
                <div className="flex justify-between sm:flex-row flex-col gap-4">
                    {/* Card 4 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/cac.jpg" alt="Corporate Affairs Commission" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Corporate Affairs Commission (CAC)</h4>
                        </div>
                        <p className="text-justify text-red-700 text-sm ">                             
                            Revenue Management: Technical Assistance and Capacity Support on Internally Generated Revenue through the enhancement of “Annual Returns Compliance” and “Registration of Companies”. N50billion IGR projection during the first phase of implementation in selected pilot states.      
                        </p>
                    </div>
        
                    {/* Placeholder Card 5 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/bsn.jpg" alt="Bauchi State Nigeria" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Bauchi State Nigeria</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Bond Project Monitoring Consultancy: PMC to the Joint Trustees on the N30billion Bond Programme of Bauchi State (Under the N15billion 15.5% series Fixed Rate Issue)
                        </p>
                    </div>
            
                    {/* Placeholder Card 6 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/kano.jpeg" alt="Kano State Government" className="w-50 h-20 object-contain hover:bg-transparent" />
                            <h4 className="text-lg font-bold">Kano State Government</h4>
                        </div>
                        <p className="text-justify text-sm">
                            DCP Technical Support to MECA in partnership with the Government of Kano State: Program design for Joint Management of Tractors with All Farmers Association (AFAN) Kano Chapter supported by Kano State Government
                        </p>
                    </div>
                </div>
            </div>
        
            {/* 🔹 Group 3 */}
            <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold mb-6 text-center">Technology and Innovation Projects</h3>
                <div className="flex justify-between sm:flex-row flex-col gap-4">
                    {/* Placeholder Card 7 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/aicl.jpg" alt="Abuja Investement Company Limited" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Abuja Investement Company Limited</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Provided comprehensive technology advisory services to Abuja Investment Company Limited, delivering a full-scale ICT infrastructure assessment and strategic recommendations for optimization. Our engagement included the deployment of scalable IT systems, implementation of cybersecurity and risk management frameworks, and the introduction of innovative digital tools to enhance operational efficiency and data integrity across the organization.
                        </p>
                    </div>
            
                    {/* Placeholder Card 8 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/amml.png" alt="AMML Microfinance Bank" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">AMML Microfinance Bank</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Offered end-to-end technology consulting services aimed at strengthening their digital foundation. This included an in-depth evaluation of their ICT infrastructure, deployment of secure and efficient IT systems, and the implementation of cybersecurity best practices. Our solutions empowered the bank to improve service delivery, enhance data protection, and align its technology ecosystem with industry regulatory standards.
                        </p>
                    </div>
            
                    {/* Placeholder Card 9 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/nipost.jpg" alt="NIPOST and Universal Postal Union" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">NIPOST and Universal Postal Union (UPU)</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Nationwide ICT Deployment: Deployment of the Universal Postal Union (UPU), Switzerland - International Financial Systems (IFS) across over 3600 post offices in Nigeria as a payment and collection platform for the sub- national Government. A partnership project of NIPOST & UPU.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔹 Group 4 */}
            <div className="mb-12 px-4">
                <h3 className="text-2xl font-semibold mb-6 text-center">Corporate Advisory Division Projects</h3>
                <div className="flex justify-between sm:flex-row flex-col gap-4">
                    {/* Placeholder Card 10 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/osiwa.jpeg" alt="Open Society Initiative for West Africa" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Open Society Initiative for West Africa (OSIWA)</h4>
                        </div>
                        <p className="text-justify text-sm">                             
                            The Education Support Programme of the Open Society Foundations (ESP): Evaluation of the ESP/OSIWA Project on Sustainable Livelihoods for War-Affected Youth in Liberia.      
                        </p>
                    </div>
            
                    {/* Placeholder Card 11 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/amml.png" alt="AMML Microfinance Bank" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">AMML Microfinance Bank</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Setup of AMML Microfinance Bank (MFB): Total setup from acquisition of relevant licenses from the CBN, MIS, Recruitment, HR Management, total network infrastructure and statutory integration with relevant authorities in accordance with CBN guidelines.
                        </p>
                    </div>
            
                    {/* Placeholder Card 12 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/rep.png" alt="Renewable Energy Programme" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Renewable Energy Programme</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Development Partner on the Rural Women Energy Security (RUWES) programme in Nigeria: Developed and managed the framework for the participation of Market Women (through the Market Women Association of Nigeria) in the Federal Ministry of Environment - National Renewable Energy Office’s Rural Women Energy Security Project – RUWES with BOI/UNDP’s Access to Renewable Energy (AtRE) Programme as major stakeholders.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🔹 Group 5 */}
            <div className="mb-12 px-4">
  <h3 className="text-2xl font-semibold mb-6 text-center">
    Project Management Consulting Projects
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Card 1 */}
    <div className="feature-box w-full p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <img src="../../images/marqueepics/ksgn.jpg" alt="Katsina State Government" className="w-50 h-20 object-contain" />
        <h4 className="text-lg font-bold">Katsina State Government</h4>
      </div>
      <p className="text-justify text-sm">
        We delivered the quarterly utilization report on the ₦22.1 billion tranche of the ₦55 billion, seven-year, 15% fixed-rate Development Sukuk for Katsina State via Minaret Sukuk Company Limited—detailing rigorous due diligence and transparent deployment of proceeds across road infrastructure, healthcare, agriculture, and education projects; outlining the private-placement structure (unregistered by the SEC but noted on the FMDQ Private Markets portal for visibility); and verifying the ISPO-secured monthly deductions from internally generated revenues into a trustee-managed sinking fund for timely interest and principal redemption.
      </p>
    </div>

    {/* Card 2 */}
    <div className="feature-box w-full p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <img src="../../images/marqueepics/asgn.jpg" alt="Adamawa State Government" className="w-50 h-20 object-contain" />
        <h4 className="text-lg font-bold">Adamawa State Government</h4>
      </div>
      <p className="text-justify text-sm">
        We delivered the quarterly utilization report on the ₦20 billion tranche of the ₦100 billion, seven-year, 15% fixed-rate Development Bond Issuance Programme for Adamawa State via ADAS Programme Limited—outlining rigorous due-diligence processes and transparent deployment of proceeds toward priority infrastructural projects and outstanding obligations designed to boost internally generated revenues and socio-economic development; detailing the private-company bond structure registered under the Nigeria Debt Management Agency Law 2011; and establishing a clear quarterly reporting framework through 2028 to ensure accountability, compliance, and optimal capital utilization.
      </p>
    </div>

    {/* Card 3 */}
    <div className="feature-box w-full p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <img src="../../images/marqueepics/bsn.jpg" alt="Bauchi State Government" className="w-50 h-20 object-contain" />
        <h4 className="text-lg font-bold">Bauchi State Government</h4>
      </div>
      <p className="text-justify text-sm">
        Delivering quarterly utilization report on the Series 1 ₦40,975,000,000.00, 25% fixed-rate bond under the ₦100,000,000,000.00, 10-year Private Bond Issuance Programme for Bauchi State Government—facilitated through a Senior Guaranteed Bond SPV—detailing rigorous due diligence and transparent deployment of proceeds toward the construction of new roads and rehabilitation of existing ones, clarifying that as a Private Company Bond the issuance is not SEC-registered, and establishing a robust quarterly reporting cadence through the 2034 maturity to ensure accountability, compliance, and effective management of infrastructure financing.
      </p>
    </div>

    {/* Card 4 */}
    <div className="feature-box w-full p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <img src="../../images/marqueepics/osg.jpg" alt="Ogun State Government" className="w-50 h-20 object-contain" />
        <h4 className="text-lg font-bold">Ogun State Government</h4>
      </div>
      <p className="text-justify text-sm">
        Detailing rigorous due-diligence processes and transparent deployment of proceeds toward priority road infrastructure, healthcare, agriculture, education projects, and outstanding obligations to boost internally generated revenues and socio-economic development; clarifying the private-company Sukuk structure (unregistered by the SEC but noted on FMDQ) and private-company bond structures registered under the Nigeria Debt Management Agency Law 2011; verifying ISPO-secured monthly deductions from state revenues into trustee-managed sinking funds; and establishing clear quarterly reporting frameworks through their respective maturities (2028 for Ogun) to ensure accountability, compliance, and optimal capital utilization.
      </p>
    </div>
  </div>
</div>

        </section>      
    );
};

export default Project;
