import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SideElements from "../Components/SideElements";

function OurTeam() {

  const teamData = [
  {
    title: "Our Expert Minds",
    members: [
      { name: "Amit Sharma", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Rahul Verma", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "Neha Singh", role: "Operations Head", img: "https://randomuser.me/api/portraits/women/65.jpg" },
      { name: "Karan Mehta", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/12.jpg" },
      { name: "Priya Kapoor", role: "Strategy Lead", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    ]
  },
  {
    title: "Our HR",
    members: [
      { name: "Sneha Joshi", role: "HR Manager", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    ]
  },
  {
    title: "Business Development Team",
    members: [
      { name: "Tushar Jain", role: "BD Lead", img: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Kunal Patil", role: "BD Associate", img: "https://randomuser.me/api/portraits/men/29.jpg" },
      { name: "Riya Shah", role: "Marketing Executive", img: "https://randomuser.me/api/portraits/women/33.jpg" },
    ]
  },
  {
    title: "QA & Cloud Support",
    members: [
      { name: "Rohit Das", role: "DevOps Engineer", img: "https://randomuser.me/api/portraits/men/51.jpg" },
      { name: "Ankit Rao", role: "Cloud Engineer", img: "https://randomuser.me/api/portraits/men/41.jpg" },
      { name: "Pooja Kulkarni", role: "QA Analyst", img: "https://randomuser.me/api/portraits/women/52.jpg" },
    ]
  },
  {
    title: "Tech Support Engineers",
    members: [
      { name: "Sahil Patil", role: "Support Engineer", img: "https://randomuser.me/api/portraits/men/61.jpg" },
      { name: "Meena Singh", role: "Support Engineer", img: "https://randomuser.me/api/portraits/women/21.jpg" },
      { name: "Ravi Kumar", role: "Support Engineer", img: "https://randomuser.me/api/portraits/men/18.jpg" },
      { name: "Anjali Gupta", role: "Support Engineer", img: "https://randomuser.me/api/portraits/women/75.jpg" },
      { name: "Vikas Yadav", role: "Support Engineer", img: "https://randomuser.me/api/portraits/men/36.jpg" },
    ]
  }
];

  return (
    <div className="bg-[#f8f9fb]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14">

        {teamData.map((section, index) => (
          <div key={index}    className={` mb-8 sm:mb-14 pb-10 ${
      index !== teamData.length - 1
        ? "border-b-2 border-[#ececec]"
        : ""
    }`}>

            {/* SECTION TITLE */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1E3A8A] mb-10">
              {section.title}
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">

              {section.members.map((member, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl mb-4 sm:mb-6 p-6 text-center shadow-sm 
                  hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
                >

                  {/* 🔥 TOP GRADIENT BORDER (ON HOVER) */}
                  <div className="absolute top-0 left-0  w-full h-1.5 
                  bg-gradient-to-r from-[#FF9100] to-[#3d52d9] 
                  scale-x-0 group-hover:scale-x-100  transition-transform duration-300"></div>

                  {/* IMAGE */}
                  {/* IMAGE */}
<div className="relative w-36 h-36 mx-auto mb-4">

  {/* 🔥 GRADIENT BORDER (outer ring) */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9100] to-[#3d52d9] 
  opacity-0 group-hover:opacity-100 transition duration-300"></div>

  {/* 🔥 IMAGE (SMALLER so border dikhe) */}
  <div className="absolute inset-[3px] rounded-full overflow-hidden z-10">
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-full object-cover"
    />
  </div>

</div>
                  {/* NAME */}
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">
                    {member.name}
                  </h3>

<div className="w-12 h-[3px] bg-[#FF9100] mx-auto my-3 rounded-full"></div>
                  {/* ROLE */}
                  <p className="text-gray-600 text-md mb-4">
                    {member.role}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex justify-center gap-3">
                 {/* SOCIAL ICONS (ONLY FIRST SECTION) */}
{index === 0 && (
  <div className="flex justify-center gap-3 mt-4">
    
    <div className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 hover:bg-[#3d52d9] hover:text-white transition cursor-pointer">
      <FaFacebookF size={13} />
    </div>

    <div className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 hover:bg-[#3d52d9] hover:text-white transition cursor-pointer">
      <FaTwitter size={13} />
    </div>

    <div className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 hover:bg-[#3d52d9] hover:text-white transition cursor-pointer">
      <FaLinkedinIn size={13} />
    </div>

    <div className="w-8 h-8 flex items-center justify-center rounded-full border text-gray-400 hover:bg-[#3d52d9] hover:text-white transition cursor-pointer">
      <FaInstagram size={13} />
    </div>

  </div>
)}
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </section>

      <Footer />
      <SideElements />
    </div>
  );
}

export default OurTeam;