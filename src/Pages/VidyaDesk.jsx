import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaTicketAlt,
  FaHeadset,
  FaChartLine,
  FaCogs,
  FaCheckCircle
} from "react-icons/fa";

function VidyaDesk() {

  // 🔥 FEATURES
  const features = [
    {
      title: "Smart Ticket Management",
      desc: "Raise, assign and track support tickets with complete transparency and real-time updates.",
      icon: <FaTicketAlt />
    },
    {
      title: "Multi-Channel Support",
      desc: "Handle queries from students, parents, and staff through a unified communication system.",
      icon: <FaHeadset />
    },
    {
      title: "Automated Workflows",
      desc: "Reduce manual effort by automatically assigning tasks and setting priority levels.",
      icon: <FaCogs />
    },
    {
      title: "Analytics & Insights",
      desc: "Monitor performance, response time and resolution metrics with powerful dashboards.",
      icon: <FaChartLine />
    }
  ];

  // 🔥 HOW IT WORKS
  const steps = [
    "User raises a support request through the portal",
    "System assigns the query to the appropriate team",
    "Team tracks and resolves the issue efficiently",
    "User receives updates and final resolution status"
  ];

  // 🔥 BENEFITS
  const benefits = [
    "Faster issue resolution across departments",
    "Centralized communication platform",
    "Improved transparency and accountability",
    "Reduced manual workload for staff",
    "Better user satisfaction and engagement",
    "Real-time tracking and notifications"
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen">

      <Navbar />

      {/* 🔥 HERO */}
      <section className="text-center py-12 sm:py-20 px-5 relative overflow-hidden">

        {/* background glow */}
        <div className="absolute w-[350px] h-[350px] bg-[#3d52d9]/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[350px] h-[350px] bg-[#FF9100]/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4 relative z-10">
          VidyaDesk – Smart Helpdesk System
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto relative z-10">
          VidyaDesk empowers educational institutions with a centralized support 
          system to manage queries, resolve issues faster, and enhance communication 
          between students, staff, and administrators.
        </p>

      </section>

      {/* 🔥 FEATURES */}
      <section className="max-w-7xl mx-auto px-5 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm 
            hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
          >
            <div className="text-[#FF9100] text-4xl mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-[#1E3A8A] font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </section>

      {/* 🔥 HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-5 py-4 mb-4 md:py-10 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-start text-center sm:text-3xl font-bold text-[#1E3A8A] mb-6">
            How VidyaDesk Works
          </h2>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#FF9100] text-white rounded-full text-sm font-bold">
                  {i + 1}
                </div>

                <p className="text-gray-600 text-sm sm:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="helpdesk.jpg"
            alt="Helpdesk"
            className="w-full max-w-md rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300"
          />
        </div>

      </section>

      {/* 🔥 BENEFITS */}
      <section className="bg-white py-10 md:py-16 px-5">

        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-3">
            Benefits of VidyaDesk
          </h2>
          <p className="text-gray-600">
            Improve efficiency, communication, and overall user experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#f8f9fb] p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <FaCheckCircle className="text-[#FF9100] mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                {item}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="text-center py-10 md:py-16 px-5">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-4">
          Enhance Your Institution’s Support System
        </h2>

        <p className="text-gray-600 mb-6">
          Streamline communication, resolve issues faster, and improve overall efficiency 
          with VidyaDesk integrated into your ERP ecosystem.
        </p>

        <button className="bg-[#FF9100] text-white px-8 py-3 rounded-lg 
        hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
          Request Demo
        </button>

      </section>

      <Footer />
    </div>
  );
}

export default VidyaDesk;