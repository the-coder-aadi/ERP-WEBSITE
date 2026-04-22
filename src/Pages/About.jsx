import { FaUniversity, FaUsers, FaStar, FaUsersCog, FaLightbulb,   FaHandshake, FaTags, FaSmile } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SideElements from "../Components/SideElements";
function About() {
    const stats = [
  { icon: <FaUniversity />, count: "20+", label: "Institutions" },
  { icon: <FaUsers />, count: "1 Lakh+", label: "Users" },
  { icon: <FaStar />, count: "10+", label: "Experience" },
  { icon: <FaUsersCog />, count: "60+", label: "Team" },
];
const highlights = [
  { icon: <RiUserHeartLine />, title: "Client First" },
  { icon: <FaLightbulb />, title: "Innovative and Holistic Solutions" },
  { icon: <FaUsers />, title: "Dynamic Team" },
  { icon: <FaHandshake />, title: "Honesty and Transparency" },
  { icon: <FaTags />, title: "Cost-Effective Solutions" },
  { icon: <FaSmile />, title: "Positive Work Culture" },
];

    return(
        <div className="min-h-screen bg-white relative">
<Navbar />
 
 <section className="w-full py-10 md:py-14 px-6 md:px-20 lg:px-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col min-[1000px]:flex-row gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT SIDE: STATS GRID --- */}
        <div className="w-full min-[1000px]:w-1/2 grid grid-cols-1 min-[450px]:grid-cols-2 gap-y-8 sm:gap-y-12 ">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Icon - Blue Color (Screenshot match) */}
              <div className="text-primary text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              {/* Count */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#333] mb-1">
                {stat.count}
              </h3>
              {/* Label */}
              <p className="text-gray-500 font-bold text-lg uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="w-full min-[1000px]:w-1/2 flex flex-col items-start">
          {/* Orange Accent Line */}
          <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-[#222] mb-8">
            Our Story
          </h2>

          <div className="space-y-6 text-gray-500 text-md sm:text-lg leading-relaxed text-justify ">
       <p>
  <span className="text-primary font-bold">Vidya ERP</span> is a cutting-edge product development and technology services provider that helps educational institutions become digital-first. Our goal is to empower schools and colleges with smart solutions that keep them ahead in today’s competitive environment.
</p>

<p>
  Since 2015, Vidya ERP has been associated with several premium educational institutions across the country. Our cloud-based ERP solutions have simplified administrative complexities and improved learning outcomes. Our platform is designed keeping in mind the unique needs of both small and large institutions.
</p>

<p className="text-[16px]  text-gray-500 uppercase tracking-tighter">
  Vidya ERP is a flagship product by Vidya Soft Technologies LLP.
</p>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full py-10 sm:py-16 px-6 md:px-20 lg:px-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12">
        
        {/* --- OUR VISION CARD --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Orange Accent Line */}
          <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-5 md:mb-8">
            Our Vision
          </h2>

          {/* Blue Content Box - Matches image_24.png perfectly */}
          <div className="w-full bg-primary text-white p-6 md:p-8 will-change-contents  lg:p-10 rounded-md shadow-2xl  min-h-[150px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-center italic tracking-wide opacity-95">
               To empower educational institutions with a smart digital ecosystem that drives innovation, efficiency, and global excellence.
            </p>
          </div>
        </div>

        {/* --- OUR MISSION CARD --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Orange Accent Line */}
          <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-5 md:mb-8">
            Our Mission
          </h2>

          {/* Blue Content Box - Matches image_24.png perfectly */}
          <div className="w-full bg-primary text-white will-change-contents p-6 md:p-8 lg:p-10 rounded-md shadow-2xl min-h-[150px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-center tracking-wide opacity-95">
                To simplify institutional operations and enhance productivity through a unified, intuitive, and cloud-based ERP solution.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full py-20 px-6 md:px-20 lg:px-32 bg-[#FBFBFC]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-16 text-center">
          Our Highlights
        </h2>

        {/* --- Icons Grid --- */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-12 w-full">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Circular Icon Container */}
              <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-6 transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                <div className="text-primary text-4xl">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#333] max-w-[250px] leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
<Footer />
<SideElements />
        </div>

    )
}

export default About;