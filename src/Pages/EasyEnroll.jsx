import Navbar from "../Components/Navbar"
import { motion, useScroll, useSpring } from "framer-motion";
import { useState,useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { 
  FaFileImport, FaUserGraduate, FaClipboardList, FaRobot, FaShieldAlt, FaCheckDouble,
  FaWhatsapp, FaGlobe, FaFileInvoiceDollar, FaRocket, FaUserLock, FaChartPie, 
  FaHeadset, FaSyncAlt, FaMicrochip, FaDatabase, FaBullhorn, FaFileAlt, 
  FaUserShield, FaClipboardCheck, FaIdCard, FaUniversity
} from 'react-icons/fa';
function EasyEnroll() {

const flowData = [
    { icon: <FaDatabase />, title: "Master Data Setup", desc: "Configure course details, seat matrix, and reservation policies." },
    { icon: <FaBullhorn />, title: "Live Vacancy Declaration", desc: "Instantly publish available seats across all branches on your portal." },
    { icon: <FaFileAlt />, title: "Online Registration", desc: "Seamless application submission with digital document uploads." },
    { icon: <FaCheckDouble />, title: "Merit Computation", desc: "Automated ranking based on scores, ensuring 100% transparency." },
    { icon: <FaUserShield />, title: "Document Verification", desc: "Digital verification of certificates by the admission committee." },
    { icon: <FaClipboardCheck />, title: "Provisional Allotment", desc: "AI-driven seat allocation based on merit and student preferences." },
    { icon: <FaIdCard />, title: "Fee Payment & Confirmation", desc: "Secure online fee collection and instant digital receipts." },
    { icon: <FaUniversity />, title: "Final Enrollment", desc: "Onboarding students into the main ERP system successfully." },
  ];

const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
   offset: ["start end", "end start"]
  });
const [progress, setProgress] = useState(0);
  // Progress bar ko smooth banane ke liye spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCardView = (index) => {
  const newProgress = ((index + 1) / flowData.length) * 100;

  setProgress((prev) => (newProgress > prev ? newProgress : prev));
};

 const featuresData = [
  {
    icon: <FaFileImport />,
    title: "Smart Data Import",
    description: "Easily import student enquiries and bulk lead data from multiple sources like Excel, web forms, and social media ads."
  },
  {
    icon: <FaUserGraduate />,
    title: "Digital Application Portal",
    description: "Allow prospective students to submit applications and upload necessary documents online through a user-friendly portal."
  },
  {
    icon: <FaClipboardList />,
    title: "Auto Merit List Generation",
    description: "Automatically generate merit lists based on custom criteria, exam scores, and institutional reservation policies."
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Seat Allotment",
    description: "Optimize the admission process with intelligent seat allotment algorithms based on availability and student preferences."
  },
  {
    icon: <FaShieldAlt />,
    title: "Compliance & Verification",
    description: "Streamline document verification workflows to ensure 100% compliance with institutional and government regulations."
  },
  {
    icon: <FaCheckDouble />,
    title: "Real-time Vacancy Tracking",
    description: "Monitor live seat availability across different branches, courses, and categories through a centralized dashboard."
  },
  {
    icon: <FaWhatsapp />,
    title: "Automated Communication",
    description: "Send instant admission updates and payment reminders to students and parents via automated WhatsApp and Email triggers."
  },
  {
    icon: <FaGlobe />,
    title: "Centralized Enquiry Portal",
    description: "Manage multiple intake channels from a single dashboard, providing a unified view of all online and offline student queries."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Fee & Scholarship Tracking",
    description: "Track initial admission fees, manage scholarship discounts, and generate instant digital receipts for a transparent audit trail."
  }
];

const FlowCard = ({ data }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border-l-[6px] border-[#FF9100] hover:shadow-xl transition-all border border-gray-100"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-[#FF9100] to-[#FFB700] rounded-full flex items-center justify-center text-white text-2xl shadow-inner flex-shrink-0">
      {data.icon}
    </div>
    <div className="text-left">
      <h3 className="text-xl font-bold text-[#4A3AFF] mb-1">{data.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{data.desc}</p>
    </div>
  </motion.div>
);


const WhyChooseData = [
  {
    icon: <FaRocket />,
    title: "10x Faster Enrollments",
    description: "Accelerate your entire admission cycle with automated workflows that cut down processing time from weeks to just a few hours."
  },
  {
    icon: <FaUserLock />,
    title: "End-to-End Data Privacy",
    description: "Your institutional and student data is protected with enterprise-grade encryption and secure role-based access controls."
  },
  {
    icon: <FaSyncAlt />,
    title: "Seamless ERP Integration",
    description: "Effortlessly sync admission data with your existing ERP or student management system without any manual data entry errors."
  },
  {
    icon: <FaChartPie />,
    title: "Advanced Channel Analytics",
    description: "Identify which marketing channels (Google, FB, Offline) are bringing the highest quality leads to optimize your budget."
  },
  {
    icon: <FaMicrochip />,
    title: "AI-Driven Accuracy",
    description: "Eliminate human bias and errors in merit list calculation and seat allotment with our precision-engineered AI algorithms."
  },
  {
    icon: <FaHeadset />,
    title: "Unmatched Support",
    description: "Get dedicated 24/7 technical support and training to ensure your staff can maximize the potential of the EasyEnroll platform."
  }
];
    return(
<div className="bg-white relative">
    <Navbar />
  <section className="bg-[#EBF2FF] py-7 md:py-12 px-4 font-sans"> {/* Padding kam ki: py-12/24 se py-10/16 */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-10"> {/* Gap bhi thoda kam kiya */}
      
      {/* Left Side: Content */}
      <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left"> {/* Width 50% se 45% ki */}
        {/* Top Orange Accent Line */}
        <div className="w-12 h-2.5 bg-[#FF9100] mx-auto rounded-full mb-4"></div> {/* Line thodi choti ki */}
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4C3BCF] leading-tight mb-6 sm:mb-8"> {/* Font size 1 step down kiya */}
          VidyaEnroll Admissions <br className="hidden lg:block" /> 
          Management System
        </h1>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 sm:mb-12 max-w-lg"> {/* Text size kam kiya */}
          VidyaEnroll, integrated with VidyaCRM, streamlines the entire admission process for institutions. It enables seamless student data import, application submission, and real-time vacancy management. It also automates personalized follow-ups and merit list generation to ensure a faster and more transparent enrollment experience.
        </p>
        
        {/* Action Button */}
        <button className="bg-[#4A3AFF] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#3a2cd1] transition-all transform hover:-translate-y-1 uppercase text-xs tracking-wider">
          Request A Demo
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-[45%] mt-8 md:mt-0 flex justify-center"> {/* Image container width kam ki */}
        <div className="relative group max-w-sm md:max-w-md"> {/* Max-width lagayi image size control karne ke liye */}
          {/* Background decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4A3AFF] to-[#FF9100] rounded-[1.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          
          <img 
            src="enroll.jpg" 
            alt="VidyaCRM Admission Management" 
            className="relative w-full h-auto rounded-[1.5rem] shadow-xl border-[3px] border-white object-cover"
          /> {/* Border aur Roundness thodi kam ki for a sharper look */}
        </div>
      </div>

    </div>
  </section>

  <div className="w-full  max-[400px]:px-4 md:px-16 py-10 md:py-12 px-4">
     <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-4"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[22px]  sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-[#3d52d9] leading-tight mb-8 tracking-tight">
         Key Features of EasyEnroll
        </h2>



      </div>
       <section className="w-full mt-1 sm:mt-6 ">
<div className="max-w-[1200px] mx-auto grid sm:gap-5 grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* max-width 1400 se 1200 kar di hai taaki boxes bahut zyada stretch na hon */}
  
  {featuresData.map((item, index) => (
    <div 
      key={index} 
      className="bg-white border-[1.5px] border-blue-50 rounded-[12px] p-4 md:p-5 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      // paddings (p-4/5) aur border-radius (12px) thoda kam kiya hai
    >
      {/* Icon Box */}
      <div className="w-16 h-16 flex items-center justify-center mb-4"> 
        {/* w-20 se w-16 kiya hai aur margin niche ka kam kiya hai */}
        <span className="text-[#FF9100] text-[35px] md:text-[40px]">
          {item.icon}
          {/* Icon size 45px se 40px kar diya hai */}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[18px] md:text-[20px] font-bold text-[#3d52d9] mb-2 tracking-tight leading-tight">
        {/* font size 22px se 20px kiya aur margin-bottom half kar diya */}
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-[13px] md:text-[14px] leading-[1.6] font-normal">
        {/* Text 15px se 14px kiya aur leading (line-height) tight ki hai */}
        {item.description}
      </p>
    </div>
  ))}
</div>
    </section>

</div>

<div className="w-full bg-[#EBF2FF]  max-[400px]:px-4 md:px-16 py-8 md:py-12 px-4">
     <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-4"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[22px]  sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-[#3d52d9] leading-tight mb-8 tracking-tight">
          Why Choose EasyEnroll?
        </h2>



      </div>
       <section className="w-full mt-1 sm:mt-6 ">
    <div className="max-w-[1100px] mx-auto grid sm:gap-5 grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* max-width 1400 se 1100 ki hai taaki cards compact rahein */}

  {WhyChooseData.map((item, index) => (
    <div 
      key={index} 
      className="bg-white border border-blue-50 rounded-[12px] p-5 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      // Padding aur border thickness kam ki hai
    >
      {/* Icon Box */}
      <div className="w-14 h-14 flex items-center justify-center mb-5"> 
        {/* Box size 20 se 14 kiya aur margin kam kiya */}
        <span className="text-[#FF9100] text-[32px] md:text-[36px]">
          {item.icon}
          {/* Icon size 45px se 36px kar diya */}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[18px] md:text-[20px] font-bold text-[#3d52d9] mb-2 tracking-tight">
        {/* Text size 22px se 20px kiya */}
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed font-normal">
        {/* Text 15px se 14px kiya aur readability tight ki */}
        {item.description}
      </p>
    </div>
  ))}
</div>
    </section>

</div>

<section ref={targetRef} className=" py-12 px-4 bg-white min-h-[150vh] max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <div className="w-14 h-2 bg-[#FF9100] rounded-full mx-auto mb-4"></div>
          <h2 className="text-3xl font-extrabold text-[#4A3AFF]">Admission Round Flow</h2>
        </div>

        {/* Progress Bar Container - Sticky */}
        <div className=" mb-8 bg-white/90 backdrop-blur-md py-4 ">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
  className="h-full bg-[#4A3AFF]"
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.4 }}
/>
          </div>

        </div>

        {/* Flow Cards */}
        <div className="space-y-8">
          {flowData.map((data, index) => (
  <motion.div 
    key={index}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
   viewport={{ once: true, amount: 0.2 }}
    onViewportEnter={() => handleCardView(index)} // 👈 MAGIC LINE
 transition={{ 
    duration: 0.5, 
    ease: "easeOut",
    delay: index * 0.05 
  }}
    className="flex items-center hover:bg-white/20  gap-5 p-5 bg-white rounded-xl  shadow-md border-l-4 border-orange-400"
  >
              <div className="w-12 h-12 bg-[#FF9100] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg">
                {data.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-[#4A3AFF]">{data.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{data.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    
  <Footer />
      <SideElements />
</div>
    )
}
export default EasyEnroll