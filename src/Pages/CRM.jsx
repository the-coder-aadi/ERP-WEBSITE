import Navbar from "../Components/Navbar"
import {
FaUserTag, FaRoute, FaCheckCircle, FaChartLine} from "react-icons/fa";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { ShieldCheck, Zap, Eye, BarChart3 } from 'lucide-react';
import Demo from "../Components/demo";
function CRM() {

const featuresData = [
  {
    // FaUserTag represents tagging a potential lead/user
    icon: <FaUserTag />,
    title: "Lead & Enquiry Management",
    description: "Capture leads from various sources like website, ads, and walk-ins. Organize and track every student enquiry in a centralized pipeline."
  },
  {
    // FaRoute represents a sequence or workflow of follow-ups
    icon: <FaRoute />,
    title: "Smart Follow-up Automation",
    description: "Never miss a lead with automated reminders and scheduled follow-ups via WhatsApp, Email, and SMS to keep prospects engaged."
  },
  {
    // FaCheckCircle represents a confirmed, completed conversion process
    icon: <FaCheckCircle />,
    title: "Admission Conversion Tracker",
    description: "Monitor the entire student journey from 'Hot Lead' to 'Confirmed Admission' with real-time conversion stages and funnel analytics."
  },
  {
    // FaChartLine represents performance metrics and analytical insights
    icon: <FaChartLine />,
    title: "Counselor Performance Insights",
    description: "Track the productivity of your admission team, monitor call logs, and evaluate individual counselor performance to boost ROI."
  },
];

const cardData = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-300" />,
      title: "Secure & Scalable Student CRM",
      desc: "Built on a rock-solid cloud infrastructure to protect sensitive institutional data."
    },
    {
      icon: <Zap className="w-10 h-10 text-orange-400" />,
      title: "Optimized Admission Workflows",
      desc: "Remove manual bottlenecks with automated lead routing and instant follow-up triggers."
    },
    {
      icon: <Eye className="w-10 h-10 text-pink-300" />,
      title: "Enhanced Operational Visibility",
      desc: "Gain a 360-degree view of your counseling team's activity and daily performance."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-300" />,
      title: "Data-Driven Decision Making",
      desc: "Access granular reports that help you allocate marketing budgets to high-ROI channels."
    }
  ];

const benefits = [
    { title: "Smart Lead Scoring & Prioritization" },
    { title: "Zero Leakage Admission Funnel" },
    { title: "WhatsApp & Email Automation" },
    { title: "End-to-End Enrollment Tracking" },
    { title: "Advanced Marketing ROI Analytics" },
    { title: "Centralized Student Enquiry Hub" },
    { title: "High-Performance Team Collaboration" },
    { title: "Automated Follow-up Reminders" },
    { title: "Role-Based Data Security" },
    { title: "Real-Time Management Dashboards" },
    { title: "Seamless Document Verification" },
    { title: "Instant Admission Growth Insights" },
  ];

    return(
        <div className="min-h-screen bg-white relative">

 <Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
                All-in-One CRM Software 
                For Modern Institutions
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
              Zero Lead Leakage Maximum
                Admission Conversions.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full ">
          <img
            src="/crmposter.webp"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/crmmobile.webp" // Yahan apni mobile wali image ka path dalo
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
              <h1 className="text-[#f0d908] text-[19px] sm:text-[28px] md:text-[34px] lg:text-[45px]  font-bold tracking-wide mb-2 opacity-90">
                All-in-One CRM Software <br /> 
                For Modern Institutions
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[23px] md:text-[28px]  lg:text-[34px] font-semibold text-[#ffffff] leading-[1.9] lg:leading-[1.6]  ">
               Zero Lead Leakage Maximum<br />
                Admission Conversions.
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


   <section className="w-full bg-white py-10 sm:py-12  md:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto  gap-10 lg:gap-16">

        

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              What is Education CRM Software?
            </h2>

            {/* description */}
   <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  Education CRM is a high-performance, cloud-integrated solution built to transform how 
  institutions engage with prospective students. It streamlines the entire enrollment 
  journey by centralizing lead data, inquiries, and follow-ups into one powerful dashboard, 
  ensuring no opportunity is ever missed.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  From automating lead capture and nurturing to managing multi-channel communication 
  via WhatsApp, Email, and SMS—this system handles the heavy lifting. It reduces 
  manual workload for counseling teams, allowing them to focus on building 
  relationships and closing admissions with higher efficiency.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  Designed for scalability, our CRM adapts perfectly to both growing schools and 
  large-scale universities. It empowers management with real-time analytics and 
  performance insights, helping you make data-driven decisions to optimize your 
  marketing ROI and institutional growth.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
Modern CRM for higher education institutions also includes advanced dashboards, analytics, and real-time reporting capabilities. These insights allow teams to monitor performance, track admission trends, and make faster, data-driven decisions. With secure access control and role-based permissions, an education CRM software ensures better collaboration among departments while maintaining data accuracy and security.
</p>


    
          </div>
        </div>
      </section>


        <section className="w-full bg-white px-4 sm:px-8">
        <div className="max-w-6xl mx-auto  gap-10 lg:gap-16">

        

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              What Is VidyaCRM?
            </h2>

            {/* description */}
<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  Vidya CRM is a purpose-built, intelligent student lifecycle management system 
  engineered to bridge the gap between initial enquiry and final enrollment. It 
  centralizes every student interaction into a single source of truth, ensuring that 
  your counseling team has 360-degree visibility into the admission funnel at all times.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  By eliminating the chaos of spreadsheets and disconnected tools, Vidya CRM 
  automates routine follow-ups and lead scoring. This allows your admissions staff 
  to prioritize high-intent enquiries, track every touchpoint accurately, and 
  significantly reduce the response time, which is critical for converting leads into students.
</p>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  Designed for modern schools, colleges, and universities, Vidya CRM offers a 
  unified platform for data-driven growth. It empowers management with real-time 
  conversion analytics and team performance reports, making it an indispensable 
  asset for institutions looking to scale their admissions efficiently and professionally.
</p>


    
          </div>
        </div>
      </section>

<div className="w-full bg-[#f9f8f8] mt-10  max-[400px]:px-4 md:px-16 py-8 md:py-16 px-4">
     <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Orange Accent Line (Bilkul center mein) */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mb-4"></div>

        {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
        {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
        <h2 className="text-[22px]  sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-primary leading-tight mb-8 tracking-tight">
          Comprehensive Features of VidyaCRM Software
        </h2>



      </div>

           <section className="w-full mt-2 sm:mt-6 ">
      <div className="max-w-[1200px] mx-auto grid sm:gap-6  grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-2 gap-4">
        
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


    <section className="w-full bg-primary py-4 sm:py-8 md:py-12 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 sm:gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">

      {/* small tag */}
      <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

      {/* heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffffff] leading-tight mb-4">
        How VidyaCRM Software Supports Admissions & Enquiry Management
      </h2>

      {/* description */}
     <div className="space-y-4 mb-6 text-left">

<div className="flex items-start gap-3 mb-4">
  <span className="text-white text-lg">✔️</span>
  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
    Centralizes all student enquiries from digital ads, website, and social media into a single, organized pipeline for instant access.
  </p>
</div>

<div className="flex items-start gap-3 mb-4">
  <span className="text-white text-lg">✔️</span>
  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
    Automates multi-channel follow-ups via WhatsApp and SMS, ensuring counselors stay connected with prospects without manual effort.
  </p>
</div>

<div className="flex items-start gap-3 mb-4">
  <span className="text-white text-lg">✔️</span>
  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
    Tracks the complete admission funnel in real-time, helping you identify hot leads and prioritize high-conversion student profiles.
  </p>
</div>

<div className="flex items-start gap-3 mb-4">
  <span className="text-white text-lg">✔️</span>
  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
    Provides detailed counselor productivity reports to measure call performance, conversion rates, and overall team efficiency accurately.
  </p>
</div>

<div className="flex items-start gap-3 mb-4">
  <span className="text-white text-lg">✔️</span>
  <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
   Our AI-powered engine optimizes lead distribution and provides real-time analytics 
    to identify marketing gaps and maximize your institution's enrollment growth.
  </p>
</div>

</div>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-1/2">
      <img
        src="/VidyaCRM.png"
        alt="Vidya ERP Dashboard"
        className="w-full h-full object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
      />
    </div>

  </div>
</section>

<section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/dashboard.jpg" // 👈 apni image daal
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
              Real-Time Dashboards & Actionable Reports
            </h2>

            {/* description */}
         <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
  VidyaCRM provides high-impact, real-time dashboards that transform complex raw data 
  into clear, visual insights. From tracking daily enquiry volumes to monitoring 
  counselor performance, our centralized dashboard ensures that your management 
  team always has an eagle-eye view of the entire admission funnel at any given moment.
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  <div className="flex items-center gap-2">
    <span className="text-blue-500">📊</span>
    <span className="text-gray-700 font-semibold text-sm sm:text-base">Enquiry & Lead Pipelines</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-blue-500">📈</span>
    <span className="text-gray-700 font-semibold text-sm sm:text-base">Source-wise ROI Analytics</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-blue-500">👥</span>
    <span className="text-gray-700 font-semibold text-sm sm:text-base">Counselor Productivity Logs</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-blue-500">🎯</span>
    <span className="text-gray-700 font-semibold text-sm sm:text-base">Admission Conversion Ratios</span>
  </div>
</div>

<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
  Designed for data-driven institutions, VidyaCRM adapts to your specific goals, 
  offering custom filters and scheduled report exports. This level of transparency 
  helps improve institutional productivity through precision automation, financial 
  accuracy, and deep analytical insights that drive sustainable enrollment growth.
</p>



          </div>
        </div>
      </section>

          <section className="w-full bg-primary py-4 sm:py-8 md:py-12 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 sm:gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">

      {/* small tag */}
      <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

      {/* heading */}
     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-4">
  Unified Team Collaboration Across Your Institution
</h2>

<p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-4">
  VidyaCRM acts as the digital backbone of your institution, breaking down communication 
  barriers between departments. By centralizing student data, it enables a smooth 
  handoff and real-time synchronization between:
</p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    <span className="font-bold text-blue-700 block">Admissions</span>
    <span className="text-xs text-gray-500">Lead nurturing & conversion</span>
  </div>
  <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-[orange]">
    <span className="font-bold text-orange-700 block">Finance</span>
    <span className="text-xs text-gray-500">Fee tracking & verification</span>
  </div>
  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <span className="font-bold text-green-700 block">Administration</span>
    <span className="text-xs text-gray-500">Operations & Support</span>
  </div>
</div>

<p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-6">
  With everyone working on a single, unified source of truth, VidyaCRM eliminates 
  internal delays and data duplication. This synergy ensures that every student 
  experiences a consistent and professional journey from their first enquiry to 
  the final day of enrollment.
</p>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-1/2">
      <img
        src="/team.png"
        alt="Vidya ERP Dashboard"
        className="w-full h-full object-cover rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
      />
    </div>

  </div>
</section>


<section className="sm:py-12 py-10 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
       <div className="w-14 h-2.5 bg-secondary rounded-full mb-4 mx-auto"></div>
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">
          Why Choose VidyaCRM Software?
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-500 max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          VidyaCRM is engineered specifically for modern educational institutions to streamline 
          the journey from a simple enquiry to a confirmed admission with precision and ease.
        </p>

        {/* Benefits Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Key Benefits at a Glance
        </h3>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white border border-gray-100 shadow-sm rounded-lg p-4 
               border-l-[6px] border-l-blue-700
               transition-all duration-300 ease-in-out
               hover:shadow-md hover:translate-x-2 cursor-pointer"
            >
              {/* Orange Check Circle Icon */}
              <div className="flex-shrink-0 mr-4">
                <FaCheckCircle className="text-secondary text-xl md:text-2xl" />
              </div>
              
              {/* Benefit Title */}
              <span className="text-gray-700 font-semibold text-sm sm:text-base text-left">
                {benefit.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sm:py-8 py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Blue Container */}
        <div className="bg-gradient-to-br from-[#36005f] to-[#510491] rounded-[18px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Header Text */}
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8">
            With VidyaCRM, institutions benefit from:
          </h2>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                   {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text below the box */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed italic">
            "By aligning with your unique institutional workflows instead of forcing complex changes, 
            <span className="font-bold text-primary"> VidyaCRM</span> drives long-term operational efficiency, 
            sustainable growth, and unparalleled stakeholder trust."
          </p>
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
export default CRM