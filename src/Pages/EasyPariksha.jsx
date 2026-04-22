import Navbar from "../Components/Navbar"
import { useState } from "react";
import {   FaUserShield, 
  FaFileAlt, 
  FaFingerprint, 
  FaShieldAlt, 
  FaChartBar, 
  FaSlidersH ,FaCheckCircle,FaQuoteLeft,FaChevronDown,FaUserCircle,FaTachometerAlt } from "react-icons/fa";
  import Demo from "../Components/demo";
  import Footer from "../Components/Footer";
  import SideElements from "../Components/SideElements";
function EasyPariksha() {

    const questionTypes = [
  "Descriptive / Case-Based",
  "Objective Questions",
  "Multiple Choice (MCQs)",
  "Fill in the Blanks",
  "Audio / Video Based",
  "One Word Answer"
];

const steps = [
    {
      title: "Configure Assessments",
      desc: "Define your examination parameters, select from various question formats, and curate your secure question bank with ease."
    },
    {
      title: "Student Onboarding",
      desc: "Bulk upload candidates or invite them via secure links. Schedule specific time slots and automate exam notifications."
    },
    {
      title: "AI-Proctored Execution",
      desc: "Conduct tests with advanced AI monitoring, face recognition, and browser-lock features to ensure a cheat-proof environment."
    },
    {
      title: "Instant Analytics",
      desc: "Generate automated reports and multi-format results immediately after the session, ready for sharing and archiving."
    }
  ];

        const [activeIndex, setActiveIndex] = useState(null);
        
          const toggleAccordion = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
          };

  const faqs = [
  {
    question: "What is an Online Examination Software?",
    answer: "Online Examination Software is a digital platform that allows institutions to create, manage, and conduct exams over the internet. It eliminates the need for physical question papers and enables secure, remote assessments."
  },
  {
    question: "How does EasyPariksha conduct online exams?",
    answer: "EasyPariksha allows administrators to create tests, schedule exams, and assign them to students. Candidates can log in from any device, attempt exams within a secure environment, and submit answers digitally."
  },
  {
    question: "Is the platform secure for conducting exams?",
    answer: "Yes, the system is designed with advanced security features such as user authentication, activity monitoring, and controlled exam environments to ensure fair and transparent assessments."
  },
  {
    question: "What types of questions can be created?",
    answer: "The platform supports multiple question formats including multiple-choice, descriptive, fill-in-the-blanks, and media-based questions, allowing flexible and comprehensive exam creation."
  }
];

   const highlightsData = [
  {
    icon: <FaUserShield />,
    title: "AI-Based Proctoring",
    desc: "Monitor online exams with smart AI tools like facial detection, live video tracking, and automated alerts for suspicious activities."
  },
  {
    icon: <FaFileAlt />,
    title: "Smart Question Management",
    desc: "Create structured question papers with multiple formats, difficulty levels, and dynamic selection from a centralized question bank."
  },
  {
    icon: <FaFingerprint />,
    title: "Secure Student Authentication",
    desc: "Verify candidates using OTP, image validation, and login credentials to ensure secure and authorized exam access."
  },
  {
    icon: <FaShieldAlt />,
    title: "Advanced Anti-Cheating",
    desc: "Maintain exam integrity with secure browser control, audio-video monitoring, and instant alerts for unusual behavior."
  },
  {
    icon: <FaChartBar />,
    title: "Detailed Performance Reports",
    desc: "Analyze results with comprehensive reports including rankings, subject insights, and question-level performance tracking."
  },
  {
    icon: <FaSlidersH />,
    title: "Customizable Platform",
    desc: "Tailor the system with flexible settings, branding options, and scalable features to match your institution’s requirements."
  }
];

    return(
        <div className="min-h-screen bg-white relative">
<Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
                           Smart Online Examination 
  Platform for Modern Education
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
                          AI-Powered Assessments 
  Built for Accuracy & Speed
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/pariksha.jpg"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/parikshamobile.jpg" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10 top-[0px] md:top-[50px] lg:top-[80px]">
          <div className="max-w-[1500px] mx-auto h-full px-6 pl-8 md:pl-9 lg:pl-18 flex items-start pt-16 md:pt-2 lg:pt-3">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <h1 className="text-secondary text-[19px] sm:text-[28px] md:text-[34px] lg:text-[45px]  font-bold tracking-wide mb-2 opacity-90">
                Smart Online Examination <br />
  Platform for Modern Education
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[23px] md:text-[28px]  lg:text-[34px] font-semibold text-[#eaeaea] leading-[1.9] lg:leading-[1.6]  ">
                AI-Powered Assessments <br />
  Built for Accuracy & Speed
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
        <a href="#request-demo" className="mx-auto mt-4 block px-4 w-fit py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </div>

<section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/padhai.jpg" // 👈 apni image daal
              alt="Vidya ERP Dashboard"
              className="w-full lg:w-[80%] max-h-[370px]  object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              What is EasyPariksha?
            </h2>

            {/* description */}
<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  EasyPariksha is a smart online examination platform designed to simplify the 
  entire assessment process for schools, colleges, and institutions. It enables 
  seamless creation, management, and conduction of exams in a secure digital environment.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  With EasyPariksha, educators can create question papers, schedule exams, and 
  monitor student performance in real time. The platform supports objective and 
  subjective tests, automated evaluation, and instant result generation for faster decision-making.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  By eliminating manual efforts and ensuring accuracy, EasyPariksha enhances the 
  efficiency of examination workflows. It also provides a secure and scalable 
  system that helps institutions conduct exams smoothly while maintaining 
  transparency and reliability.
</p>



          </div>
        </div>
      </section>

 <section className="w-full bg-white py-4 md:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Orange Line */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-10">
          Our Cutting-Edge Features
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-left">

              {/* Icon */}
              <div className="w-34 h-12 flex items-center justify-center rounded-full bg-[#EEF2FF] text-[#4A3AFF] text-xl shadow-sm">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="w-full mt-3 sm:mt-10 bg-gradient-to-r from-[#711ebe] to-[#5b2dcf] py-12 md:py-16 px-4 sm:px-6">
  
  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
    <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-4"></div>

    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
      Conduct Exams with Multiple Question Formats
    </h2>
  </div>

  {/* Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
    
    {questionTypes.map((item, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        
        {/* Circle */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-md mb-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[6px] border-[#2d3fcf]"></div>
        </div>

        {/* Text */}
        <p className="text-white text-xs sm:text-sm md:text-base leading-snug max-w-[120px]">
          {item}
        </p>

      </div>
    ))}

  </div>
</section>

<section className="sm:py-20 py-12 px-6 bg-[#f8faff] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-13">
          <div className="w-14 h-1.5 bg-secondary rounded-full mx-auto mb-4"></div>
          <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-2">How it Works</h2>
          <p className="text-primary text-xl md:text-2xl font-semibold">
            4 Simple Steps to Launch Secure Online Assessments
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-5 md:p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[#222] text-xl md:text-2xl font-bold mb-4 flex items-center">
               
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

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
              <div className="text-primary text-4xl md:text-6xl transition-transform group-hover:scale-110 duration-300">
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
              <div className="text-primary text-4xl md:text-6xl transition-transform group-hover:scale-110 duration-300">
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

                 <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl group">
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              <div className="text-primary text-4xl md:text-6xl transition-transform group-hover:scale-110 duration-300">
                <FaTachometerAlt strokeWidth={1.5} />
              </div>
              <span className="text-gray-800 text-xl md:text-2xl font-bold">
                COE
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
              <p className="text-white text-base lg:text-xl leading-relaxed font-medium ">
                
My team and I thank you for the seamless shifts to online examinations. This was the first time we have taken the online proctored exams and we are thankful that the entire journey was seamless
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
export default EasyPariksha