import { Link } from "react-router";
import { useState, useRef } from "react";
import { useInView } from "motion/react";
//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ImageMarquee from "../components/ImageMarquee";
import GalleryMarquee from "../components/GalleryMarquee";
import Button from "../components/Button";
import CardCarousel from "../components/CardCarousel";


const sec4H3 = "sm:text-2xl text-xl mb-3 sm:mb-8 font-semibold";
const sec4p = "sm:text-xl text-base";
const paddingSec4 = "px-10 sm:py-10 py-6 transition-transform duration-300 hover:rotate-[2deg] hover:-translate-y-3 bg-gray-100 rounded-3xl shadow-md hover:text-white hover:bg-black/50 hover:shadow-2xl";

const cardcarouselVariants = {
    hidden:{
        x:"-700px"
    },
    final:{
        x:"0px",
        transition:{
            type:"spring",
            delay:0.5,
            duration:1,
            stiffness:100,
        }
    }

}
const ourMissionVariants = {
    hidden:{
        opacity:0
    },
    final:{
        opacity:1,
        transition:{
            duration:1,
            delay:0.8,
            stiffness:100,
        }
    },
    shown:{
        opacity:1,
        transition:{
            duration:1,
            delay:0.3,
            stiffness:100,
        }
    }

}


const Home = () => {
    const cardcarousel = useRef(null)
    const cardCarouselView = useInView(cardcarousel)
    const ourMission = useRef(null)
    const ourMissionView = useInView(ourMission)

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
                <div className="header-text px-8 sm:px-30 z-10 flex flex-col gap-6 mt-40">
                    <h2 className="header-text text-white text-2xl md:text-5xl font-bold">Driving Innovation Through Creative Business Solutions</h2>
                    <q className="md:text-2xl text-base text-white">We craft tailored strategies that align with your vision, turning challenges into opportunities and ideas into global impact.</q>
                    <div className="wow fadeup" data-wow-delay="0.7s">
                        {/* <Button text="Free Consult" link="/contact"/> */}

                        <Link to="/contact" >
                            <button className="px-6 py-4 rounded-full font-medium 
                                transition-all duration-150 shadow-md
                                hover:-translate-y-1 active:translate-y-1
                                cursor-pointer text-white text-2xl bg-red-500 hover:bg-red-600"
                                >
                                    Consultation
                            </button>
                        </Link>
                    </div>          
                </div>
            </section>

            {/* section 2 */}
            <section className="section2 my-5 sm:py-15" id="about-area">
                <div className="sec2-container sm:w-[80%] w-[90%] mx-auto">
                    <div className="flex lg:flex-row flex-col gap-16 lg:gap-4 justify-between items-center">
                        <motion.div
                        ref={cardCarouselView}
                        variants={cardcarouselVariants}
                        initial="hidden"
                        whileInView="final"
                        className="w-full md:w-[90%]"
                        >
                            <div className="flex flex-col gap-6">
                                <h2 className="title sm:text-3xl text-2xl font-bold">
                                    Agile, Tailored & Impact-Driven Business Solutions
                                </h2>
                                <div className=" text-base sm:text-xl" data-wow-delay="0.5s">
                                    <p>At <b className="font-bold">Discovery Circle Practitioners (DCP)</b>, we are a global network of seasoned consultants, thought leaders, and industry experts dedicated to delivering world-class, knowledge-driven services. With cross-sector expertise and a deep understanding of diverse industries, we offer agile, multi-disciplinary solutions designed to solve complex challenges and drive sustainable growth.</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full md:ml-4 flex items-center lg:justify-end justify-center">
                            <CardCarousel />
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3  */}
            <motion.section
            ref={ourMissionView}
            variants={ourMissionVariants}
            initial="hidden"
            whileInView="final"
            className="section-padding sm:px-30 px-8 my-10"
            >
                <div className="sec3-container mx-auto bg-gray-100/50 shadow-2xl sm:py-8 sm:p-12 backdrop-blur-md sm:rounded-3xl rounded-t-2xl sm:overflow-auto overflow-hidden">
                    <div className="flex flex-col sm:gap-2 gap-8 sm:flex-row ">
                    <div className="w-full sm:w-1/2">
                        <div className="video-box">
                        <img src="images/DCP skyscrapers.jpg" alt="" />
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-5/12 md:ml-4 p-8">
                        <div className=" mb-8 sm:block flex justify-center ">
                        <div className="tabs-list sm:text-2xl text-lg font-bold flex">
                            <button
                            className={`border-b px-3 cursor-pointer ${activeTab === 'our_mission' ? 'font-bold text-red-500 border-red-500 py-3' : 'border-gray-400 py-3'}`}
                            onClick={() => setActiveTab('our_mission')}
                            >
                            Our Mission
                            </button>
                            <button
                            className={`border-b pl-10 pr-3 cursor-pointer ${activeTab === 'our_vission' ? 'font-bold text-red-500 border-red-500 py-3' : 'border-gray-400 py-3'}`}
                            onClick={() => setActiveTab('our_vission')}
                            >
                            Our Vision
                            </button>
                        </div>
                        </div>
                        <div className="tab-content">
                        {activeTab === 'our_vission' && (
                            <motion.div
                            variants={ourMissionVariants}
                            initial="hidden"
                            animate="shown"
                            id="our_vission" className="tab-pane"
                            >
                            <h3 className="uppercase text-xl text-justify font-semibold">
                                “To be the biggest consulting company in Africa anchored on value creation, integrity and service excellence”.
                            </h3>
                            </motion.div>
                        )}
                        {activeTab === 'our_mission' && (
                            <motion.div
                            variants={ourMissionVariants}
                            initial="hidden"
                            animate="shown"
                            id="our_mission" className="tab-pane">
                            <h3 className="uppercase text-xl text-justify  font-semibold">
                                “Creating, innovating and investing in exceptional solutions for clients and providing great value-addition for all stakeholders”.
                            </h3>
                            </motion.div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
            </motion.section>

            {/* section4 */}
            <section className="section-padding px-8 my-12 sm:px-30" id="csr">
                <div className="sec4-container mx-auto">
                    <div className="w-full sm:w-2/3 md:w-1/2 mx-auto p-8">
                        <div className="page-title text-center">
                            <h2 className='sm:text-3xl text-2xl mb-3 sm:mb-8 font-bold'>Corporate Social Responsibility (CSR)</h2>
                            <p className="sm:text-lg text-base">DCP has a strong commitment to CSR projects. Our current schemes are:</p>
                        </div>
                    </div>

                    <div className="w-full text-center justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 relative">
                        {/* First Card */}
                        <div className={`single-process ${paddingSec4} animate__animated animate__fadeInUp`} data-wow-delay="0.4s">
                            <div className="process-icon text-2xl">
                            <i className="icofont-users-alt-1"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>DCP Leadership, Entrepreneurship & Advancement Program (DCP LEAP)</h3>
                            <p className={`${sec4p} text-justify`}>
                                As part of our CSR mandate, DCP is committed to fostering human capital development through DCP LEAP—a structured, hands-on training program designed for students (SIWES), recent graduates, serving corps members, and emerging leaders. The initiative delivers practical skills in entrepreneurship, financial literacy, digital proficiency, technical know-how, and workplace readiness. Participants of the DCP LEAP Program gain real-world exposure and experiential learning that empower them to thrive in their careers and contribute meaningfully to both personal advancement and national development.
                            </p>
                        </div>

                        {/* Second Card */}
                        <div className={`single-process ${paddingSec4} animate__animated animate__fadeInUp`} data-wow-delay="0.6s">
                            <div className="process-icon text-4xl">
                            <i className="icofont-brainstorming"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>Pro-Bono Technical Asset Advisory Initiatives</h3>
                            <p className={`${sec4p} text-justify`}>
                                At DCP, our pro bono Technical Asset Advisory Initiative is a Corporate Social Responsibility program designed to enhance institutional efficiency and resilience across public and private sectors. Through expert-led diagnostics, we identify operational risks, assess infrastructure reliability, and align asset performance with broader national and organizational development priorities. This initiative plays a key role in strengthening public service delivery, improving resource utilization, and promoting sustainable development across sectors.
                            </p>
                        </div>

                        {/* Third Card */}
                        <div className="sm:col-span-2 flex w-full sm:w-[50%]">
                            <div className={`single-process ${paddingSec4} animate__animated animate__fadeInUp`} data-wow-delay="0.8s">
                            <div className="process-icon text-4xl">
                                <i className="icofont-settings-alt"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>DCP Thinking & Learning Lab</h3>
                            <p className={`${sec4p} text-justify`}>
                                Our flagship CSR platform, the DCP Thinking & Learning Lab, brings together emerging leaders and innovators to co-create solutions for real-world challenges. Through structured volunteering pathways, participants are immersed in experiences that foster creative thinking, strategic problem-solving, and sustainable innovation. The Lab has delivered measurable impact by driving process improvements in the public sector and enabling digital transformation for local businesses, all while nurturing the leadership potential and professional growth of its contributors.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CLIENTS/NOTABLE PROJECTS */}

            <section className="mt-5 mb-7 w-full">
                <div className="w-full">
                    <div className="w-full sm:w-2/3 mx-auto text-center">
                        <h1 className="sm:text-3xl text-xl mb-3 sm:mb-8 font-bold">
                            Notable Clients/Partners
                        </h1>
                    </div>
                    <ImageMarquee />
                </div>
            </section>


            {/* section 5 management */}
            <section className="management mt-20 mb-7 flex flex-col items-center">
                <h2 className="sm:text-3xl text-2xl font-bold mb-5">Management Team</h2>

                <div className="management-container py-5 flex sm:justify-around sm:flex-row flex-col items-center md:gap-16 gap-4 w-[90%] sm:w-[80%]">
                    
                    {/*  Profile Image */}
                    <div className="bg-gradient-to-tr from-red-500 via-pink-500 to-yellow-500 p-1 rounded-full">
                    <div className="bg-white p-1 rounded-full">
                    <div className="gp-container bg-white w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg">
                    <img
                        src="../../images/management/gceo.jpg"
                        className="object-cover w-full h-full block"
                        alt="CEO's image"
                    />
                    </div>
                    </div>
                    </div>

                    {/*  Name and Position */}
                    <div className="gp-description-group flex flex-col items-center sm:items-start gap-4 sm:w-[50%] w-full justify-center">
                    <div>
                        <h3 className="text-2xl font-semibold">Dr. I.B Gashinbaki</h3>
                        <p className="text-lg text-gray-600">Founder & Group Chief Executive Officer</p>
                    </div>
                    <div className="sm:self-start mt-4">
                        <Button text="View Management Team" link="/management" />
                    </div>
                    </div>
                </div>
            </section>


            {/*Section 6 Gallery */}

            <section className="mt-15 mb-15 w-full">
                <div className="w-full">
                    <div className="w-full sm:w-2/3 mx-auto text-center">
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