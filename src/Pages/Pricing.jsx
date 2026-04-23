import { useState } from "react";
import QuoteModal from "../Components/QuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import SideElements from "../Components/SideElements";
import Footer from "../Components/Footer";
import {
  FaMinus,
  FaUniversity,
  FaSchool,
  FaCheckCircle,
  FaLayerGroup,
  FaArrowRight,
   FaUserEdit, FaLaptopCode, 
  FaUserFriends, FaIdCard, FaUsersCog, FaBookReader, FaHeadset, FaRegCheckCircle,FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Agar routing use kar rahe ho
import Navbar from "../Components/Navbar";

const tabs = ["University", "College", "School", "Add-on"];


const allProductsForQuote = [
  "EasyCheck", "EasyPariksha", "VidyaCRM", "EasyEnroll", 
  "VidyaHR", "VidyaLMS", "VidyaDesk", "VidyaUniversity", 
  "VidyaCollege", "VidyaSchool"
];

// Cards Data for "Add-on" Tab
const addOnProducts = [
  { 
    name: "EasyCheck", 
    subtitle: "Attendance System",
    icon: <FaRegCheckCircle />, 
    features: ["Auto-Attendance", "Evaluation Dashboard", "Real-time Reports"],
    path: "/easy-check" 
  },
  { 
    name: "EasyPariksha", 
    subtitle: "Online Examination",
    icon: <FaLaptopCode />, 
    features: ["AI Proctoring", "Secure Browser", "Instant Result Generation", "Question Bank"],
    path: "/easy-pariksha" 
  },
  { 
    name: "VidyaCRM", 
    subtitle: "Customer Relations",
    icon: <FaUserFriends />, 
    features: ["Lead Management", "Inquiry Analytics", "Campaign Tracking"],
    path: "/crm-software" 
  },
  { 
    name: "EasyEnroll", 
    subtitle: "Admission Portal",
    icon: <FaIdCard />, 
    features: ["Online Registration", "Document Verification", "Fee Payment Gateway"],
    path: "/easy-enroll" 
  },
  { 
    name: "VidyaHR", 
    subtitle: "Human Resources",
    icon: <FaUsersCog />, 
    features: ["Payroll Processing", "Leave Management", "Performance Review"],
    path: "/vidya-hr" 
  },
  { 
    name: "VidyaLMS", 
    subtitle: "Learning Management",
    icon: <FaBookReader />, 
    features: ["Course Builder", "Video Lectures", "Quiz & Assignments"],
    path: "/vidya-lms" 
  },
  { 
    name: "VidyaDesk", 
    subtitle: "Helpdesk & Support",
    icon: <FaHeadset />, 
    features: ["24/7 Ticketing System", "SLA Monitoring", "Knowledge Base"],
    path: "/vidya-desk" 
  }
];

const sections = [
  {
    title: "Core Modules",
    icon: <FaUniversity />,
    features: ["VidyaUniversity", "VidyaCollege", "VidyaSchool", "VidyaCRM", "VidyaLMS"]
  },
  {
    title: "Operations",
    icon: <FaLayerGroup />,
    features: ["EasyEnroll", "EasyCheck", "EasyPariksha", "VidyaDesk"]
  },
  {
    title: "Management",
    icon: <FaSchool />,
    features: ["VidyaHR"]
  }
];

const data = {
  University: {
    basic: ["VidyaUniversity", "VidyaCRM", "VidyaLMS", "EasyEnroll"],
    advanced: ["VidyaUniversity", "VidyaCRM", "VidyaLMS", "EasyEnroll", "EasyCheck", "EasyPariksha", "VidyaDesk", "VidyaHR"]
  },
  College: {
    basic: ["VidyaUniversity", "VidyaCRM", "VidyaLMS", "EasyEnroll"],
    advanced: ["VidyaUniversity", "VidyaCRM", "VidyaLMS", "EasyEnroll", "EasyCheck", "EasyPariksha", "VidyaDesk", "VidyaHR"]
  },
  School: {
    basic: ["VidyaSchool", "VidyaCRM", "EasyEnroll"],
    advanced: ["VidyaSchool", "VidyaCRM", "VidyaLMS", "EasyEnroll", "EasyCheck", "EasyPariksha", "VidyaHR"]
  }
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("University");
const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preSelectedProduct, setPreSelectedProduct] = useState(null);

  const openQuoteModal = (productName = null) => {
    setPreSelectedProduct(productName); // Agar card se click hua toh name ayega, varna null
    setIsModalOpen(true);
  };

  const handleSuccess = () => {
  setIsModalOpen(false); // Modal band karo
  setShowToast(true);    // Toast dikhao
  setTimeout(() => setShowToast(false), 6000); // 4 second baad chhupa do
};

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-0 sm:pb-4">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-[#131d37] to-[#243246] text-white py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Compare Plans & Features</h1>
        <p className="opacity-70 mt-2 text-md sm:text-lg mb-6">Transparent pricing. No hidden cost.</p>

        {/* TABS */}
    <div className="flex justify-center px-4">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 flex overflow-x-auto custom-tabs-scrollbar max-w-full">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-2 text-md font-medium cursor-pointer rounded-full transition-all duration-300 whitespace-nowrap
          ${activeTab === tab 
            ? "bg-[#6702bf] text-white shadow-lg scale-105" 
            : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>
      </div>
      <style>{`
  .custom-tabs-scrollbar::-webkit-scrollbar {
    height: 4px; /* Aur bhi patla scrollbar */
  }
  .custom-tabs-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  .custom-tabs-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  .custom-tabs-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6702bf;
  }
  /* Hide scrollbar for cleaner look but keep functionality */
  @media (max-width: 640px) {
    .custom-tabs-scrollbar {
      scrollbar-width: thin;
    }
  }
`}</style>

      <div className="max-w-[1400px] mx-auto mt-12 mb-10 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {activeTab === "Add-on" ? (
            /* --- ADD-ON CARDS VIEW --- */
<motion.div
  key="addon-view"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {addOnProducts.map((product, index) => (
    <div 
      key={index} 
      className="group bg-white rounded-3xl py-8 px-6 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 flex flex-col justify-between"
    >
      <div>
        {/* Header: Icon + (Title & Subtitle) Aligned Right */}
        <div className="flex items-center gap-4 mb-8">
          {/* Icon Box */}
          <div className="sm:w-16 w-14 h-14 sm:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#d0c203] text-3xl group-hover:bg-[#d9d607] group-hover:text-white transition-all duration-500 shrink-0">
            {product.icon}
          </div>
          
          {/* Title & Subtitle Group */}
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-xl font-black text-gray-800 leading-tight group-hover:text-[#6702bf] transition-colors">
              {product.name}
            </h3>
            <span className="sm:text-[13px] text-[11px] font-medium text-gray-500 bg-[#f1f1ff] px-3 pt-1.5 py-1 rounded-full uppercase">
              {product.subtitle}
            </span>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {product.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-2 text-md text-gray-600 font-medium">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0 text-sm" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button onClick={() => openQuoteModal(product.name)} className="inline-flex cursor-pointer uppercase items-center justify-center gap-2 w-full py-3 sm:py-4 bg-gray-50 text-[#6702bf] font-bold rounded-xl group-hover:bg-[#6702bf] group-hover:text-white transition-all shadow-sm">
        Ask for quote <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  ))}
</motion.div>
          ) : (
            <>
          
            <motion.div
              key="table-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >

<div className="overflow-x-auto custom-scrollbar">
    {/* Min-width add kiya hai taaki mobile par layout na toote */}
    <div className="min-w-[500px] sm:min-w-full">

              <div className="grid grid-cols-3 text-md sm:text-xl font-bold bg-gray-50 overflow-x-auto">
                <div className="p-4 text-left bg-blue-100">FEATURES</div>
                <div className="p-4 text-center">BASIC</div>
                <div className="p-4 text-center bg-[#fef3c7] text-[#92400e]">ADVANCED</div>
              </div>

              {sections.map((section, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 text-md sm:text-lg font-semibold border-gray-200 border-y">
                    <span className="text-[#6702bf]">{section.icon}</span>
                    {section.title}
                  </div>
                  {section.features.map((feature, j) => (
                    <div key={j} className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition">
                      <div className="p-4 font-medium text-md">{feature}</div>
                      <div className="text-center p-4">
                        {data[activeTab].basic.includes(feature) ? <FaCheckCircle className="text-green-600 mx-auto text-xl" /> : <FaMinus className="text-gray-300 mx-auto text-xl" />}
                      </div>
                      <div className="text-center p-4">
                        {data[activeTab].advanced.includes(feature) ? <FaCheckCircle className="text-green-600 mx-auto text-xl" /> : <FaMinus className="text-gray-300 mx-auto text-xl" />}
                      </div>
                    </div>
                  ))}
                  
                </div>
                
              ))}
              </div>
              </div>
            </motion.div>
            <style>{`
  .custom-scrollbar::-webkit-scrollbar {
    height: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6702bf;
  }
`}</style>
            
    <section className="sm:py-20 py-12 ">
      {/* Main Container with Gradient */}
      <div className="max-w-7xl mx-auto rounded-[1.5rem] overflow-hidden relative bg-gradient-to-br from-[#0f172a] via-[#1f2d43] to-[#0f172a] shadow-2xl">
        
       
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 px-6 py-8 md:py-12 text-center flex flex-col items-center">
          
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 sm:mb-6 tracking-tight  max-w-3xl">
            Choose the Right Plan for Your <br className="hidden md:block" />
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Institution's Growth
            </span>
          </h2>

          {/* Subheading / Para */}
          <p className="text-gray-400 text-sm sm:text-lg md:text-xl font-medium mb-6 sm:mb-10 max-w-2xl leading-relaxed">
            Talk to our team — we'll help you pick the right plan that fits your needs perfectly.
          </p>

          {/* Ask For Quote Button */}
          <button onClick={() => openQuoteModal()} className="group flex cursor-pointer items-center gap-3 bg-white text-[#0f172a] px-5 py-2.5 sm:px-8 sm:py-4 rounded-full font-black uppercase tracking-widest text-sm sm:text-md shadow-xl transition-all duration-300 hover:bg-[#6702bf] hover:text-white hover:-translate-y-1 active:scale-95">
            <FaEnvelope className="text-lg" />
            <span>Ask For Quote</span>
            <FaArrowRight className="text-md opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </button>

        </div>
      </div>
    </section>
      </>
          )}
        </AnimatePresence>
        
      </div>
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productsList={allProductsForQuote}
        initialProduct={preSelectedProduct}
        onSuccess={handleSuccess}
      />

<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: 100, x: "-50%" }} // X fix kiya taaki centering na bigde
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 100, x: "-50%", transition: { duration: 0.2 } }}
      // Responsive classes: w-[92%] mobile par, sm:w-auto desktop par
      className="fixed bottom-6 sm:bottom-10 left-1/2 z-[9999] bg-[#10b981] text-white px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 border border-white/20 backdrop-blur-md w-[92%] sm:w-auto min-w-[300px] max-w-[500px]"
    >
      {/* Icon: Mobile par thoda chota */}
      <div className="bg-white/20 p-2 sm:p-3 rounded-full shrink-0">
        <FaCheckCircle className="text-xl sm:text-2xl" />
      </div>

      <div className="flex-1">
        <h4 className="font-black text-base sm:text-lg leading-none uppercase tracking-wider">
          Success
        </h4>
        <p className="text-[13px] sm:text-sm font-bold opacity-90 mt-1.5 leading-tight sm:leading-relaxed">
          Your request is received. <br className="hidden sm:block" /> 
          We will contact you very soon.
        </p>
      </div>

      {/* Progress Bar (Timer) */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 4, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1.5 bg-white/30 rounded-full"
      />
    </motion.div>
  )}
</AnimatePresence>

      {/* CTA */}
   <SideElements />
   <Footer />
    </div>
  );
}