import Navbar from "../Components/Navbar"
import Demo from "../Components/demo";
import { 
  FaUserShield, 
  FaCloudUploadAlt, 
  FaPenNib, 
  FaChartLine, 
  FaFileExport, 
  FaHistory ,
  FaCogs, 
  FaChartBar, 
  FaLayerGroup, 
  FaWallet, 
  FaCheckDouble, 
  FaShieldAlt,
  FaUserCircle, FaFileAlt,FaQuoteLeft,FaChevronDown
} from 'react-icons/fa';
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { useState } from "react";

function EasyCheck() {

           const [activeIndex, setActiveIndex] = useState(null);
        
          const toggleAccordion = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
          };

    const faqs = [
  {
    question: "What is a Digital Evaluation System?",
    answer: "A Digital Evaluation System is an online platform that allows educational institutions to assess answer sheets digitally. It replaces manual paper checking with a faster, more secure, and efficient evaluation process."
  },
  {
    question: "How does EasyCheck work for examiners?",
    answer: "Examiners simply log into the system, access the assigned answer sheets, and evaluate them on-screen. They can review responses, assign marks, and add remarks or annotations directly within the platform."
  },
  {
    question: "How are answer sheets managed in the system?",
    answer: "Answer sheets are scanned and uploaded into the system, where they are securely stored and automatically distributed to examiners. This ensures proper tracking and eliminates the need for physical handling."
  },
  {
    question: "What are the benefits of using EasyCheck?",
    answer: "EasyCheck speeds up the evaluation process, reduces human errors, ensures transparency, and maintains data security. It also helps institutions generate results quickly without delays or manual effort."
  }
];

    const featuresData = [
  {
    icon: <FaUserShield />,
    title: "COE & Examiner Dashboard",
    description: "A high-level command center for the Controller of Examination to monitor live evaluation progress, audit logs, and student performance metrics."
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Smart Script Digitization",
    description: "Transform physical answer scripts into secure digital archives using our EasyCheck engine, enabling paperless on-screen marking."
  },
  {
    icon: <FaPenNib />,
    title: "Interactive On-Screen Marking",
    description: "Empower examiners with digital tools for live marking, including dynamic annotations, comments, and automated mark summation."
  },
  {
    icon: <FaChartLine />,
    title: "Statistical Data Analytics",
    description: "Generate comprehensive analytical reports with real-time performance measurement and in-depth statistical tools for entire datasets."
  },
  {
    icon: <FaFileExport />,
    title: "Unified API & Excel Integration",
    description: "Seamlessly exchange critical exam data with existing ERP systems via robust API connectors and intelligent Excel data mapping."
  },
  {
    icon: <FaHistory />,
    title: "Automated Evaluation Logs",
    description: "Maintain a foolproof digital trail of every marking activity, ensuring 100% transparency and security throughout the evaluation cycle."
  }
];

const stepsData = [
  {
    title: "Secure Candidate Data",
    desc: "Student information is anonymized to maintain fairness and prevent bias during evaluation.",
  },
  {
    title: "Scan & Upload Sheets",
    desc: "Answer sheets are digitized and stored securely for easy access and tracking.",
  },
  {
    title: "Define Evaluation Rules",
    desc: "Set marking schemes and answer guidelines for consistent assessment.",
  },
  {
    title: "Assign to Examiners",
    desc: "Sheets are distributed digitally for faster and more efficient checking.",
  },
  {
    title: "Instant Result Processing",
    desc: "Marks are compiled automatically to generate quick and accurate results.",
  },
];

const benefits = [
    {
      icon: <FaCogs />,
      title: "Automated Digital Workflow",
      desc: "Revolutionize your evaluation cycle by converting physical answer scripts into a high-speed digital pipeline, eliminating logistical delays."
    },
    {
      icon: <FaChartBar />,
      title: "Enhanced Transparency",
      desc: "Maintain absolute integrity with real-time tracking of every marked script, providing auditors with a foolproof digital trail."
    },
    {
      icon: <FaLayerGroup />,
      title: "Intuitive Grading Tools",
      desc: "Empower your evaluators with smart annotation tools and dynamic marking schemes that make on-screen evaluation natural and fast."
    },
    {
      icon: <FaWallet />,
      title: "Cost & Resource Optimization",
      desc: "Drastically reduce overhead costs associated with script transportation, physical storage, and manual data entry tasks."
    },
    {
      icon: <FaCheckDouble />,
      title: "Precision Error Detection",
      desc: "Our automated validation engine ensures zero calculation errors and flags any missed questions during the evaluation process."
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise-Grade Security",
      desc: "Your data is stored in encrypted, tier-3 data centers with role-based access to prevent any unauthorized tampering or leaks."
    }
  ];

    return(
        <div className="min-h-screen bg-white relative">
<Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
           Digital Evaluation System 
                for Education Institutes
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
                        Smart Online Answer Sheet
  Checking Platform
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/check.webp"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/checkmobile.webp" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10 top-[0px] md:top-[50px] lg:top-[80px]">
          <div className="max-w-[1500px] mx-auto h-full px-6 pl-8 md:pl-9 lg:pl-10 flex items-start pt-32 md:pt-20 lg:pt-18">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <h1 className="text-secondary text-[19px] sm:text-[28px] md:text-[34px] lg:text-[45px]  font-bold tracking-wide mb-2 opacity-90">
                Digital Evaluation System <br />
                for Education Institutes
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[23px] md:text-[28px]  lg:text-[34px] font-semibold text-[#e9e9e9] leading-[1.9] lg:leading-[1.6]  ">
                Smart Online Answer Sheet <br />
  Checking Platform
              </p>

            </div>


          </div>
        </div>

        {/* Schedule Button: Centered on poster for desktop */}
        <a href="#request-demo" className="schedule-btn !hidden min-[900px]:!inline-flex  absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-8 py-3 rounded-lg bg-orange-500 text-white font-bold text-lg shadow-lg transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </section>

      {/* Mobile button: below poster and smaller on small screens */}
      <div className="max-[900px]:block hidden">
        <a href="#request-demo" className="mx-auto mt-4 w-fit block px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </div>



<section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/examination.jpg" // 👈 apni image daal
              alt="Vidya ERP Dashboard"
              className="w-full h-full object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              What is EasyCheck?
            </h2>

            {/* description */}
<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  EasyCheck is an advanced digital evaluation system designed to simplify the 
  process of checking answer sheets for educational institutions. It replaces 
  traditional manual checking with a faster, more accurate, and completely 
  paperless approach.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  With EasyCheck, answer sheets are securely scanned and converted into digital 
  formats, allowing examiners to review and evaluate them online from anywhere. 
  The system ensures consistent marking, reduces human errors, and speeds up the 
  overall result processing workflow.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  By eliminating the need for physical handling of papers, EasyCheck improves 
  efficiency, enhances data security, and enables institutions to generate 
  results quickly with complete transparency and reliability.
</p>




          </div>
        </div>
      </section>


<div className="w-full bg-[#f4f4f4] max-[400px]:px-4 md:px-16 py-7 md:py-10 px-4">
     <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[22px] uppercase sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-primary leading-tight mb-8 tracking-tight">
         Our Cutting-Edge Features
        </h2>

      </div>

    <section className="w-full mt-2 sm:mt-4 ">
  <div className="max-w-[1200px] mx-auto grid sm:gap-6 grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
    
    {featuresData.map((item, index) => (
      <div 
        key={index} 
        className="bg-white border-[1.5px] will-change-contents border-blue-100 rounded-[15px] max-[400px]:p-4 p-4 md:p-5 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
      >
        {/* Icon Box */}
        <div className="w-16 h-16 flex items-center justify-center mb-6 max-[400px]:mb-2">
          <span className="text-secondary text-[34px]">
            {item.icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[18px] font-medium text-primary mb-3 tracking-tight">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-[13.5px] leading-[1.6] font-medium">
          {item.description}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<section className="w-full bg-white py-10 px-4 md:px-10">
  <div className="max-w-6xl mx-auto text-center">

    <div className="w-14 h-2 bg-secondary rounded-full mx-auto mb-4"></div>

    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
      How It Works
    </h2>

    <p className="text-[#8800ff] font-semibold mb-12 text-sm md:text-base">
      Simple 5-Step Digital Evaluation Process
    </p>
  </div>

  {/* Timeline */}
  <div className="relative max-w-5xl mx-auto">

    {/* 🔥 Line */}
    <div className="
      absolute 
      left-4 md:left-1/2 
      top-0 
      md:-translate-x-1/2 
      w-[3px] 
      h-full 
      bg-blue-200
    "></div>

    {stepsData.map((step, index) => (
      <div
        key={index}
        className={`
          mb-10 
          flex flex-col 
          md:flex-row 
          items-start md:items-center
          ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
        `}
      >

        {/* Content */}
        <div className="w-full md:w-1/2 pl-12 md:pl-4 pr-2">
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-md border">
            <h3 className="text-base md:text-lg font-bold text-[#222] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>

        {/* 🔥 Circle */}
        <div className="
          absolute 
          left-4 md:left-1/2 
          -translate-x-1/2 
          flex items-center justify-center 
          w-8 h-8 md:w-10 md:h-10 
          rounded-full 
          bg-white 
          border-4 border-secondary 
          text-primary 
          font-bold 
          z-10
        ">
          {index + 1}
        </div>

        {/* Spacer (desktop only) */}
        <div className="hidden md:block w-1/2"></div>

      </div>
    ))}
  </div>
</section>




<section className="py-4 px-6 bg-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-primary text-2xl md:text-4xl font-bold mb-12 tracking-tight">
          Download User Manual
        </h2>

        {/* Manuals Container */}
        <div className="flex flex-col gap-8 items-center">
          
          {/* Student Manual Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl group">
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              <div className="text-primary text-5xl md:text-6xl transition-transform group-hover:scale-110 duration-300">
                <FaUserCircle strokeWidth={1.5} />
              </div>
              <span className="text-gray-800 text-xl md:text-2xl font-bold">
                Student
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#0062ff] to-[#004dc2] text-white px-10 py-3 rounded-xl font-bold uppercase text-sm tracking-wider shadow-md hover:shadow-xl hover:scale-105 transition-all">
              Download
            </button>
          </div>

          {/* Paper Checker Manual Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl group">
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              <div className="text-primary text-5xl md:text-6xl transition-transform group-hover:scale-110 duration-300">
                <FaFileAlt strokeWidth={1.5} />
              </div>
              <span className="text-gray-800 text-xl md:text-2xl font-bold">
                Paper Checker
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#0062ff] to-[#004dc2] text-white px-10 py-3 rounded-xl font-bold uppercase text-sm tracking-wider shadow-md hover:shadow-xl hover:scale-105 transition-all">
              Download
            </button>
          </div>

        </div>
      </div>
    </section>

    <section className="w-full mt-8 bg-primary py-10 md:py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Top Orange Accent Line */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-6"></div>
    
            {/* Main Heading */}
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
              Here's what our Customers have to Say About Us
            </h2>
    
            {/* Static Quote Icon */}
            <div className="flex justify-center">
              <FaQuoteLeft className="text-white opacity-20 text-5xl md:text-6xl" />
            </div>
    
            {/* Testimonial Text */}
            <div className="max-w-4xl mx-auto">
              <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed font-medium ">
                
My team and I thank you for the seamless shifts to online examinations. This was the first time we have taken the online proctored exams and we are thankful that the entire journey was seamless.
              </p>
              

            </div>
    
          </div>
        </section>

            <section className="w-full py-6 sm:py-10 px-4 md:px-20 lg:px-24 ">
                  <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className="flex flex-col items-center mb-12">
                      <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#001529] text-center">
                        Frequently Asked <span className="text-primary">Questions</span>
                      </h2>
                      <p className="text-gray-500 mt-4 text-center">
                        Find answers to common questions about Vidya ERP and its features.
                      </p>
                    </div>
            
                    {/* FAQ List */}
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div 
                          key={index} 
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                        >
                          {/* Question Part */}
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between gap-3  p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className={` text-sm sm:text-lg font-semibold ${activeIndex === index ? 'text-primary' : 'text-gray-700'}`}>
                              {faq.question}
                            </span>
                           <FaChevronDown 
              className={`text-secondary transition-transform duration-300 flex-shrink-0 ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              }`} 
            />
                          </button>
            
                          {/* Answer Part (Down Pop Logic) */}
                          <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                              activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="p-5 text-gray-600 border-t border-gray-100 leading-relaxed bg-[#f8f9ff]">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
            
                  </div>
                </section>
        <div id="request-demo">
  <Demo />
</div>
                  <Footer />
      <SideElements />
        </div>
    )
}
export default EasyCheck