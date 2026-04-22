import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { useEffect, useRef, useState } from "react";
import KeyFeatures from "../Components/KeyFeatures";
import Demo from "../Components/demo";
import {
  FaChevronLeft, FaChevronRight, FaUserGraduate,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaChalkboardTeacher,
  FaChartLine,
  FaShieldAlt,
  FaChevronDown} from "react-icons/fa";


function VidyaUniversity() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const faqs = [
  {
    question: "What is Vidya College ERP?",
    answer: "Vidya College ERP is a specialized module of Vidya ERP designed to manage the complex administrative and academic workflows of Higher Education Institutions (HEIs), including colleges and universities."
  },
  {
    question: "Who can use the College ERP system?",
    answer: "It is built for all campus stakeholders—Management, Faculty, Students, Parents, and Administrative staff. Each user has a personalized dashboard to track their specific activities."
  },
  {
    question: "How does it handle the Choice Based Credit System (CBCS)?",
    answer: "Our College ERP fully supports CBCS and NEP guidelines, allowing students to choose elective subjects and helping administrators manage credits and grading automatically."
  },
  {
    question: "Does it manage Faculty and HR operations?",
    answer: "Yes, it includes a dedicated Faculty Management system for tracking attendance, leaves, research publications, and performance (API/PBAS) required for appraisals."
  },
  {
    question: "Can it handle University-level Exam Management?",
    answer: "Absolutely. From enrollment and hall ticket generation to result processing and mark sheet printing, our 'EasyPariksha' module handles the entire examination lifecycle."
  },
  {
    question: "Does it support online fee payments for students?",
    answer: "Yes, students can pay their tuition, exam, and hostel fees through an integrated payment gateway via the web portal or the mobile app."
  },
  {
    question: "Is Vidya College ERP helpful for NAAC and NIRF accreditation?",
    answer: "Yes, our 'EasyAccredit' module automatically compiles data for various criteria of NAAC and NIRF, making the report generation process much faster."
  },
  {
    question: "Can we manage multiple campuses under one University ERP?",
    answer: "Yes, it supports multi-campus architecture. The university can have centralized control while individual colleges manage their own daily operations."
  },
  {
    question: "Is technical support provided after implementation?",
    answer: "We provide 24/7 dedicated technical support. Our team ensures that your staff is well-trained and any queries are resolved on priority."
  },
  {
    question: "How can we book a personalized demo for our institution?",
    answer: "You can click on the 'Schedule a Free Demo' button on our website, or contact our sales team to see how Vidya College ERP can transform your campus."
  }
];

 const featuresData = [
  {
    icon: <FaUserGraduate />,
    title: "Student Information System",
    description: "Manage complete student lifecycle from admission to alumni with centralized data, profiles, and academic records."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Attendance & Examination",
    description: "Automate attendance tracking and streamline exam management with digital evaluations and real-time result processing."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Fees & Finance Management",
    description: "Simplify fee collection, generate invoices, track payments, and manage financial reports with complete transparency."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Faculty & HR Management",
    description: "Efficiently handle staff records, payroll, leave management, and performance tracking in one integrated system."
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reports",
    description: "Gain actionable insights with advanced dashboards, real-time analytics, and customizable reports for better decision making."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Cloud Platform",
    description: "Ensure data security with cloud-based infrastructure, role-based access control, and reliable system performance."
  }
];



  const modules = [
    { title: "Admission Management", desc: "Streamline student admissions with automation." },
    { title: "Attendance System", desc: "Track attendance with real-time analytics." },
    { title: "Examination Module", desc: "Manage exams, results, and grading easily." },
    { title: "Fees Management", desc: "Automate fee collection and reporting." },
    { title: "HR & Payroll", desc: "Handle staff records and payroll efficiently." },
    { title: "Library System", desc: "Digitize and manage library operations." }
  ];
 const [index, setIndex] = useState(modules.length);
  const total = modules.length;

  const [transition, setTransition] = useState(true);
  // 👇 3x clone (important)
  const extended = [...modules, ...modules, ...modules];


  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalSlides = modules.length;
  // 👉 next
const nextSlide = () => {
  setIndex((prev) => prev + 1);
};

const prevSlide = () => {
  setIndex((prev) => prev - 1);
};
  // 👉 auto scroll
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 6000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (index >= modules.length * 2) {
    setTimeout(() => {
      setTransition(false);
      setIndex(modules.length); // silently jump back
      setTimeout(() => setTransition(true), 50);
    }, 600);
  }

  if (index < modules.length) {
    setTimeout(() => {
      setTransition(false);
      setIndex(modules.length * 2 - 1);
      setTimeout(() => setTransition(true), 50);
    }, 600);
  }
}, [index]);



  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />


      <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
              Next-Gen ERP for Universities
              & Higher Education
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
             Smart & Scalable
                ERP Platform for Universities
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/technology.jpg"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/tech.jpg" // Yahan apni mobile wali image ka path dalo
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
              <h1 className="text-secondary text-[19px] sm:text-[26px] md:text-[30px] lg:text-[43px]  font-bold tracking-wide mb-2 opacity-90">
                Next-Gen ERP for Universities <br />
                & Higher Education
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[22px] md:text-[26px]  lg:text-[34px] font-semibold text-[#ffffff] leading-[1.9] lg:leading-[1.6]  ">
                Smart & Scalable <br />
                ERP Platform for Universities
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
        <a href="#request-demo" className="mx-auto w-fit mt-4 block px-4 py-2 rounded-lg bg-primary  text-white font-bold text-sm shadow-lg transition-all ">
          Request for Free Demo
        </a>
      </div>

      <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/clgerp2 (1).jpg" // 👈 apni image daal
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
              What is Vidya College ERP?
            </h2>

            {/* description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Vidya College ERP is a modern, cloud-based platform designed to
              simplify and streamline all campus operations. It connects
              administration, faculty, students, and parents into one powerful
              digital ecosystem.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              From admissions and attendance to examinations, fee management,
              payroll, and academic tracking — everything is managed efficiently
              from a single platform, reducing manual work and improving accuracy.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Whether you're a growing college or a large university, Vidya ERP
              adapts to your needs and helps you achieve operational excellence
              with smart automation and real-time insights.
            </p>

            {/* 🔥 feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Admission & Student Management
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Attendance & Exams Automation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Fees & Payroll System
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ AI-Based Reports & Analytics
              </div>
            </div>

      

          </div>
        </div>
      </section>


      <section className="w-full bg-[#F9FAFB] py-12 sm:py-16 px-3 sm:px-6 overflow-hidden">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-8 lg:mb-12">
          <div className="w-14 h-2.5 bg-secondary mx-auto rounded-full mb-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Vidya ERP Modules
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Everything you need to manage your institution efficiently
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">

          {/* Track */}
          <div
            className="flex"
style={{
  transform: `translateX(-${index * (100 / cardsPerView)}%)`,
  transition: transition ? "transform 0.7s ease-in-out" : "none"
}}
          >
            {extended.map((item, i) => (
              <div
                key={i}
                className="w-full min-[450px]:w-1/2 md:w-1/3 px-5 sm:px-4 py-6 flex-shrink-0"
              >
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 h-full">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E6E8FF] text-primary flex items-center justify-center rounded-full font-bold mb-4">
                    {item.title.charAt(0)}
                  </div>

                  <h3 className="font-semibold text-[15px] sm:text-[17px] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 md:p-3 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 md:p-3 rounded-full z-10"
          >
            <FaChevronRight />
          </button>

        </div>
      </section>
<div className="w-full  max-[400px]:px-4 md:px-16 py-7 md:py-12 px-4">
     <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[22px] uppercase sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-primary leading-tight mb-8 tracking-tight">
          Vidya College ERP - Key Features
        </h2>



      </div>
       <section className="w-full mt-2 sm:mt-6 ">
      <div className="max-w-[1400px] mx-auto grid sm:gap-6  grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {featuresData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border-[1.5px] will-change-contents border-blue-100 rounded-[15px] max-[400px]:p-4 p-5 md:p-6 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
          >
            {/* Icon Box */}
            <div className="w-20 h-20  flex items-center justify-center mb-8 max-[400px]:mb-2">
              <span className=" text-secondary text-[45px]">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-medium text-primary mb-4 tracking-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-[15px] leading-[1.7] font-medium">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>

</div>

    <section className="w-full mt-4 sm:mt-8  py-5 sm:py-8 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* ===== Section 1 ===== */}
    <div className="mb-12">
      
      {/* Small Line */}
      <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold sm:font-bold text-gray-800 mb-6">
        Key Benefits of Vidya ERP
      </h2>

      {/* List */}
      <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
        <li>• Smart automation reduces manual administrative workload.</li>
        <li>• Centralized dashboard for real-time monitoring of all activities.</li>
        <li>• Seamless communication between students, faculty, and parents.</li>
        <li>• Cloud-based access ensures data availability anytime, anywhere.</li>
        <li>• Scalable system suitable for colleges of all sizes.</li>
      </ul>
    </div>

    {/* ===== Section 2 ===== */}
    <div>
      
      {/* Small Line */}
      <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold sm:font-bold text-gray-800 mb-6">
        Why Institutions Choose Vidya ERP
      </h2>

      {/* List */}
      <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
        <li>• Improves overall efficiency of academic and administrative processes.</li>
        <li>• Provides secure and structured data management system.</li>
        <li>• Enhances decision-making with detailed analytics and reports.</li>
        <li>• Supports digital transformation of campuses.</li>
        <li>• Trusted solution for modern, future-ready institutions.</li>
      </ul>
    </div>

  </div>
</section>

<section className="w-full py-6 sm:py-10 px-4 md:px-20 lg:px-32 ">
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
  );
}

export default VidyaUniversity;