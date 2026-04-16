import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { useState } from "react";
import Demo from "../Components/demo";
import { FaBrain, FaLaptopCode, FaPalette, FaUsers, FaChartLine, FaLifeRing,FaCheckCircle,FaQuoteLeft,FaChevronDown } from "react-icons/fa";
function VidyaLMS() {
    
          const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    const leftFeatures = [
  "Smart course management",
  "Student performance tracking",
  "Interactive discussion boards",
  "Live class integrations",
  "Customizable learning paths",
  "Real-time progress insights",
];

const rightFeatures = [
  "Automated notifications",
  "Secure online assessments",
  "Content & media library",
  "Third-party integrations",
  "Advanced reporting tools",
  "Gamified learning experience",
];


    const highlightsData = [
  {
    icon: <FaBrain />,
    title: "Smart Learning Engine",
    desc: "Enhance student learning with intelligent recommendations and adaptive course structures tailored to individual progress."
  },
  {
    icon: <FaLaptopCode />,
    title: "Learn Anytime, Anywhere",
    desc: "Access courses seamlessly across devices with a fully responsive platform designed for flexible learning schedules."
  },
  {
    icon: <FaPalette />,
    title: "Fully Customizable Platform",
    desc: "Personalize the system with your institution’s branding, workflows, and features to match your unique needs."
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Learning Experience",
    desc: "Encourage interaction between students and faculty through discussion boards, live sessions, and shared resources."
  },
  {
    icon: <FaChartLine />,
    title: "Performance Insights",
    desc: "Track student engagement and progress with real-time analytics and detailed performance reports."
  },
  {
    icon: <FaLifeRing />,
    title: "Reliable Support System",
    desc: "Get continuous technical assistance and updates to ensure smooth and uninterrupted platform performance."
  }
];
const faqs = [
  {
    question: "What is a Learning Management System (LMS)?",
    answer: "A Learning Management System (LMS) is a digital platform that helps institutions create, manage, and deliver online courses. It allows teachers to share content, track student progress, and conduct assessments in one centralized system."
  },
  {
    question: "How does an LMS work?",
    answer: "An LMS works by providing a virtual classroom where educators can upload lessons, videos, assignments, and quizzes. Students can access these resources anytime, submit work online, and track their learning progress in real time."
  },
  {
    question: "Why do schools and colleges need an LMS?",
    answer: "Schools and colleges need an LMS to simplify teaching and learning processes, enable remote education, reduce paperwork, and provide a structured and interactive learning experience for students."
  },
  {
    question: "Can an LMS support both online and offline learning?",
    answer: "Yes, a modern LMS supports blended learning by combining classroom teaching with online resources. Students can revise lessons, access study materials, and complete assignments digitally alongside traditional classes."
  }
];
    return(
        <div className="min-h-screen bg-white relative">
      <Navbar />


      <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[#0008e7] text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
            Transforming Education
              with Smart LMS Solutions
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
              Empowering Education with
                Intelligent Technology
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full ">
          <img
            src="/study.jpg"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/studymobile.jpg" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10 top-[20px] md:top-[80px] lg:top-[100px]">
          <div className="max-w-[1500px] mx-auto h-full px-6 pl-8 md:pl-11 lg:pl-18 flex items-start pt-16 md:pt-2 lg:pt-3">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <h1 className="text-[orange] text-[19px] sm:text-[26px] md:text-[30px] lg:text-[42px]  font-semibold tracking-wide mb-2 opacity-90">
               Transforming Education<br />
              with Smart LMS Solutions
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[22px] md:text-[26px]  lg:text-[32px] font-semibold text-[#ffffff] leading-[1.9] lg:leading-[1.6]  ">
                Empowering Education with<br />
                Intelligent Technology
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
        <a href="#request-demo" className="mx-auto mt-4 block px-4 w-fit py-2 rounded-lg bg-orange-500 text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </div>


     <section className="w-full bg-white py-8 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/mobilelms.jpg" // 👈 apni image daal
              alt="Vidya ERP Dashboard"
              className="w-full h-full object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d52d9] leading-tight mb-4">
              What is Eduplus LMS?
            </h2>

            {/* description */}
       <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  Vidya LMS is a modern, cloud-based learning management system designed to
  enhance digital education and streamline the teaching-learning process. It
  connects educators, students, and administrators into one unified and
  interactive learning ecosystem.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  From course creation and content delivery to assignments, assessments, and
  progress tracking — everything is managed efficiently through a single
  platform, making learning more engaging and organized.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  Whether you're a school, college, or training institute, Vidya LMS adapts to
  your needs and empowers you to deliver high-quality education with smart tools
  and real-time insights.
</p>
        

          </div>
        </div>
      </section>

 <section className="w-full bg-white py-4 md:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Orange Line */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mx-auto mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d52d9] mb-10">
          Highlights
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

           <section className="w-full bg-[#292DC2] mt-10 py-4 sm:py-8 md:py-12 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 sm:gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">

      {/* small tag */}
      <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-6"></div>

      {/* heading */}
     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-4">
  Our Learning Models
</h2>

<p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-4">
  Our Learning Models are designed to provide a flexible and engaging educational 
  experience tailored to the needs of modern learners. Whether it's self-paced 
  modules, instructor-led sessions, or blended learning approaches, the platform 
  ensures a seamless and interactive learning journey.
</p>

<p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-4">
  With structured course pathways, multimedia content, and real-time progress 
  tracking, learners can stay motivated and achieve better outcomes. Educators 
  can also design and deliver content efficiently while monitoring student 
  performance at every stage.
</p>

<p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-6">
  By combining technology with effective teaching strategies, our learning models 
  create a dynamic environment that supports continuous improvement, skill 
  development, and long-term academic success.
</p>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-1/2">
      <img
        src="/learning.png"
        alt="Vidya ERP Dashboard"
        className="w-[85%] md:w-[75%] lg:w-[70%] h-auto mx-auto object-contain"
      />
    </div>

  </div>
</section>

<section className="w-full bg-white py-10 md:py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="w-14 h-2 bg-[#FF9100] mx-auto rounded-full mb-4"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d52d9]">
            Powerful LMS Features
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8">

          {/* 🔥 LEFT LIST */}
          <div className="space-y-4 order-1">
            {leftFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#4A3AFF] mt-1 text-sm" />
                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* 🔥 CENTER IMAGE */}
          <div className="flex justify-center order-2">
            <img
              src="/laptop2.png"
              alt="LMS Dashboard"
              className="w-[85%] sm:w-[70%] lg:w-[full] max-w-md object-contain hover:-translate-y-2 duration-300 "
            />
          </div>

          {/* 🔥 RIGHT LIST */}
          <div className="space-y-4 order-3">
            {rightFeatures.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#4A3AFF] mt-1 text-sm" />
                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

<section className="w-full bg-[#FBFBFC] max-[400px]:px-4 md:px-16 py-10 md:py-18 px-8">
  
  {/* Max-width container */}
  <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
    
    {/* Orange Line */}
    <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-8"></div>

    {/* Heading */}
    <h2 className="text-[28px] uppercase sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#4c3bcf] leading-tight mb-6 tracking-tight">
      ON-Boarding Process
    </h2>

    {/* Subtext */}
    <p className="italic text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-relaxed font-semibold max-w-4xl mb-8 sm:mb-10">
      To support institutions in adapting to modern digital learning environments, 
      we offer a seamless onboarding experience with a free trial to help you get started quickly and efficiently.
    </p>

    {/* 🔥 IMAGE SECTION */}
    <div className="w-full flex justify-center">
      <img
        src="/onboarding.png"  // 👈 apni generated image ka path
        alt="Onboarding Process"
        className="w-full max-w-5xl h-auto object-contain"
      />
    </div>

  </div>
</section>

<section className="w-full bg-[#1E266E] py-10 md:py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Orange Accent Line */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mx-auto mb-6"></div>

        {/* Main Heading */}
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
          Here's what our Customers have to Say About Us
        </h2>

        {/* Static Quote Icon */}
        <div className="flex justify-center mb-6">
          <FaQuoteLeft className="text-white opacity-20 text-5xl md:text-6xl" />
        </div>

        {/* Testimonial Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed font-medium mb-8">
            "The transition to VidyaEnroll was incredibly smooth for our management and staff. 
            The automated admission rounds and real-time vacancy tracking have transformed how we 
            handle peak enrollment seasons. It’s reliable, fast, and exactly what we needed."
          </p>
          
          {/* Author/Client Info */}
          <div className="mt-8">
            <h4 className="text-[#FF9100] font-bold text-lg md:text-xl uppercase tracking-wider">
              Principal, Global Education Academy
            </h4>
            <p className="text-gray-300 text-sm mt-1">
              Trusted Partner since 2024
            </p>
          </div>
        </div>

      </div>
    </section>


    <section className="w-full py-6 sm:py-10 px-4 md:px-20 lg:px-24 ">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col items-center mb-12">
              <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#001529] text-center">
                Frequently Asked <span className="text-[#3d52d9]">Questions</span>
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
                    <span className={` text-sm sm:text-lg font-semibold ${activeIndex === index ? 'text-[#3d52d9]' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                   <FaChevronDown 
      className={`text-[#FF9100] transition-transform duration-300 flex-shrink-0 ${
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
export default VidyaLMS