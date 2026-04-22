import Navbar from "../Components/Navbar"
import { useState } from "react";
import Demo from "../Components/demo";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { 
  FaUserCheck, FaMoneyCheckAlt, FaCalendarTimes, 
  FaIdCard, FaChartLine, FaMobileAlt ,FaRegClock,FaChevronDown, FaHandsHelping, FaCheckCircle, FaEye,FaUserPlus, FaCog, FaPlayCircle, FaCheckDouble
} from 'react-icons/fa';
function VidyaHR() {


        const [activeIndex, setActiveIndex] = useState(null);
        
          const toggleAccordion = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
          };

  const faqs = [
  {
    question: "How does VidyaHR accelerate our payroll processing?",
    answer: "VidyaHR automates complex salary structures, statutory compliances (PF/ESI/TDS), and incentives. What previously took hours on spreadsheets can now be executed in a single click with 100% accuracy."
  },
  {
    question: "Can attendance be integrated with biometric or GPS tracking?",
    answer: "Yes, VidyaHR seamlessly integrates with biometric hardware and offers GPS-enabled mobile attendance for field staff. This ensures real-time tracking of clock-ins, locations, and shifts on a unified dashboard."
  },
  {
    question: "What features are available for employees in VidyaHR?",
    answer: "Employees get access to a dedicated 'Self-Service Portal' where they can download payslips, apply for leaves, track reimbursement claims, and manage their professional profiles without manual HR intervention."
  },
  {
    question: "How secure is our institutional and employee data?",
    answer: "Data security is our top priority. VidyaHR utilizes enterprise-grade encryption and secure cloud hosting. Additionally, role-based access control ensures that sensitive information is only visible to authorized personnel."
  }
];

  // Highlights Cards Data
  const highlightsData = [
    {
      icon: <FaUserCheck />,
      title: "Real-time Attendance",
      desc: "Automate clock-ins with Geo-fencing and biometric sync. Track daily logs and shifts effortlessly on a live dashboard."
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Automated Payroll",
      desc: "Execute complex salary structures with one-click processing. Includes automated PF, PT, and TDS calculations."
    },
    {
      icon: <FaCalendarTimes />,
      title: "Smart Leave Management",
      desc: "Empower employees to apply for leaves via mobile. Manage approval workflows and holiday calendars in real-time."
    },
    {
      icon: <FaIdCard />,
      title: "Digital Employee Records",
      desc: "Maintain a secure 360-degree digital archive of employee profiles and documents—eliminating physical files."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      desc: "Monitor workforce productivity with KPI tracking. Simplify appraisal cycles with data-driven performance insights."
    },
    {
      icon: <FaMobileAlt />,
      title: "Self-Service Mobile App",
      desc: "Bridge the gap with a dedicated app for staff to view payslips, update profiles, and communicate with HR anytime."
    }
  ];

 return(
    <div className="min-h-screen bg-white relative">
<Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] md:text-[30px] font-bold tracking-wide mb-1 opacity-90">
           Smart HR Solutions 
   For High-Performance Teams
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] md:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] md:leading-[1.6]">
                Next-Gen Payroll & HR
  Reliable, Fast & Secure
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/hr.jpg"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/hrmobile.jpg" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10 top-[0px] md:top-[50px] md:top-[80px]">
          <div className="max-w-[1500px] mx-auto h-full px-6 pl-8 md:pl-9 md:pl-18 flex items-start pt-16 md:pt-2 md:pt-3">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <h1 className="text-secondary text-[19px] sm:text-[28px] md:text-[34px] md:text-[45px]  font-bold tracking-wide mb-2 opacity-90">
                Smart HR Solutions 
   For <br /> High-Performance<br /> Teams
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[23px] md:text-[28px]  md:text-[34px] font-semibold text-[#eaeaea] leading-[1.9] md:leading-[1.6]  ">
                Next-Gen Payroll & HR<br />
  Reliable, Fast & Secure
              </p>

            </div>


          </div>
        </div>

        {/* Schedule Button: Centered on poster for desktop */}
        <a href="#request-demo" className="schedule-btn !hidden min-[900px]:!inline-flex  absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-8 py-3 rounded-md bg-orange-500 text-white font-bold text-md shadow-md transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </section>

      {/* Mobile button: below poster and smaller on small screens */}
      <div className="max-[900px]:block hidden">
        <a href="#request-demo" className="mx-auto mt-4 w-fit block px-4 py-2 rounded-md bg-primary text-white font-bold text-sm shadow-md transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </div>

<section className="w-full bg-white py-8 mt-4 sm:py-12 md:py-18 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/hrpic.jpg" // 👈 apni image daal
              alt="Vidya ERP Dashboard"
              className="w-full md:w-[85%] max-h-[370px]  object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-md"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
<div className="w-full md:w-1/2 text-center md:text-left">

  {/* small tag */}
  <div className="w-14 h-2.5 bg-secondary rounded-full mb-6 mx-auto md:mx-0"></div>

  {/* heading */}
  <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-5">
    What is VidyaHR?
  </h2>

  {/* description */}
  <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-8">
    VidyaHR is an enterprise-grade Human Resource Management System designed to 
    digitalize your entire employee lifecycle. From hiring to retirement, we automate 
    the complex HR tasks so you can focus on building a great culture.
  </p>

  {/* List Section - Professional Look */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
    {[
      { title: "Employee Management", desc: "Centralized staff database." },
      { title: "Automated Payroll", desc: "One-click salary & compliance." },
      { title: "Smart Attendance", desc: "GPS & Biometric integration." },
      { title: "Leave & Claims", desc: "Simplified approval workflows." }
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-3 group">
        <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-secondary transition-colors">
          <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white"></div>
        </div>
        <div>
          <h4 className="font-bold text-primary text-sm md:text-[17px]">{item.title}</h4>
          <p className="text-gray-500 text-sm md:text-md">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

  <p className="text-gray-500 text-sm italic border-l-4 border-secondary pl-4 py-2 bg-gray-50 rounded-r-md">
    "Transforming traditional HR departments into agile, data-driven workforce hubs."
  </p>

</div>
        </div>
      </section>

       <section className="w-full bg-white py-4 md:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Orange Line */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-[#3d52d9] mb-8 sm:mb-14">
          Powering the Modern Workforce
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {highlightsData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-left">

              {/* Icon */}
              <div className="w-34 h-12 flex items-center justify-center rounded-full bg-[#EEF2FF] text-[#4A3AFF] text-xl shadow-sm">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#1F2937] mb-1">
                  {item.title}
                </h3>
                <p className=" text-[16px]  text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    {/* --- VidyaHR Benefits Section --- */}
<section className="py-10 mt-6 sm:mt-10 px-6 bg-primary">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-14">
      <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-6"></div>
      <h2 className="text-white text-3xl md:text-5xl font-black mb-4">
        Why Institutions Trust VidyaHR?
      </h2>
      <p className="text-blue-100/70 text-md max-w-2xl mx-auto italic">
        "Maximizing productivity while minimizing administrative overheads."
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      
      {/* Benefit 1: Save Time */}
      <div className="bg-white/9 border border-white/10 p-5 sm:p-8 rounded-[1.2rem] flex items-start gap-6 hover:bg-white/6 transition-all group">
        <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-3xl shadow-md group-hover:rotate-6 transition-transform">
          <FaRegClock />
        </div>
        <div>
          <h3 className="text-secondary text-xl md:text-2xl font-bold mb-2">Save Valuable Time</h3>
          <p className="text-blue-50 text-sm md:text-base leading-relaxed">
            Automate repetitive tasks like salary distribution and document management, saving up to 70% of your HR's weekly time.
          </p>
        </div>
      </div>

      {/* Benefit 2: Reduce Manual Work */}
      <div className="bg-white/9 border border-white/10 p-5 sm:p-8 rounded-[1.2rem] flex items-start gap-6 hover:bg-white/6 transition-all group">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl shadow-md group-hover:-rotate-6 transition-transform">
          <FaHandsHelping />
        </div>
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Reduce Manual Effort</h3>
          <p className="text-blue-50 text-sm md:text-base leading-relaxed">
            Eliminate the chaos of physical files and spreadsheets. Our digital-first approach ensures a paperless, hands-free experience.
          </p>
        </div>
      </div>

      {/* Benefit 3: Accuracy */}
      <div className="bg-white/9 border border-white/10 p-5 sm:p-8 rounded-[1.2rem] flex items-start gap-6 hover:bg-white/6 transition-all group">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl shadow-md group-hover:rotate-6 transition-transform">
          <FaCheckCircle />
        </div>
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">100% Data Accuracy</h3>
          <p className="text-blue-50 text-sm md:text-base leading-relaxed">
            Zero-room for human error in payroll and attendance. Our automated engine ensures every calculation is precise and compliant.
          </p>
        </div>
      </div>

      {/* Benefit 4: Transparency */}
      <div className="bg-white/9 border border-white/10 p-5 sm:p-8 rounded-[1.2rem] flex items-start gap-6 hover:bg-white/6 transition-all group">
        <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-3xl shadow-md group-hover:-rotate-6 transition-transform">
          <FaEye />
        </div>
        <div>
          <h3 className="text-secondary text-xl md:text-2xl font-bold mb-2">Absolute Transparency</h3>
          <p className="text-blue-50 text-sm md:text-base leading-relaxed">
            Provide employees with clear visibility into their attendance, leaves, and payslips through a transparent, secure portal.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* --- VidyaHR Implementation Workflow --- */}
<section className="py-14 px-6 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-14 sm:mb-18">
      <div className="w-14 h-2 bg-secondary rounded-full mx-auto mb-4"></div>
      <h2 className="text-primary text-3xl md:text-5xl font-black mb-4">
        How VidyaHR Gets You Started
      </h2>
      <p className="text-gray-500 text-md">Four simple steps to digitize your HR operations.</p>
    </div>

    {/* Workflow Steps */}
    <div className="relative">
      
      {/* Central Connecting Line (Desktop Only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>

      <div className="space-y-10 md:space-y-22">
        
        {/* Step 1 */}
        <div className="relative flex flex-col md:flex-row items-center group">
          <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-primary mb-3">Institutional Onboarding</h3>
            <p className="text-gray-500 leading-relaxed">
              We begin by setting up your institutional profile, departments, and designations 
              to match your organizational hierarchy perfectly.
            </p>
          </div>
          <div className="z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white mb-6 md:mb-0 order-1 md:order-2 group-hover:bg-secondary transition-colors">
            <FaUserPlus />
          </div>
          <div className="flex-1 md:pl-16 hidden md:block order-3"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col md:flex-row items-center group">
          <div className="flex-1 md:pr-16 hidden md:block order-1"></div>
          <div className="z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white mb-6 md:mb-0 order-1 md:order-2 group-hover:bg-secondary transition-colors">
            <FaCog />
          </div>
          <div className="flex-1 md:pl-16 order-2 md:order-3">
            <h3 className="text-2xl font-bold text-primary mb-3">Custom Configuration</h3>
            <p className="text-gray-500 leading-relaxed">
              Configure your custom leave policies, shift timings, and payroll structures (PF, ESI, TDS) 
              based on your specific compliance needs.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col md:flex-row items-center group">
          <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-primary mb-3">Data Migration & Go-Live</h3>
            <p className="text-gray-500 leading-relaxed">
              Our experts help you bulk-import existing employee data securely. Once verified, 
              your digital HR ecosystem is ready to launch.
            </p>
          </div>
          <div className="z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white mb-6 md:mb-0 order-1 md:order-2 group-hover:bg-secondary transition-colors">
            <FaPlayCircle />
          </div>
          <div className="flex-1 md:pl-16 hidden md:block order-3"></div>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col md:flex-row items-center group">
          <div className="flex-1 md:pr-16 hidden md:block order-1"></div>
          <div className="z-10 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white mb-6 md:mb-0 order-1 md:order-2 animate-bounce">
            <FaCheckDouble />
          </div>
          <div className="flex-1 md:pl-16 order-2 md:order-3">
            <h3 className="text-2xl font-bold text-secondary mb-3">Continuous Optimization</h3>
            <p className="text-gray-500 leading-relaxed">
              Generate real-time reports, monitor performance, and receive regular updates 
              to keep your workforce management at peak efficiency.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


                <section className="w-full py-6 sm:py-10 px-4 md:px-20 lg:px-24 ">
                  <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className="flex flex-col items-center mb-12">
                      <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#001529] text-center">
                        Frequently Asked <span className="text-[#3d52d9]">Questions</span>
                      </h2>
                      <p className="text-gray-500 mt-4 text-center">
                        Find answers to common questions about VidyaHR and its features.
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
                            <span className={` text-sm sm:text-lg font-semibold ${activeIndex === index ? 'text-[#3d52d9]' : 'text-gray-700'}`}>
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
export default VidyaHR