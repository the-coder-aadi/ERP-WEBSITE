import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#eaeaea] pt-7 sm:pt-10 font-sans">
      
      {/* --- Main Footer Content --- */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        
        {/* Column 1 */}
        <div className="flex flex-col items-start space-y-6">
          
          {/* Logo Text */}
        <img src="vidyalogo.png" alt="Eduplus Campus" className="sm:h-13 h-11  object-contain" />
          
          <p className="text-gray-700 text-[14px] leading-relaxed max-w-sm">
            <span className="font-bold text-black">Address</span> – Vidya ERP Solutions, Pune, Maharashtra, India
          </p>
          
          <p className="text-gray-600 text-[14px] leading-relaxed max-w-sm">
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
          <h3 className="text-black text-lg font-semibold mb-2">Quick Links</h3>
          <div className="w-full h-[1px] bg-gray-300 mb-8"></div>
          
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-y-4">
            {[
              "About Us", "Download Brochure", "Vidya College ERP", "Blogs", 
              "Learning Management", "Contact Us", "Assessment Tools", "Request Demo", 
              "Accreditation System", "Certificates", "School ERP", "Product Videos", 
              "Online Exams", "Sitemap", "Pricing"
            ].map((link, index) => (
              <a key={index} href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#2F2FB2] transition-colors text-[14px] group">
                <FaChevronRight className="text-[10px] text-black group-hover:text-[#2F2FB2]" />
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <h3 className="text-black text-lg font-semibold mb-2">Get in Touch</h3>
          <div className="w-full h-[1px] bg-gray-300 mb-8 relative">
           
          </div>

          <div className="space-y-6">
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#2F2FB2] mt-1" />
              <p className="text-gray-700 text-[14px]">
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
                  <p className="text-gray-700 text-[14px] hover:text-[#2F2FB2] cursor-pointer font-medium">
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
              <a href="#" className="text-gray-700 hover:text-[#2F2FB2] text-[14px]">
                support@vidyaerp.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="w-full bg-[#1a1a1a] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-white text-[13px] text-center md:text-left">
            © <span className="font-bold">Copyright Vidya ERP 2026.</span> All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-400 text-[13px]">
            {["App Policy", "Privacy Policy", "Terms of Use", "Terms & Conditions", "Copyright Policy", "Disclaimer"].map((item, i) => (
              <React.Fragment key={i}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
                {i !== 5 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;