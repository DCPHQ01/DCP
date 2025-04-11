import { AiOutlineAreaChart } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Project = () => {
    return (
        <section className="section-padding" id="portfolio-area">
            <div className="container-fluid">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 flex justify-center ">
                    <div className="page-titles text-center w-2xl h-[200px] p-2">
                        <h2 className="title font-bold text-3xl p-3">Project Portfolio</h2>
                        <p className="">
                            In supporting economic development in Nigeria, DCP in collaboration with its international partners,
                            offers purpose-built and solution-focused projects for its clients. These projects are uniquely
                            developed and designed with a bi-focal vision of both the present and the future. Some of these
                            customised projects and programmes are:
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                <div className="feature-box wow fadeInUp p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all" data-wow-delay="0.2s">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                            <BsBank2 size={30} color="red" />
                        </div>
                        <h3 className="text-lg font-bold text-left">Property Tax Solutions</h3>
                    </div>
                    <p className="text-justify text-sm">
                        Prudent assessment, collection, and accounting for property tax pose significant challenges to both
                        the Tax Authorities and the Taxable Entities, especially in developing countries. DCP delivers
                        end-to-end solutions to its clients for resolving these difficulties.
                    </p>
                </div>

                <div className="feature-box wow fadeInUp p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all" data-wow-delay="0.4s">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                            <AiOutlineAreaChart size={40} color="red" />
                        </div>
                        <h3 className="text-lg font-bold text-left">Customs Revenue Enhancement Project (CREP)</h3>
                    </div>
                    <p className="text-justify text-sm">
                        Continuous performance improvement in the collection of customs revenue is one of the major
                        sources of funding government activities around the world. DCP provides comprehensive Technical
                        Assistance and Capacity Support for Customs Revenue Enhancement.
                    </p>
                </div>

                <div className="feature-box wow fadeInUp p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all" data-wow-delay="0.6s">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                            <FaChartBar size={40} color="red" />
                        </div>
                        <h3 className="text-lg font-bold text-left">Sustainable Revenue Enhancement Programme (c)</h3>
                    </div>
                    <p className="text-justify text-sm">
                        This project is specifically developed and designed to support Governments at all levels and tiers
                        (National, Sub-national, Local Councils, Municipalities, Tax Authorities, Revenue Generating
                        Agencies or Entities, etc.) to enhance their Internally Generated Revenue (IGR) Portfolios.
                    </p>
                </div>

                <div className="feature-box wow fadeInUp p-4 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all" data-wow-delay="1.2s">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                            <IoIosSettings size={40} color="red" />
                        </div>
                        <h3 className="text-lg font-bold text-left">Extractive Industry Revenue Enhancement Project (EIREP)</h3>
                    </div>
                    <p className="text-justify text-sm">
                        Countries depending on extractive revenues—especially oil and gas, solid minerals, and mining—are
                        faced with the common challenges of revenue loss arising from both visible and non-visible causes.
                        The EIREP is a tool designed to help the extractive sector players/producers manage these recurrent
                        challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Project;
