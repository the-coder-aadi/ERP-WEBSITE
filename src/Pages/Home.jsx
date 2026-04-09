import Navbar from "../Components/Navbar";
import { motion, useInView,AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import RequestDemo from "../Components/RequestDemo";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";

function Home() {


const stories = [
    "The organization, whether small or large, needs easy access to online services, to handle their data and manage educational requirements in a cost-effective and efficient way. When we started to move towards the ERP system for our institute, it was full of challenges. The market is full of companies providing ERP services. But to get a good one and trustworthy is a hard nut to crack. When",
    "The most challenging aspect for an educational institute is to manage its data and handle their educational operations via an online platform. The edupluscampus is helping organizations like us to manage our data and work online smoothly. It is one of the most reliable and trustworthy entities to rely on. The best about edupluscampus is its flexibility and cost involved. In the very nominal charges,",
    "With the growing number of students and staff in our well-esteemed organization, we were looking for an end-to-end technical solution to meet our data management requirements. We opted for edupluscampus cloud-based solution and are using their products like smart ERP, LMS, EasyCheck and OBE tool. All I can say is that our data handling has become so smooth and"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };
  

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5 sec
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="sm:text-7xl text-6xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}


const dummyVideos = [
  {
    id: 1,
    // School/Education related
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-a-classroom-writing-on-a-notebook-811-large.mp4",
    name: "Dr. Ramesh Verma",
    role: "Principal, ABC International"
  },
  {
    id: 2,
    // Office/Professional meeting
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-around-a-table-1087-large.mp4",
    name: "Mrs. Sunita Rao",
    role: "Director, City College"
  },
  {
    id: 3,
    // Modern Campus/Student life
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-student-working-on-a-laptop-in-a-library-809-large.mp4",
    name: "Prof. Anil Kapoor",
    role: "HOD, Tech University"
  }
];



const clientsData = [
  {
    name: "Chinchwad University, Pune",
    logo: "6 (1).png",
    textColor: "text-red-900"
  },
  {
    name: "Vishwakarma University, Pune",
    logo: "3.webp",
    textColor: "text-orange-900"
  },
  {
    name: "Deccan Education Society Pune University (DESPU)",
    logo: "3 (2).webp",
    textColor: "text-gray-900"
  },
  {
    name: "PCCOE - Pimpri Chinchwad College of Engineering",
    logo:"11 (1).webp",
    textColor: "text-blue-900"
  },
  {
    name: "Vishwakarma Institute of Technology (VIT), Pune",
    logo: "1.webp",
    textColor: "text-sky-900"
  },
  {
    name: "NICMAR University, Pune",
    logo: "NICMAR.webp",
    textColor: "text-rose-900"
  }
];

const SchoolsData = [
  {
    name: "Sanjivani Academy",
    logo: "school1.webp",
    textColor: "text-red-900"
  },
  {
    name: "Sanjivani Jr. College",
    logo: "school2.webp",
    textColor: "text-orange-900"
  },
  {
    name: "Sanjivani Toddlers",
    logo: "school3.webp",
    textColor: "text-gray-900"
  },
  {
    name: "S.M.K.D.E Society",
    logo:"school4.webp",
    textColor: "text-blue-900"
  },
  {
    name: "Tilak Maharashtra Vidyalaya",
    logo: "school5.webp",
    textColor: "text-sky-900"
  },
  {
    name: "Universal Wisdom School",
    logo: "school6.webp",
    textColor: "text-rose-900"
  }
];

const doubledClients = [...clientsData, ...clientsData,...clientsData,...clientsData];

const doubleschool = [...SchoolsData, ...SchoolsData,...SchoolsData,...SchoolsData];

const solutionsData = [
  {
    icon: <FaUniversity/>, // Material Icon name
    title: "EduplusCollege",
    description: "A multipurpose cloud-based ERP software for colleges and higher institutions with 25+ modules for achieving better learning outcomes"
  },
  {
    icon: <FaSchool/>, 
    title: "EduplusSchool",
    description: "A cutting-edge school ERP software that allows institutions for superior teaching-learning pedagogies that ensure better outcomes for every child"
  },
  {
    icon: <FaBookOpen/>, 
    title: "EduplusLMS",
    description: "Whether you want to get an overview of the courses or collaborate within the system, create administer and score tests and generate reports, the Eduplus LMS provides a comprehensive solution for all your needs"
  },
  {
    icon: <FaCheckSquare/>, 
    title: "EasyCheck",
    description: "EasyCheck Evaluation System is an online answer checker that reduces the tedious and labour intensive process of traditional paper checking by digitizing the marksheets"
  },
  {
    icon: <FaLaptopCode/>, 
    title: "EasyPariksha",
    description: "A robust AI-based online proctoring exam tool that helps educational institutes design, schedule and deliver assessments online seamlessly"
  },
  {
    icon: <FaCertificate/>, 
    title: "EasyAccredit",
    description: "Analyse and assess the progress of the students on various parameters to meet the guidelines set by various accreditation bodies like NAAC, NBA, etc."
  }
];





  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      {/* Mobile Content Area: Below navbar, above poster on small screens */}
      <div className="hidden max-[900px]:block px-4 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <p className="text-[#0303c3] text-[18px] max-[400px]:text-[14.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
              ERP for Smart Campuses of the Future.
            </p>
            <h1 className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
              Redefining Education 
              with <span className="text-[#ffffff] bg-[#FF9100] px-2 rounded-md">All-In-One</span> <br />
              End-to-End <span className="text-[#ffffff] bg-[#FF9100] px-2 rounded-md">ERP Solution</span> 
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full h-[600px] max-[900px]:h-auto overflow-hidden bg-[#001529]">
        
        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full max-[900px]:h-auto">
         <img 
    src="/erpBanner.jpg" 
    alt="ERP Banner Desktop" 
    className="hidden min-[501px]:block w-full h-full object-cover object-top"
  />

  {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
  <img 
    src="/erpmobileposter.jpeg" // Yahan apni mobile wali image ka path dalo
    alt="ERP Banner Mobile" 
    className="block min-[501px]:hidden w-full h-auto object-cover"
  />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-[1500px] mx-auto h-full px-6 flex items-start pt-16 md:pt-2 lg:pt-3">
            
            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[900px]:hidden  flex-col  items-start whitespace-nowrap">
              
              {/* 1. Small Heading: Size kam kiya hai */}
              <p className="text-[#0303c3] text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px]  font-bold tracking-wide mb-2 opacity-90">
                ERP for Smart Campuses of the Future.
              </p>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <h1 className="text-[16px] sm:text-[20px] md:text-[25px]  lg:text-[28px] font-semibold text-[#3a3a3a] leading-[2.3] lg:leading-[1.6]  ">
                Redefining Education 
                with <span className="text-[#ffffff] bg-[#FF9100] px-2 rounded-md">All-In-One</span> <br/>
                End-to-End <span className="text-[#ffffff] bg-[#FF9100] px-2 rounded-md">ERP Solution</span> 
              </h1>
              
            
            </div>

            {/* Right Side: Enquiry Form (Visible only above 900px) */}
<div className="hidden min-[900px]:block  lg:w-[300px] ml-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 self-center">
  {/* Form Header */}
  <div className="bg-white px-6 py-2 border-b border-gray-50 flex items-center justify-center gap-2">
    <span className="material-symbols-outlined text-[#FF9100] text-[22px] fill-1">send</span>
    <h3 className="text-[17px] font-extrabold text-[#2C84D5] uppercase tracking-tight">Enquiry Form</h3>
  </div>

  <form className="p-4 flex flex-col gap-1.5">
    {/* Section Title */}
    <div className="flex items-center gap-2 mb-1">
      <span className="material-symbols-outlined text-[#2C84D5] text-[18px]" style={{fontSize:"14px"}}>account_circle</span>
      <span className="text-[11px] font-bold text-[#2C84D5] uppercase tracking-wider">Your Details</span>
    </div>

    {/* Input Fields with Icons */}
    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"18px"}}>person</span>
      <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5] transition-all placeholder:text-gray-300" />
    </div>

    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"18px"}}>mail</span>
      <input type="email" placeholder="you@example.com" className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5] transition-all placeholder:text-gray-300" />
    </div>

    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"18px"}}>smartphone</span>
      <input type="tel" placeholder="+91..." className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5] transition-all placeholder:text-gray-300" />
    </div>

    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"18px"}}>badge</span>
      <select className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-8 py-2 text-sm outline-none focus:border-[#2C84D5] transition-all text-gray-400 appearance-none">
        <option>Select Position</option>
        <option>Principal</option>
        <option>Director</option>
        <option>Teacher</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">arrow_drop_down</span>
    </div>

    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-[18px]" style={{fontSize:"18px"}}>chat</span>
      <textarea placeholder="Message for us..." rows="1" className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5] transition-all placeholder:text-gray-300 resize-none"></textarea>
    </div>

    {/* Captcha Section (Same as Photo) */}
    <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-gray-100">
      <div className="flex items-center gap-3">
        <div className="bg-white px-3 py-1 border border-gray-200 rounded font-mono font-bold tracking-[5px] text-md select-none italic text-gray-700 shadow-sm">
          KY4ABQ
        </div>
        <button type="button" className="material-symbols-outlined text-blue-500 hover:rotate-180 transition-all duration-500">cached</button>
      </div>
      <p className="text-[10px] font-bold text-red-500 animate-pulse">New CAPTCHA in 72s</p>
      <input type="text" placeholder="ENTER CAPTCHA" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-center text-xs outline-none focus:border-[#2C84D5] uppercase tracking-widest" />
    </div>

    {/* Send Enquiry Button (Orange with Icon) */}
    <button className="w-full bg-gradient-to-r from-[#FF8E00] to-[#FF6200] hover:from-[#FF6200] hover:to-[#FF8E00] text-white font-extrabold py-2.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-1 group">
      <span className="uppercase tracking-wider text-[12px]">Send Enquiry</span>
      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={{fontSize:"18px"}}>send</span>
    </button>
  </form>
</div>

          </div>
        </div>

        {/* Schedule Button: Centered on poster for desktop */}
  <button className="schedule-btn !hidden min-[900px]:!inline-flex absolute bottom-18 left-1/2 -translate-x-1/2 z-10 px-8 py-3 rounded-lg bg-orange-500 text-white font-bold text-lg shadow-lg transition-all hover:bg-blue-600">
  Schedule a Free Demo
</button>
      </section>

      {/* Mobile button: below poster and smaller on small screens */}
      <div className="max-[900px]:block hidden">
        <button className="mx-auto mt-4 block px-6 py-2 rounded-lg bg-orange-500 text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Schedule a Free Demo
        </button>
      </div>



  {/* --- MOBILE/TABLET WALA FORM (Hero ke niche) --- */}
<div className="min-[900px]:hidden w-full px-4 py-6 bg-[#FBFBFC]">
  <div className="max-w-[450px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
    
    {/* Form Header - Height kam ki hai */}
    <div className="bg-white px-5 py-3 border-b border-gray-50 flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[#FF9100] text-[20px]">send</span>
      <h3 className="text-[16px] font-extrabold text-[#2C84D5] uppercase tracking-tight">Enquiry Form</h3>
    </div>

    <form className="p-4 flex flex-col gap-2.5"> {/* Gap kam kiya hai */}
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-1">
        <span className="material-symbols-outlined text-[#2C84D5] text-[18px]" style={{fontSize:"17px"}}>account_circle</span>
        <span className="text-[11px] font-bold text-[#2C84D5] uppercase tracking-wider">Your Details</span>
      </div>

      {/* Input Fields - Padding kam ki hai height ghatane ke liye */}
      <div className="space-y-2"> {/* Space-y-3 se space-y-2 kiya */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"17px"}}>person</span>
          <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5]" />
        </div>

        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]"
          style={{fontSize:"17px"}}>mail</span>
          <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5]" />
        </div>

        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"17px"}}>smartphone</span>
          <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5]" />
        </div>

        <div className="relative text-[#888585]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{fontSize:"17px"}}>badge</span>
          <select className="w-full border border-gray-200 rounded-lg pl-10 pr-8 py-2 text-sm outline-none focus:border-[#2C84D5] appearance-none bg-white">
            <option>Select Position</option>
            <option>Principal</option>
            <option>Director</option>
            <option>Teacher</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">arrow_drop_down</span>
        </div>

        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-[18px]" style={{fontSize:"17px"}}>chat</span>
          <textarea placeholder="Message..." rows="2" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-[#2C84D5] resize-y min-h-[30px]"></textarea>
        </div>
      </div>

      {/* Captcha Section - Ise bhi compact kiya hai */}
      <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1 border border-gray-200 rounded font-mono font-bold tracking-[4px] text-base italic text-gray-700">
            KY4ABQ
          </div>
          <button type="button" className="material-symbols-outlined text-blue-500 text-2xl">cached</button>
        </div>
        <input type="text" placeholder="ENTER CAPTCHA" className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-center text-xs outline-none focus:border-[#2C84D5] uppercase tracking-widest" />
      </div>

      {/* Submit Button - Padding adjust ki hai */}
      <button className="w-full bg-gradient-to-r from-[#FF8E00] to-[#FF6200] text-white font-bold py-2 sm:py-3 rounded-lg shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all mt-1">
        <span className="uppercase tracking-wider text-[13px]">Send Enquiry</span>
        <span className="material-symbols-outlined text-[18px]">send</span>
      </button>
    </form>
  </div>
</div>

{/* --- About/Empower Section (Right After Hero) --- */}
<section className="w-full bg-white py-18 md:py-25 px-10  max-[400px]:px-4 md:px-20 lg:px-32 overflow-hidden">
  
  {/* Container ki max-width kam ki hai (1400px -> 1200px) taaki sides se padding zyada dikhe */}
  <div className="max-w-[1200px] mx-auto flex flex-col min-[1000px]:flex-row items-center gap-16 lg:gap-30">
    
    {/* Left Side: Bulb Graphic - Size aur chota kiya hai */}
    <div className="w-full min-[1000px]:w-[40%] flex justify-center">
      <div className="relative max-w-[220px] sm:max-w-[260px] lg:max-w-[260px] w-full">
        <img 
          src="/Empower.svg" 
          alt="Empowering Education Bulb" 
          className="w-full h-auto object-contain will-change-contents transition-transform scale-125 duration-500 hover:-translate-y-3"
        />
      </div>
    </div>

    {/* Right Side: Content Area - Width thodi kam ki hai (65% -> 60%) */}
    <div className="w-full min-[1000px]:w-[60%] flex flex-col items-start">
      
      {/* Orange Accent Line */}
      <div className="w-15 h-[10px] bg-[#FF9100] rounded-full mb-6"></div>

      {/* Main Heading - Responsive sizing */}
      <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-semibold text-[#3f3f3f] leading-[1.3] mb-6 tracking-tight">
        Empowering Schools, Colleges and Universities with Smart Digital Solutions
      </h2>

      {/* Description Paragraphs */}
      <div className="space-y-6 text-gray-500 text-[14px] md:text-[15.5px] leading-[1.8] text-justify font-medium opacity-90">
        <p>
          Supporting the Digital Transformation of Schools, Colleges, and Universities 
          with the best ERP software solutions. EduplusCampus offers the best ERP 
          software in India, delivering a comprehensive suite of online solutions to 
          revolutionize the teaching-learning experience and streamline the operations 
          of educational institutions.
        </p>
        
        <p>
          Whether you're managing a school, college, or university, our platform is 
          designed to meet your unique needs. EduplusCampus ERP Software empowers 
          management, students, teachers, and parents by addressing key challenges 
          in the education sector through smart, scalable, and user-friendly ERP solutions.
        </p>
      </div>
    </div>

  </div>
</section>

    <main className="w-full bg-[#FBFBFC] max-[400px]:px-4 md:px-16 py-14 md:py-18 px-8">
      
      {/* Max-width container to keep content centered */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-8"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#4c3bcf] leading-tight mb-8 tracking-tight">
          SMART CLOUD-BASED SOLUTIONS
        </h2>

        {/* 3. Sub-text (Italicized Description) */}
        {/* 'italic' class aur professional font style use kiya hai readability ke liye */}
        <p className="italic text-gray-700 text-[15px] sm:text-[16px] md:text-[20.5px]  leading-relaxed  font-semibold">
          Innovative solutions that cover all aspects of the administration of 
          educational institutes to empower educators and enhance student success
        </p>

      </div>


      <section className="w-full mt-12">
      <div className="max-w-[1400px] mx-auto grid sm:gap-6  grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {solutionsData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border-[1.5px] border-blue-100 rounded-[35px] max-[400px]:p-5 p-7 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
          >
            {/* Icon Box */}
            <div className="w-20 h-20  flex items-center justify-center mb-8 max-[400px]:mb-2">
              <span className=" text-[#FF9100] text-[45px]">
                {item.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-medium text-[#3d52d9] mb-4 tracking-tight">
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


    </main>

<section className="bg-[#2F2FB2] py-12 px-5 text-center">
    <div className="flex justify-center mb-4">
    <div className="w-14 h-2.5 bg-[#FF9100] rounded-full"></div>
  </div>
  <h2 className="text-white text-2xl md:text-[32px] font-bold mb-12">
    Elevate Learning with EduplusCampus
  </h2>

  <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 sm:gap-10">
    
    {/* ITEM */}
    <div className="flex flex-col items-center">
      
      {/* BOX */}
      <div className="border-4 border-white hover:-translate-y-2 transition-all duration-300  py-8 w-full">
        <Counter value={4} suffix="L+" />
      </div>

      {/* TEXT */}
      <p className="text-white font-semibold mt-2 text-2xl sm:text-3xl">Learners</p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center">
      <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300 ">
        <Counter value={142} suffix="+" />
      </div>
      <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Clients</p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center">
      <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300 ">
        <Counter value={47} suffix="+" />
      </div>
      <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Modules</p>
    </div>

  </div>
</section>


<section className="w-full bg-[#F9FAFB] py-12 sm:py-16 px-5">

  <div className="max-w-6xl mx-auto">

    {/* Top Line */}
    <div className="flex justify-center mb-4">
      <div className="w-14 h-2.5 bg-[#FF9100] rounded-full"></div>
    </div>

    {/* Heading */}
    <h2 className="text-center text-[#4c3bcf] text-2xl md:text-3xl font-semibold mb-6 sm:mb-12">
      EduplusCampus Offers
    </h2>

    {/* Content */}
    <div className="flex flex-col min-[900px]:flex-row items-center gap-8 sm:gap-10">

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2">
        <img
          src="/offer.webp"
          alt="offers"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* RIGHT LIST */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 min-[470px]:grid-cols-2 gap-y-4 gap-x-10">

        {[
          "Support and Training",
          "Mobile Applications",
          "Biometric",
          "Notification",
          "QR Code",
          "Barcode",
          "End-to-End Solutions",
          "Intuitive User Interface",
          "Dashboards and Reporting",
          "EduplusCampus Integration",
          "Easy integration with third-party API",
          "Data Security and Central Data Repository"
        ].map((item, index) => (
          
          <div
            key={index}
            className="flex items-center gap-3 text-gray-700 cursor-pointer 
            transition-all duration-300 hover:translate-x-2"
          >
            {/* Dot */}
          <div className="w-4 h-4 min-w-[16px] min-h-[16px] rounded-full bg-[#E6E8FF] flex items-center justify-center ">
    <div className="w-2 h-2 rounded-full bg-[#4c3bcf]"></div>
  </div>

            {/* Text */}
            <p className="text-[15px] font-medium">
              {item}
            </p>
          </div>

        ))}

      </div>

    </div>

  </div>

</section>


{/* --- INFINITE CLIENTS SCROLL SECTION --- */}
<section className="w-full bg-white px-5  py-8 sm:py-14 overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex flex-col items-center">
    
    <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-8"></div>
    <h2 className="sm:text-2xl text-xl md:text-4xl font-extrabold  text-[#3d52d9] mb-6 sm:mb-16 text-center">
      Our Prestigious Clients & 200+ More
    </h2>

    {/* Main Container - 'group' class add ki hai hover detect karne ke liye */}
    <div className="w-full bg-white border border-gray-100 shadow-md rounded-[10px] py-14 relative overflow-hidden">
      
      {/* Side Gradients (Overlay) */}


      {/* Scrolling Track */}
      <div className="animate-infinite-scroll flex items-center">
        {doubledClients.map((client, index) => (
          <div
            key={index}
            // individual item hover par bhi pura track rukega
            className="w-[300px] client-item shrink-0 flex flex-col items-center text-center px-6 gap-6 cursor-pointer"
          >
         <div className="h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
  <img 
    src={client.logo} 
    className="h-full w-auto object-contain max-w-[180px] opacity-80 group-hover:opacity-100 transition-opacity" 
  />
</div>
            <p className={`text-[14px] font-bold ${client.textColor} opacity-80 uppercase tracking-tight`}>
              {client.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>




<section className="w-full bg-white px-5 py-8 sm:py-14 overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex flex-col items-center">
    
    <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-8"></div>
    <h2 className="sm:text-2xl text-xl md:text-4xl font-extrabold  text-[#3d52d9] mb-6 sm:mb-16 text-center">
     Our School ERP Software – Trusted by Elite & Prestigious Schools
    </h2>

    {/* Main Container - 'group' class add ki hai hover detect karne ke liye */}
    <div className="w-full bg-white border border-gray-100 shadow-md rounded-[10px] py-14 relative overflow-hidden">
      
      {/* Side Gradients (Overlay) */}


      {/* Scrolling Track */}
      <div className="animate-infinite-scroll flex items-center">
        {doubleschool.map((client, index) => (
          <div
            key={index}
            // individual item hover par bhi pura track rukega
            className="w-[300px] client-item shrink-0 flex flex-col items-center text-center px-6 gap-6 cursor-pointer"
          >
         <div className="h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
  <img 
    src={client.logo} 
    className="h-full w-auto object-contain max-w-[180px] opacity-80 group-hover:opacity-100 transition-opacity" 
  />
</div>
            <p className={`text-[14px] font-bold ${client.textColor} opacity-80 uppercase tracking-tight`}>
              {client.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

<section className="w-full bg-[#1E56D1] px-2 py-10 mt-6 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* --- Orange Line --- */}
        <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-6"></div>

        {/* --- Heading --- */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 tracking-tight">
          Success Stories
        </h2>

        {/* --- Quote Icon --- */}
        <div className="text-white/30 mb-8">
          <FaQuoteLeft className="text-5xl md:text-6xl" />
        </div>

        {/* --- Content Area with Arrows --- */}
        <div className="relative w-full flex items-center justify-between gap-2 md:gap-10">
          
          {/* Left Arrow */}
          <button 
            onClick={prevStory}
            className="text-orange-400 hover:text-white transition-colors p-2 z-10"
          >
            <FaChevronLeft className="text-2xl md:text-4xl" />
          </button>

          {/* Text Container with Animation */}
          <div className="flex-1 min-h-[150px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-white text-sm sm:text-[13px] md:text-[17px] font-medium leading-[1.8] max-w-4xl"
              >
                {stories[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextStory}
            className="text-orange-400 hover:text-white transition-colors p-2 z-10"
          >
            <FaChevronRight className="text-2xl md:text-4xl" />
          </button>

        </div>

        {/* --- Dots Indicators (Optional but looks professional) --- */}
        <div className="flex gap-2 mt-12">
          {stories.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>

      </div>
    </section>


    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-14 text-center">
          <div className="w-14 h-1.5 bg-[#FF9100] rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d52d9]">What Our Clients Say</h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {dummyVideos.map((video) => (
            <div 
              key={video.id} 
              className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[3/3] rounded-[20px] overflow-hidden shadow-2xl group border-4 border-white"
            >
              {/* Video Element */}
              <video 
                src={video.videoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline // Mobile par auto-play hone ke liye zaroori hai
              />

              {/* Black Gradient Overlay (Text readability ke liye) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              {/* Bottom Info */}
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-xl font-bold mb-1">{video.name}</h4>
                <p className="text-sm text-gray-300 font-medium tracking-wide">{video.role}</p>
              </div>

              {/* Floating Play Icon (Sirf look ke liye) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

    <RequestDemo />
<Footer />
<SideElements />
    </div>
  );
}

export default Home;