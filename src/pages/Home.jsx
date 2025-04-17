import { Link } from "react-router";
import { useState } from "react";

import ImageMarquee from "../components/ImageMarquee";
import GalleryMarquee from "../components/GalleryMarquee";
// import Marquee from "react-fast-marquee";
import Button from "../components/Button";

const sec4H3 = "sm:text-2xl text-xl mb-3 sm:mb-8 font-semibold";
const sec4p = "sm:text-xl text-base";
const paddingSec4 = "sm:px-10 px-10 sm:py-10 py-6 transition-transform duration-300 hover:rotate-[2deg] hover:-translate-y-3 bg-gray-100 rounded-3xl shadow-md hover:text-white hover:bg-black/50 hover:shadow-2xl";


const Home = () => {

    const [activeTab, setActiveTab] = useState('our_mission');

    return ( 
        <>

        <div className="home-container">
            {/* section 1 of home page */}
            <section className="header relative z-0 h-screen flex items-center" id="home-area">
            <video autoPlay loop muted className="absolute w-full h-full object-cover z-3">
                <source src="../../videos/vecteezy_businessman-show-crm-customer-relationship-management-for_36142834.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-4"></div>
                <div className="header-text px-8 sm:px-30 z-10 flex flex-col gap-6">
                    <h2 className="header-text text-white text-2xl md:text-6xl font-bold">Developing Creative Business Solutions </h2>
                    <q className="md:text-2xl text-base text-white">Client centric approach to business solution</q>
                    <div className="wow fadeup" data-wow-delay="0.7s">
                        {/* <Button text="Free Consult" link="/contact"/> */}

                        <Link to="/contact" >
                            <button className="px-6 py-4 rounded-full font-medium 
                                transition-all duration-150 shadow-md
                                hover:-translate-y-1 active:translate-y-1
                                cursor-pointer text-white text-2xl bg-red-500 hover:bg-red-600"
                                >
                                    Free Consult
                            </button>
                        </Link>
                    </div>          
                </div>
            </section>

            {/* section 2 of home page */}
            <section className="section2 sm:px-30 px-8 my-12 sm:py-24" id="about-area">
                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col gap-16 lg:gap-4 justify-between items-center">
                        <div className="w-full md:w-[90%]">
                            <div className="page-title flex flex-col gap-6">
                                <h2 className="title sm:text-4xl text-2xl font-bold animate__animated animate__fadeInUp">
                                    Quick & Tailored Powerful Business Solutions
                                </h2>
                                <div className="animate__animated animate__fadeInUp text-base sm:text-2xl" data-wow-delay="0.5s">
                                    <p><b>Discovery Cycle Professionals</b> is a global network of experienced consultants, academics, and technocrats assembled to provide world-class knowledge-based services globally. DCP has diverse experience across different professional fields and offers a wide-range of multi-disciplinary professional services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:ml-4 flex items-center lg:justify-end justify-center">
                            <img src="images/about_r5_c2.png" alt="dcp quote about their solutions"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3  */}
            <section className="section-padding sm:px-30 px-8 my-12">
                <div className="container mx-auto bg-gray-100/50 shadow-2xl sm:py-8 sm:p-12 backdrop-blur-md sm:rounded-3xl rounded-t-2xl sm:overflow-auto overflow-hidden">
                    <div className="flex flex-col sm:gap-2 gap-8 sm:flex-row ">
                    <div className="w-full sm:w-1/2">
                        <div className="video-box">
                        <img src="images/DCP skyscrapers.jpg" alt="" />
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-5/12 md:ml-4 p-8">
                        <div className="page-title mb-8 sm:block flex justify-center ">
                        <div className="tabs-list flex">
                            <button
                            className={`border-b px-3 cursor-pointer ${activeTab === 'our_mission' ? 'font-bold text-red-500 border-red-500 py-3' : 'border-gray-400 py-3'}`}
                            onClick={() => setActiveTab('our_mission')}
                            >
                            Our Mission
                            </button>
                            <button
                            className={`border-b px-3 cursor-pointer ${activeTab === 'our_vission' ? 'font-bold text-red-500 border-red-500 py-3' : 'border-gray-400 py-3'}`}
                            onClick={() => setActiveTab('our_vission')}
                            >
                            Our Vision
                            </button>
                        </div>
                        </div>
                        <div className="tab-content">
                        {activeTab === 'our_mission' && (
                            <div id="our_mission" className="tab-pane">
                            <h3 className="uppercase text-xl text-justify font-semibold">
                                “To be the biggest consulting company in Africa anchored on value creation, integrity and service excellence”.
                            </h3>
                            </div>
                        )}
                        {activeTab === 'our_vission' && (
                            <div id="our_vission" className="tab-pane">
                            <h3 className="uppercase text-xl text-justify  font-semibold">
                                “Creating, innovating and investing in exceptional solutions for clients and providing great value-addition for all stakeholders”.
                            </h3>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* section4 */}
            <section className="section-padding px-8 my-12 sm:px-30" id="csr">
                <div className="container mx-auto">
                    <div className="w-full sm:w-2/3 md:w-1/2 mx-auto p-8">
                        <div className="page-title text-center">
                            <h2 className='sm:text-3xl text-xl mb-3 sm:mb-8 font-bold'>Corporate Social Responsibility (CSR)</h2>
                            <p className="sm:text-lg text-base">DCP has a strong commitment to CSR projects. Our current schemes are:</p>
                        </div>
                    </div>

                    <div className="w-full text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className={`single-process ${paddingSec4}  animate__animated animate__fadeInUp`} data-wow-delay="0.4s">
                        <div className="process-icon text-2xl">
                        <i className="icofont-users-alt-1"></i>
                        </div>
                        <h3 className={`${sec4H3}`}>NYSC</h3>
                        <p className={`${sec4p} text-justify`}>
                            Discovery Empowerment Scheme for National Youth Service Corps (NYSC): This is a free Capacity Building and Career Guidance support for serving NYSC members. Since its inception, over 900 Corps members have benefited from this scheme in the last three (3) years.
                        </p>
                    </div>

                    <div className={`single-process ${paddingSec4} animate__animated animate__fadeInUp`} data-wow-delay="0.6s">
                        <div className="process-icon text-4xl">
                        <i className="icofont-brainstorming"></i>
                        </div>
                        <h3 className={`${sec4H3}`}>DCP-Thinking and Learning Lab</h3>
                        <p className={`${sec4p} text-justify`}>
                        The DCP-Thinking and Learning Lab is a leadership and innovation platform that brings together young thought leaders and change agents, through a volunteering route, to co-create ideas and drive transformative business processes for organizational, national, and global growth.
                        </p>
                    </div>

                    <div className={`single-process ${paddingSec4} animate__animated animate__fadeInUp`} data-wow-delay="0.8s">
                        <div className="process-icon text-4xl">
                        <i className="icofont-settings-alt"></i>
                        </div>
                        <h3 className={`${sec4H3}`}>Internship</h3>
                        <p className={`${sec4p} text-justify`}>
                        The DCP Interns program is a way to get to know how corporate organizations function as a team. It will also help you decide if your potential career is right for you. It gives you day-to-day involvement in actual projects, selected to match your interests and abilities.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            {/*  CLIENTS/NOTABLE PROJECTS */}
            <section className="mt-5 mb-7 w-full">
                <div className="container w-full">
                    <div className="w-full sm:w-2/3 mx-auto page-title text-center">
                        <h1 className='sm:text-3xl text-xl mb-3 sm:mb-8 font-bold'>Notable Clients/Partners</h1>
                    </div>
                
                    <ImageMarquee />
    
                </div>
            </section>

            {/* section 5 management link */}
            <section className="management mt-20 mb-7 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-5">Management Team</h2>

                <div className="management-container py-5 flex justify-around md:flex-row flex-col md:gap-16 gap-4 w-[90%] sm:w-[80%]">
                    
                    {/* Profile Image */}
                    <div className="gp-container w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg">
                    <img
                        src="../../images/management/ceo.jpg"
                        className="object-cover w-full h-full"
                        alt="CEO image"
                    />
                    </div>

                    {/* Name and Position */}
                    <div className="gp-description-group flex flex-col gap-4 sm:w-[50%] w-full justify-center">
                    <div>
                        <h3 className="text-2xl font-semibold">Dr. I.B Gashinbaki</h3>
                        <p className="text-lg text-gray-600">Founder & Group Chief Executive Officer</p>
                    </div>
                    <div className="self-start mt-4">
                        <Button text="View Management Team" link="/management" />
                    </div>
                    </div>
                </div>
            </section>


            {/*Section 6 Gallery */}
            <section className="mt-15 mb-15">
                <div className="container mx-auto">
                    <div className="w-full sm:w-2/3 mx-auto page-title text-center">
                        <h1 className='sm:text-3xl text-xl mb-3 sm:mb-8 font-bold'>Gallery</h1>
                    </div>

                    <GalleryMarquee />

                </div>
            </section>
        </div>
            
        </>
    );
}
 
export default Home;