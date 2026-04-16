import Navbar from "../Components/Navbar"
import { FaCalendarAlt, FaSearch ,FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
function Blog() {

    const desktopImages = [
    "/check.png",
    "/check2.jpg", 
    "/technology.jpg",
    "/hr (1).jpg"
  ];

  // 2. Mobile Images Array
  const mobileImages = [
    "/checkmobile.png",
    "/check2mobile.jpg",
    "/tech.jpg",
    "/check3mobile.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide Logic (Infinite Loop)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === desktopImages.length - 1 ? 0 : prev + 1));
  };

  // Prev Slide Logic (Infinite Loop)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? desktopImages.length - 1 : prev - 1));
  };

  // Auto-play (Optional: Har 6 second mein slide badlegi)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

const [blogsData, setBlogsData] = useState([
  {
    id: 1,
    image: "AIpic.png",
    title: "How Does School ERP Work with Artificial Intelligence?",
    excerpt: "Imagine a school where attendance is self-recorded, class schedules change by themselves, and teachers receive insights into student behavior before issues arise. This is the reality when AI powers your ERP and transforms daily operations into a seamless experience for everyone...",
    date: "05/03/2026",
    link: "/blog/ai-in-erp"
  },
  {
    id: 2,
    image: "smartai.png",
    title: "What Is an ERP System in School & How Does AI Make It Smarter?",
    excerpt: "In today's rapidly evolving educational landscape, school leaders and administrators are expected to be efficient. Discover how AI transforms the ERP from a data center to an intelligence center, helping you make better decisions for your institution's future success...",
    date: "03/02/2026",
    link: "/blog/erp-smarter-ai"
  },
  {
    id: 3,
    image: "aicheck.png",
    title: "Top Benefits of Using AI for Answer Sheet Correction in Educational Institutes",
    excerpt: "The accelerated educational revolution in recent years has challenged schools, colleges, and universities. Find out how AI-driven correction saves time and eliminates bias in grading, ensuring that students get fair results while teachers focus on core teaching tasks...",
    date: "23/12/2025",
    link: "/blog/ai-answer-sheet"
  },
  {
    id: 4,
    image: "aihandshake.png",
    title: "Maintaining Integrity: AI Proctoring in Online Examination Software",
    excerpt: "Online exams are here to stay, but how do we ensure fairness? Learn about the advancements in AI proctoring, from face verification to browser lockdown. These tools help maintain the sanctity of assessments while providing students with a flexible and secure environment...",
    date: "15/11/2025",
    link: "/blog/proctoring-integrity"
  },
  {
    id: 5,
    image: "payroll.png",
    title: "Why Institutions Should Automate Payroll with VidyaHR",
    excerpt: "Managing complex salary structures and compliance (PF/ESI/TDS) manually is time-consuming. VidyaHR offers a one-click payroll solution for institutions. Spend less time on paperwork and more time on strategic growth while our automated system handles the heavy lifting...",
    date: "01/10/2025",
    link: "/blog/automate-payroll"
  },
  {
    id: 6,
    image: "student.png",
    title: "Streamlining Student Leads: Using CRM for Modern Admissions",
    excerpt: "Stop losing prospective students to spreadsheet chaos. A specialized educational CRM helps you track and nurture leads effectively. Optimize your admission funnel and ensure every query is addressed promptly to improve your institution's conversion rates and enrollment...",
    date: "10/09/2025",
    link: "/blog/crm-admissions"
  }
]);
    return(
        <div  className="min-h-screen bg-white relative"> 

<Navbar />

<div className="hidden max-[701px]:block px-5 py-4 bg-white relative z-20">
        <div className="max-w-[1500px] mx-auto text-center">
          <h1 className="text-[#0008e7] text-[18px] font-bold tracking-wide mb-1 opacity-90">
           Empowering Education Through Insight
          </h1>
          <p className="text-[18px] font-semibold text-[#3a3a3a] leading-[1.5]">
             Discover the Future of Smart Campus Management
          </p>
        </div>
      </div>

      {/* --- HERO SECTION SLIDER (Updated Height for Mobile and Transition) --- */}
    {/* Section ki height class change karein */}
<section className="relative w-full h-[430px] max-[430px]:h-[330px]  sm:h-[480px] md:h-[450px] lg:h-[600px] overflow-hidden bg-[#001529]">
        
        {/* Images Container - STACKED FOR FADE EFFECT */}
        <div className="w-full h-full relative z-0">
          
          {/* Desktop Image Stack */}
          {desktopImages.map((image, index) => (
            <img
              key={`desktop-${index}`}
              src={image}
              alt={`Banner Desktop ${index}`}
              // CSS for Smooth Fade transition
              className={`hidden min-[701px]:block absolute inset-0 w-full h-full object-cover object-top 
                        transition-opacity duration-1000 ease-in-out 
                        ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}

          {/* Mobile Image Stack */}
         {/* Mobile Image Stack */}
{mobileImages.map((image, index) => (
  <img
    key={`mobile-${index}`}
    src={image}
    alt={`Banner Mobile ${index}`}
    // h-auto ko hata kar h-full kiya hai aur object-cover rakha hai
    className={`block min-[701px]:hidden absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-1000 ease-in-out 
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
  />
))}
        </div>

        {/* Content Overlay (Same as yours, added drop-shadow) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="max-w-[1500px] mx-auto h-full px-6 flex items-start pt-16 md:pt-10 lg:pt-24">
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden flex-col items-start whitespace-nowrap">
              <h1 className="text-[#e59502] text-[25px] md:text-[34px] lg:text-[45px] font-bold tracking-wide mb-2 opacity-90 drop-shadow-lg">
                Empowering Education<br />Through Insight
              </h1>
              <p className="text-[20px] md:text-[28px] lg:text-[34px] font-semibold text-[#f4f4f4] leading-[1.9] drop-shadow-md">
                Discover the Future of<br />Smart Campus Management
              </p>
            </div>
          </div>
        </div>

        {/* --- NAVIGATION ICONS --- */}
        {/* Left Arrow */}
    {/* Left Arrow */}
<button 
  onClick={prevSlide}
  // Mobile par p-2 aur desktop (sm) par p-3 rakha hai
  className="absolute left-3 sm:left-10 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2.5 rounded-full transition-all"
>
  {/* Mobile par size 14 aur desktop par 18 */}
  <FaChevronLeft className="text-[15px] sm:text-[20px]" />
</button>

{/* Right Arrow */}
<button 
  onClick={nextSlide}
  // Mobile par p-2 aur desktop par p-3
  className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2.5 rounded-full transition-all"
>
  {/* Mobile par size 14 aur desktop par 18 */}
  <FaChevronRight className="text-[15px] sm:text-[20px]" />
</button>

        {/* --- SLIDE INDICATORS (Optional but professional) --- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {desktopImages.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FF9100] w-6" : "bg-white/50"}`}
            />
          ))}
        </div>

      </section>

<header className="bg-white border-b border-gray-100 mt-4 py-8 sm:py-14 px-6">
        <div className=" mx-auto ">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A]">
              Our Latest <span className="text-[#FF9100]">Blogs</span>
            </h1>
            <p className="text-gray-500 mt-2 text-lg">Stay updated with insights from the world of Educational Tech.</p>
          </div>

        </div>
      </header>

      {/* 2. MAIN BLOGS GRID (Concept 1/Why Choose Style) */}
      <main className=" mb-20 mt-1 sm:mt-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid Layout: 1 col on mobile, 2 col on tablet (min-768), 3 col on desktop (min-1024) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* B. DYNAMIC RENDERING (Mapping over data) */}
     {/* B. DYNAMIC RENDERING (Mapping over data) */}
{blogsData.map((blog) => (
  <div 
    key={blog.id} 
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full"
  >
    {/* Blog Image - Added fixed aspect ratio for perfect symmetry */}
    <div className="overflow-hidden aspect-video">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-full object-cover group-hover:scale-105 ease-out will-change-transform antialiased image-rendering-quality optimizeQuality transition-transform duration-500" 
      />
    </div>

    {/* Content Container - Pura area control karega */}
    <div className="p-6 flex flex-col flex-1">
      
      {/* Blog Title - Added min-height for multi-line consistency */}
      <h3 className="text-[#1E3A8A] text-lg font-semibold mb-3 leading-tight group-hover:text-[#FF9100] transition-colors min-h-[3rem]">
        {blog.title}
      </h3>

      {/* Blog Excerpt - 4 Lines Fix */}
      <p className="text-gray-500 text-[15px] leading-[1.6] mb-4 line-clamp-4 min-h-[5.6rem]">
        {blog.excerpt}
      </p>

      {/* UNIQUE "Continue Reading" SECTION */}
  {/* UNIQUE "Continue Reading" SECTION */}
<div className="mb-4">
  <p className="text-gray-400 text-[14px] italic font-medium leading-[1.5]">
    Continue reading <span className="text-gray-400/90 ">
      "{blog.title}"
    </span>
  </p>
</div>

      {/* Ye spacer bache huye space ko push karega taaki buttons bottom mein align rahein */}
      <div className="flex-grow"></div>

      {/* Divider line before action bar */}
      <div className="border-t border-gray-100 pt-4 mt-2">
        <div className="flex items-center justify-between gap-4">
          {/* Date with Icon */}
          <div className="flex items-center gap-2 text-gray-400 text-md">
            <FaCalendarAlt className="text-[#FF9100]" />
            <span>{blog.date}</span>
          </div>

          {/* Read More Button */}
          <Link
            to={`/blog/${blog.id}`}
            className="bg-gray-100 text-[#333] px-6 py-3 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-[#FF9100] hover:text-white transition-all shadow-inner group-hover:shadow-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
))}
          </div>

        </div>
      </main>


                  <Footer />
      <SideElements />

        </div>
    )
}
export default Blog