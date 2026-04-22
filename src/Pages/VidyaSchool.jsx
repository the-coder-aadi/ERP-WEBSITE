import Navbar from "../Components/Navbar"
import { useState,useEffect } from "react";
import Demo from "../Components/demo";
import SideElements from "../Components/SideElements";
import Footer from "../Components/Footer";
import {
FaUserEdit, 
  FaUserCheck, 
  FaCreditCard, 
  FaBookOpen, 
  FaBus, 
  FaMobileAlt,
  FaChevronDown} from "react-icons/fa";
import {
  FaChevronLeft, FaChevronRight} from "react-icons/fa";
function VidyaSchool() {

      const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


const modules = [
  { 
    title: "Student Information System", 
    desc: "Manage complete student profiles, from enrollment to digital documents and academic history." 
  },
  { 
    title: "Smart Attendance & SMS", 
    desc: "Automated attendance tracking with instant SMS alerts to parents for real-time updates." 
  },
  { 
    title: "Homework & Assignment", 
    desc: "Digital classroom management where teachers can assign and evaluate homework online." 
  },
  { 
    title: "Fee & Fine Management", 
    desc: "Simplified fee collection with automated invoices, reminders, and online payment gateway." 
  },
  { 
    title: "Transport & GPS Tracking", 
    desc: "Efficient route management with real-time GPS tracking for student safety and bus schedules." 
  },
  { 
    title: "Exam & Report Cards", 
    desc: "Effortless result processing and automatic generation of professional CBSE/ICSE pattern report cards." 
  }
];

const faqs = [
  {
    question: "What is Vidya School ERP?",
    answer: "Vidya School ERP is a comprehensive digital platform designed to automate school management, covering everything from student admissions and academics to fees and daily school administration."
  },
  {
    question: "Who can benefit from the School ERP system?",
    answer: "Our ERP is designed for all school stakeholders—Principals, Teachers, Students, Parents, and Office Staff. Everyone gets a dedicated interface to manage their daily tasks and communications."
  },
  {
    question: "How does it help parents track their child's progress?",
    answer: "Parents get real-time access to attendance, homework, exam results, and fee status through our dedicated Parent Portal and Mobile App with instant push notifications."
  },
  {
    question: "Does it support homework and lesson planning?",
    answer: "Yes, teachers can upload daily homework, share study materials, and create detailed lesson plans that are instantly visible to students and parents on their dashboards."
  },
  {
    question: "Can it handle complicated fee structures?",
    answer: "Absolutely. The system manages diverse fee categories, sibling discounts, fine calculations, and allows parents to pay online securely via an integrated payment gateway."
  },
  {
    question: "Is there a module for School Transport management?",
    answer: "Yes, our Transport Module manages bus routes, student mapping, and vehicle records. It even supports real-time GPS tracking for enhanced student safety during commutes."
  },
  {
    question: "Does it help in generating CCE and CBSE pattern report cards?",
    answer: "Yes, Vidya School ERP automates the grading process and generates professional report cards as per CBSE, ICSE, or any specific State Board pattern with just a few clicks."
  },
  {
    question: "Can we manage multiple school branches centrally?",
    answer: "Yes, our multi-school architecture allows management to have a bird's-eye view of all branches while each school operates independently on the same platform."
  },
  {
    question: "Is technical support provided after implementation?",
    answer: "We offer 24/7 dedicated technical support. Our team provides hands-on training to your staff to ensure smooth daily operations and quick query resolution."
  },
  {
    question: "How can we book a free demo for our school?",
    answer: "You can simply click the 'Schedule a Free Demo' button or contact our support team. We will arrange a personalized walkthrough tailored to your school's specific needs."
  }
];

const featuresData = [
  {
    icon: <FaUserEdit />,
    title: "Student & Admission Hub",
    description: "Streamline the entire school admission process with digital forms, document uploads, and centralized student database."
  },
  {
    icon: <FaUserCheck />,
    title: "Attendance & SMS Alerts",
    description: "Automate daily attendance tracking and send instant SMS notifications to parents for real-time safety and monitoring."
  },
  {
    icon: <FaCreditCard />,
    title: "Fee & Fine Automation",
    description: "Manage complex fee structures, collect online payments, send reminders, and track financial records with ease."
  },
  {
    icon: <FaBookOpen />,
    title: "Homework & Academics",
    description: "Digitize daily homework, manage lesson plans, and automate report card generation based on CBSE/ICSE patterns."
  },
  {
    icon: <FaBus />,
    title: "Transport & GPS Tracking",
    description: "Ensure student safety with efficient route management, vehicle records, and real-time GPS tracking for school buses."
  },
  {
    icon: <FaMobileAlt />,
    title: "Parent-Teacher Mobile App",
    description: "Enhance communication with a dedicated app for notices, homework, fee updates, and event calendars at fingertips."
  }
];


      const [index, setIndex] = useState(0);
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
    
      // 👉 next
      const nextSlide = () => {
        setIndex((prev) => prev + cardsPerView);
      };
    
      const prevSlide = () => {
        setIndex((prev) => prev - cardsPerView);
      };
    
      // 👉 auto scroll
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide(); // 👉 always forward
        }, 6000);
    
        return () => clearInterval(interval);
      }, [cardsPerView]);
    
      useEffect(() => {
        if (index >= total * 2) {
          setTimeout(() => {
            setTransition(false);
            setIndex(total); // center reset
    
            setTimeout(() => {
              setTransition(true);
            }, 50);
          }, 700);
        }
      }, [index, total]);
    return(
        <div  className="min-h-screen bg-white relative">
 <Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
               Smart ERP for Schools
                & K-12 Education
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
             Powerful & Flexible
               ERP for School Management
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/withlaptop.jpg"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/withlaptopformo.jpg" // Yahan apni mobile wali image ka path dalo
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
                Smart ERP for Schools <br /> 
                & K-12 Education
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[23px] md:text-[28px]  lg:text-[34px] font-semibold text-[#ffffff] leading-[1.9] lg:leading-[1.6]  ">
               Powerful & Flexible<br />
               ERP for School Management
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
        <a href="#request-demo" className="mx-auto w-fit mt-4 block px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Request for Free Demo
        </a>
      </div>


   <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/school.jpg" // 👈 apni image daal
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
              What is Vidya School ERP Software?
            </h2>

            {/* description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                   Vidya School ERP is a smart, cloud-based software designed to simplify and
        manage all school operations in one place. It seamlessly connects
        administrators, teachers, students, and parents into a unified digital system.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
             From admissions and attendance to exams, fee management, report cards,
        and communication — everything is handled efficiently, reducing manual
        effort and saving valuable time for staff and management.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Whether it's a small school or a large institution, Vidya School ERP adapts
        to your needs and helps improve productivity with automation, accuracy,
        and real-time insights.

            </p>

            {/* 🔥 feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Student Admission & Records
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Attendance & Exam Management
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Fees & Report Cards
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                ✅ Smart Reports & Analytics

              </div>
            </div>


          </div>
        </div>
      </section>


<section className="w-full bg-white py-0 m sm:py-12 md:py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 sm:gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">

      {/* small tag */}
      <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

      {/* heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
        Why Choose Vidya School ERP Software?
      </h2>

      {/* description */}
     <div className="space-y-4 mb-6 text-left">

  <div className="flex items-start gap-3">
    <span className="text-blue-500 text-lg">✔️</span>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Easy-to-use school ERP software designed to manage all academic and administrative tasks efficiently in one place.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-blue-500 text-lg">✔️</span>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Cloud-based system that allows secure access to data anytime, anywhere while ensuring complete data safety.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-blue-500 text-lg">✔️</span>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Automates daily school operations like attendance, fee management, exams, and timetable management.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-blue-500 text-lg">✔️</span>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Improves communication between teachers, students, and parents with a centralized digital platform.
    </p>
  </div>
    <div className="flex items-start gap-3">
    <span className="text-blue-500 text-lg">✔️</span>
    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Our online admission management system will streamline enrollment to minimize manual activities and also improve admission performance. Data-driven insights through powered AI-enabled reports and analytics on digital school software to find fee defaulters, maximise teacher workload, and make data-informed academic decisions.
    </p>
  </div>

</div>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-1/2">
      <img
        src="/handshake.jpg"
        alt="Vidya ERP Dashboard"
        className="w-full h-full object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
      />
    </div>

  </div>
</section>


      <section className="w-full bg-[#F9FAFB] py-12 sm:py-16 px-3 sm:px-6 overflow-hidden">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-8 lg:mb-12">
          <div className="w-14 h-2.5 bg-secondary mx-auto rounded-full mb-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
           Vidya School ERP Modules
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            A Single Platform for All Your Educational Needs
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
          Vidya School ERP Software – Key Features
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
    )
}
export default VidyaSchool