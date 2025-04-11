import { Link } from "react-router";
import { useState } from "react";

const sec4H3 = "sm:text-2xl text-xl mb-3 sm:mb-8 font-semibold";
const sec4p = "sm:text-xl text-base";
const paddingSec4 = "sm:px-10 px-10 sm:py-10 py-6 transition-transform duration-300 hover:rotate-[2deg] hover:-translate-y-3 bg-gray-100 rounded-3xl shadow-md hover:text-white hover:bg-black/50 hover:shadow-2xl";
const inputStyle = "border-b active:outline-none"


const Home = () => {

    const [activeTab, setActiveTab] = useState('our_mission');

    return ( 
        <>
        <div className="home-container">
            {/* section 1 of home page */}
            <section className="header relative z-0 px-8 sm:px-30 h-screen flex items-center" id="home-area">
                <div className="header-img absolute top-0 left-0 right-0 bottom-0"></div>
                <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-4"></div>
                <div className="header-text z-10 flex flex-col gap-6">
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
            <section className="section2 sm:px-30 px-8 py-12 sm:py-24" id="about-area">
                <div className="container mx-auto">
                    <div className="flex md:flex-row flex-col gap-4 justify-between">
                        <div className="w-full md:w-5/12">
                            <div className="page-title flex flex-col gap-6">
                                <h2 className="title sm:text-4xl text-2xl font-bold animate__animated animate__fadeInUp">
                                    Quick & Tailored Powerful Business Solutions
                                </h2>
                                <div className="animate__animated animate__fadeInUp text-base sm:text-2xl" data-wow-delay="0.5s">
                                    <p><b>Discovery Cycle Professionals</b> is a global network of experienced consultants, academics, and technocrats assembled to provide world-class knowledge-based services globally. DCP has diverse experience across different professional fields and offers a wide-range of multi-disciplinary professional services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:ml-4 flex items-center justify-center">
                            <img src="images/about_r5_c2.png" alt="dcp quote about their solutions"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3  */}

            <section className="section-padding sm:px-30 px-8 py-8">
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
                            <h3 className="uppercase text-xl font-bold">
                                “To be the biggest consulting company in Africa anchored on value creation, integrity and service excellence”.
                            </h3>
                            </div>
                        )}
                        {activeTab === 'our_vission' && (
                            <div id="our_vission" className="tab-pane">
                            <h3 className="uppercase text-xl font-bold">
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

                <section className="section-padding p-8 sm:p-30" id="csr">
                    <div className="container mx-auto">
                        <div className="w-full sm:w-2/3 md:w-1/2 mx-auto p-8">
                            <div className="page-title text-center">
                                <h2 className='sm:text-3xl text-xl mb-3 sm:mb-8 font-bold'>Corporate Social Responsibility (CSR)</h2>
                                <p className="sm:text-lg text-base">DCP has a strong commitment to CSR projects. Our current schemes are:</p>
                            </div>
                        </div>

                        <div className="w-full text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className={`single-process ${paddingSec4} feature-box  animate__animated animate__fadeInUp`} data-wow-delay="0.4s">
                            <div className="process-icon text-4xl">
                            <i className="icofont-users-alt-1"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>NYSC</h3>
                            <p className={sec4p}>
                                Discovery Empowerment Scheme for National Youth Service Corps (NYSC): This is a free Capacity Building and Career Guidance support for serving NYSC members. Since its inception, over 900 Corps members have benefited from this scheme in the last three (3) years.
                            </p>
                        </div>

                        <div className={`single-process ${paddingSec4} feature-box  animate__animated animate__fadeInUp`} data-wow-delay="0.6s">
                            <div className="process-icon text-4xl">
                            <i className="icofont-brainstorming"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>DCP-Thinking and Learning Lab</h3>
                            <p className={sec4p}>
                            The DCP-Thinking and Learning Lab is a leadership and innovation platform that brings together young thought leaders and change agents, through a volunteering route, to co-create ideas and drive transformative business processes for organizational, national, and global growth.
                            </p>
                        </div>

                        <div className={`single-process ${paddingSec4} feature-box  animate__animated animate__fadeInUp`} data-wow-delay="0.8s">
                            <div className="process-icon text-4xl">
                            <i className="icofont-settings-alt"></i>
                            </div>
                            <h3 className={`${sec4H3}`}>Internship</h3>
                            <p className={sec4p}>
                            The DCP Interns program is a way to get to know how corporate organizations function as a team. It will also help you decide if your potential career is right for you. It gives you day-to-day involvement in actual projects, selected to match your interests and abilities.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>

                    {/* contact */}

                    <section className="sm:px-30 px-8 sm:py-12 py-6 flex justify-center text-black">
                        <div className="sm:px-10 px-10 sm:py-10 py-6 w-full sm:w-[60%] flex flex-col items-center bg-gray-100 rounded-3xl shadow-xl">
                        <div className="contact text-4xl mb-16 font-bold">Contact Us</div>
                        <form action="/" method="post" className="flex flex-col w-full gap-6 sm:gap-16">
                            <div className="inp-group1 flex sm:flex-row flex-col gap-6 w-full">
                                <input placeholder="Full Name" type="text" name="name" id="full-name" className={`w-full outline-0 ${inputStyle}`} required/>
                                <input placeholder="Phone Number" type="tel" name="phone" id="phone" className={`w-full outline-0 ${inputStyle}`} required/>
                            </div>
                            <div className="inp-group2 flex gap-6 sm:flex-row flex-col w-full">
                                <input placeholder="Email" type="email" name="email" id="email" className={`w-full outline-0 ${inputStyle}`} required/>
                                <input placeholder="Subject (max char 70)" type="text" name="subject" id="subject" className={`w-full outline-0 ${inputStyle}`} maxLength={50} required/>
                            </div>
                            <div className="inp-group3 flex">
                                <textarea name="message" id="message" className="w-full resize-none outline-0 h" placeholder="What would you like to tell us..." required></textarea>
                            </div>
                            <input type="submit" value="Send" className="cursor-pointer hover:bg-red-600 w-auto self-start active:translate-y-2 px-4 sm:px-6 py-2 bg-red-500 rounded-3xl" />
                        </form>
                        </div>
                    </section>


        </div>
            
        </>
     );
}
 
export default Home;