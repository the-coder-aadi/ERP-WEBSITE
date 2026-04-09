import React from 'react';
import { FaWhatsapp, FaRegCommentDots, FaEnvelope, FaPhoneAlt, FaChevronUp, FaPaperPlane } from 'react-icons/fa';
import  { useState, useEffect } from 'react';

const SideElements = () => {


const [isVisible, setIsVisible] = useState(false);

  // 1. Scroll Check Logic: Jab 300px neeche jaye tab button dikhao
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Isse smooth scroll hoga
    });
  };

  return (
    <>
    <div className="fixed right-0 top-0 h-full z-[55]  pointer-events-none">
      
      {/* 1. Download Brochure Button (Sticky Center-Right) */}
      <div className="absolute right-0 top-[15%]  pointer-events-auto">
        <button className="bg-[#FF9100] text-white font-medium py-2 px-3 max-[500px]:py-1 max-[500px]:px-2 rounded-sm shadow-lg flex items-center gap-2 [writing-mode:vertical-lr] rotate-0 hover:bg-[#e68200] transition-all duration-300">
          Download Brochure
        </button>
      </div>

      {/* 2. Floating Action Icons (Bottom-Right) */}
      <div className="absolute bottom-13 max-[500px]:right-1  right-4 flex flex-col gap-4 pointer-events-auto">
        
        {/* WhatsApp Icon */}
        <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" 
           className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="text-[28px] min-[501px]:text-[35px]" />
        </a>

        {/* Live Chat Icon */}
        <button className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#002B5B] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaRegCommentDots  className="text-[25px] min-[501px]:text-[35px]" />
        </button>

        {/* Email Icon */}
        <a href="mailto:sales@edupluscampus.com" 
           className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaEnvelope className="text-[23px] min-[501px]:text-[28px]" />
        </a>

        {/* Call Icon (Main Action) */}
    <div className="relative">
  <a 
    href="tel:+919028690536" // Yahan tum apna main number dalo
    className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#001529] text-white rounded-lg flex items-center justify-center shadow-2xl hover:bg-[#002b5b] transition-all duration-300 pointer-events-auto"
  >
    <FaPhoneAlt className="text-[23px] min-[501px]:text-[30px] -rotate-90"  />
  </a>
</div>

      </div>

      {/* 4. Scroll to Top (Optional, but usually present in such footers) */}
<div 
        className={`fixed bottom-6 left-3 sm:left-4 z-[999] transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}
      >
        <button 
          onClick={scrollToTop}
          className="w-11 h-11 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 pointer-events-auto"
          title="Go to Top"
        >
          <FaChevronUp size={20}  />
        </button>
      </div>
    </div>
{/* --- 4. BOTTOM MOBILE BUTTONS (Refined Design) --- */}
{/* Parent container ko center karne ke liye 'justify-center' add kiya gaya hai */}
<div className="fixed bottom-4 left-0 w-full px-4 flex justify-center md:hidden z-[100] pointer-events-none">
  
  {/* Inner Wrapper: width kam kar di (max-w-[300px]) aur background transparent rakha */}
  <div className="w-full sm:max-w-[320px] max-w-[230px]  flex gap-2 h-9 sm:h-12 pointer-events-auto">
    
    {/* Enquire Now Button */}
    <button className="flex-1 bg-[#002B5B] text-white rounded-xl flex items-center justify-center gap-2 font-bold text-[12px] sm:text-[13px] uppercase tracking-wider active:scale-95 transition-all shadow-lg">
      <FaPaperPlane className="text-orange-400 text-sm" />
      Enquire
    </button>

    {/* Call Now Button */}
    <a 
      href="tel:+919028690536" 
      className="flex-1 bg-[#FF9100] text-white rounded-xl flex text-[12px] items-center justify-center gap-2 font-bold sm:text-[13px] uppercase tracking-wider active:scale-95 transition-all shadow-lg"
    >
      <FaPhoneAlt className="text-sm" />
      Call Now
    </a>
  </div>
</div>
    </>
  );
};

export default SideElements;