import React from 'react';
import { Link , useLocation } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const footerLinks = [
  { name: "About Us", path: "/about" },
  { name: "Download Brochure", action: "modal" },
  { name: "Vidya College ERP", path: "/vidya-university" },
  { name: "Blogs", path: "/blog" },
  { name: "Vidya LMS", path: "/vidya-lms" },
  { name: "Contact Us", path: "/contact" },
  { name: "EasyCheck", path: "/easy-check" },
  { name: "Demo", path: "/our-demo" },
  { name: "Vidya HR", path: "/vidya-hr" },
  { name: "School ERP", path: "/vidya-school" },
  { name: "Vidya Desk", path: "/vidya-desk" },
  { name: "Online Exams", path: "/easy-pariksha" },
  { name: "Refer & Earn", path: "/referral-partner" },
  { name: "Pricing", path: "/" }
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="w-full bg-[#eaeaea] pt-7 sm:pt-10 font-sans">
      
      {/* --- Main Footer Content --- */}
      <div className="max-w-7xl mx-auto  px-6 pb-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        
        {/* Column 1 */}
        <div className="flex flex-col items-start space-y-6">
          
          {/* Logo Text */}
        <img src="/vidyalogo.png" alt="Eduplus Campus" className="sm:h-13 h-11  object-contain" />
          
          <p className="text-gray-700 text-[17px] leading-relaxed max-w-sm">
            <span className="font-bold text-black">Address</span> – Vidya ERP Solutions, Pune, Maharashtra, India
          </p>
          
          <p className="text-gray-600 text-[17px] leading-relaxed max-w-sm">
            Vidya ERP provides smart, scalable, and user-friendly digital solutions for schools, colleges, and universities to streamline operations and enhance learning outcomes.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#2F2FB2] text-[#2F2FB2] hover:bg-[#2F2FB2] hover:text-white transition-all duration-300">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <h3 className="text-black text-xl font-semibold mb-2">Quick Links</h3>
          <div className="w-full h-[1px] bg-gray-300 mb-8"></div>
          
<div className="grid grid-cols-1 gap-x-4 min-[400px]:grid-cols-2 gap-y-4">
{footerLinks.map((item, index) =>
  item.action === "modal" ? (
    <a
      key={index}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event("openBrochureModal"));
      }}
      className="flex items-center gap-2 text-gray-800 hover:text-[#2F2FB2]"
    >
      <FaChevronRight className="text-[11px]" />
      {item.name}
    </a>
  ) : (
    <Link
      key={index}
      to={item.path}
      className="flex items-center gap-2 text-gray-800 hover:text-[#2F2FB2]"
    >
      <FaChevronRight className="text-[11px]" />
      {item.name}
    </Link>
  )
)}
</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <h3 className="text-black text-xl font-semibold mb-2">Get in Touch</h3>
          <div className="w-full h-[1px] bg-gray-300 mb-8 relative">
           
          </div>

          <div className="space-y-6">
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#2F2FB2] mt-1" />
              <p className="text-gray-700 text-[17px]">
                Pune, Maharashtra, India
              </p>
            </div>

            <div className="space-y-3">
              {[
                { name: "Sales", num: "+91 9000000001" },
                { name: "Support", num: "+91 9000000002" },
                { name: "Enquiry", num: "+91 9000000003" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center text-[#2F2FB2]">
                    <FaPhoneAlt size={14} />
                    <FaChevronRight className="text-[8px] ml-1 text-black" />
                  </div>
                  <p className="text-gray-700 text-[17px] hover:text-[#2F2FB2] cursor-pointer font-medium">
                    {contact.name} {contact.num}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center text-[#2F2FB2]">
                <FaEnvelope size={14} />
                <FaChevronRight className="text-[8px] ml-1 text-black" />
              </div>
              <a href="#" className="text-gray-700 hover:text-[#2F2FB2] text-[17px]">
                support@vidyaerp.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="w-full bg-[#1a1a1a] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-[#d1d1d1] font-medium text-[15px] text-center md:text-left">
            © <span className="font-bold">Copyright Vidya ERP 2026.</span> All Rights Reserved.
          </p>
          


<div className="flex flex-wrap justify-center font-medium gap-x-3 gap-y-1 text-gray-400 text-[15px]">
  {[
    { name: "App Policy", path: "/app-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Use", path: "/terms-of-use" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Copyright Policy", path: "/copyright-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ].map((item, i) => {
    
    const isActive = location.pathname === item.path;

    return (
      <React.Fragment key={i}>
        <Link
          to={item.path}
          className={`transition-colors ${
            isActive ? "text-gray-200" : "text-gray-400 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
        {i !== 5 && <span>|</span>}
      </React.Fragment>
    );
  })}
</div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;