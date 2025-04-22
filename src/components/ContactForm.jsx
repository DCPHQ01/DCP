const ContactForm = () => {
const inputStyle = "border-b active:outline-none"


    return ( 
        <>
        <section className="my-12 w-full flex justify-center text-black">
                        <div className="sm:py-10 sm:w-[80%] py-6 w-[90%] flex md:flex-row flex-col gap-6 sm:gap-24 justify-between items-center">
                            <div className="sm:px-10 px-10 sm:py-10 w-full lg:w-[60%] py-6 contact-wrapper flex flex-col items-center bg-gray-100 rounded-3xl shadow-xl">
                                <div className="contact text-4xl mb-16 font-bold">Contact Us</div>
                                <form action="https://formsubmit.co/info@dcp.com.ng" method="post" className="flex flex-col w-full gap-6 sm:gap-16">
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
                                    <input type="submit" value="Send" className="cursor-pointer hover:bg-red-600 w-auto self-start active:translate-y-2 px-4 sm:px-10 sm:py-3 py-2 bg-red-500 text-white rounded-3xl" />
                                    <input type="hidden" name="_autoresponse" value="Thank you for contacting us....we will respond shortly"/>
                                    <input type="hidden" name="_next" value="http://localhost:5173/"/>
                                    <input type="hidden" name="_template" value="table"/>
                                </form>
                            </div>
                            <div className="map w-full h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] relative overflow-hidden">
                                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485228607237!2d7.515954675065832!3d9.019422891041518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d79e7b370cf%3A0x18bc3f82b684d6fa!2sDCP!5e0!3m2!1sen!2sng!4v1744629029364!5m2!1sen!2sng" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </section>
        </>
     );
}
 
export default ContactForm;