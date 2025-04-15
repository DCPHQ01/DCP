import ContactForm from "../components/ContactForm";
import { LuMapPinHouse } from "react-icons/lu";
import { MdPhone } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {

    return ( 
        <>
            <div className="offices flex justify-center w-full my-12">
                <div className="office-container flex flex-col w-[90%] sm:w-[80%] gap-8 justify-between md:flex-row">
                    <div className="naija-office">
                        <h2 className="office-name text-3xl font-bold mb-8">Nigeria Country Office</h2>
                        <div className="flex flex-col gap-4">
                            <div className="address flex gap-4 font-semibold">
                                <LuMapPinHouse size="40px"/>
                                <p className="address-name text-lg font-semibold">Plot 2542 Hassan Usman Kaatsina Asokoro, Abuja, FCT.</p>
                            </div>
                            <div className="phone flex gap-4 font-semibold">
                                <MdPhone size="40px" />
                                <p className="phone-numbe text-lg font-semibold">+234-908-3333-444</p>
                            </div>
                            <div className="email flex gap-4 font-semibold">
                                <MdOutgoingMail size="40px" />
                                <p className="email-name text-lg font-semibold">info@dcp.com.ng</p>
                            </div>
                        </div>
                    </div>


                    <div className="naija-office ">
                        <h2 className="office-name text-3xl font-bold mb-8">Country Offices/Representatives</h2>
                        <div className="flex flex-col gap-4">
                        <div className="address flex gap-4 font-semibold">
                            <img src="../../images/liberia.png" className="w-[40px]" alt="liberia flag"/>
                            <p className="address-name text-lg font-semibold">Monrovia, Liberia - Registered Office</p>
                        </div>
                        <div className="phone flex gap-4 font-semibold">
                            <img src="../../images/canada.png" className="w-[40px]" alt="liberia flag"/>
                            <p className="phone-number text-lg font-semibold">Alberta,Canada - Registered Office</p>
                        </div>
                        <div className="email flex gap-4 font-semibold">
                            <img src="../../images/south-africa.png" className="w-[40px]" alt="liberia flag"/>
                            <p className="email-name text-lg font-semibold">Cape town, South Africa - Registered Office</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </>
     );
}
 
export default Contact;