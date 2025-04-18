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
                            N0.5billion Statutory Capital & Investor Sourcing: Sourced and secured equity investor.
                        </p>
                    </div>
            
                    {/* Placeholder Card 8 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/amml.png" alt="AMML Microfinance Bank" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">AMML Microfinance Bank</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Setup of AMML Microfinance Bank (MFB): Total setup from acquisition of relevant licenses from the CBN, MIS, Recruitment, HR Management, total network infrastructure and statutory integration with relevant authorities in accordance with CBN guidelines.
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
                            Business Process & Strategy Development: Developed and deployed strategic business processes and start-up policies. Orchestrated Brand awareness and provided equity sourcing and communication management support.
                        </p>
                    </div>
            
                    {/* Placeholder Card 12 */}
                    <div className="feature-box p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../../images/marqueepics/rep.png" alt="Renewable Energy Programme" className="w-50 h-20 object-contain" />
                            <h4 className="text-lg font-bold">Renewable Energy Programme</h4>
                        </div>
                        <p className="text-justify text-sm">
                            Office of the National Coordinator, Renewable Energy Programme, Federal Ministry of Environment: Development Partner on the Rural Women Energy Security (RUWES) programme in Nigeria: Developed and managed the framework for the participation of Market Women (through the Market Women Association of Nigeria) in the Federal Ministry of Environment - National Renewable Energy Office’s Rural Women Energy Security Project – RUWES with BOI/UNDP’s Access to Renewable Energy (AtRE) Programme as major stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>      
    );
};

export default Project;
