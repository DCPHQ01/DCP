import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Footer = () => {
    const year = new Date().getFullYear()
    return ( 
        <>
            <div className="px-10 py-8 w-full bg-gray-700 text-white">
                <div className="footer-contents w-full sm:w-[80%] flex gap-6">

                    <div className="details flex w-[100%] sm:gap-24 gap-6">
                        <NavLink className="brand-link self-center" to="/">
                            <img src="/images/logo.png" alt="Logo" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] object-contain" />
                        </NavLink>
                        <div className="footer-nav flex md:gap-16 gap-4">
                            <div className="footer-nav-section flex flex-col gap-4">
                                <Link to="/" className="footer-nav-links cursor-pointer home"> Home</Link>
                                <Link to="/service" className="footer-nav-links cursor-pointer services">Services</Link>
                                <Link to="/project" className="footer-nav-links cursor-pointer projects">Projects</Link>
                            </div>
                            <div className="footer-nav-section2 flex flex-col gap-4">
                                <Link to="/product" className="footer-nav-links cursor-pointer products">Products</Link>
                                <Link to="/career" className="footer-nav-links cursor-pointer career">Career</Link>
                                <Link to="/contact" className="footer-nav-links cursor-pointer contact">Contact</Link>
                            </div>
                        </div>

                        <div className="footer-contact flex flex-col gap-4">
                            <div className="email flex items-center gap-2.5 "><span><MdOutlineMail size={20} /></span> <span>info@dcp.com.ng</span> </div>
                            <div className="phone flex items-center gap-2.5 "><span><MdOutlinePhoneAndroid size={20} /></span> <span>+234 (908) 2222 333</span> </div>
                        </div>

                        <div className="footer-socials flex gap-6">
                            <Link to="/" className="instagram cursor-pointer"><IoLogoInstagram size={20} /></Link>
                            <Link to="/" className="facebook cursor-pointer"><FaFacebook size={20} /></Link>
                            <Link to="/" className="x cursor-pointer"><FaXTwitter size={20} /></Link>
                        </div>
                    </div>
                </div>
                <div className="copyright-bar py-3">
                    <hr className="my-4 border border-white" />
                    <div className="copyright text-center">© {year} Discover Circle Practitioner | All Rights Reserved.</div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;