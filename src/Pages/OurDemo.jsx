import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { FaSchool, FaUserGraduate, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

function Demo() {

  const demoData = [
    {
      title: "School ERP Demo",
      desc: "Experience a complete school management system including admissions, attendance, exams, and fee tracking in one place.",
      icon: <FaSchool />,
      btn: "Explore Demo"
    },
    {
      title: "Student Portal Demo",
      desc: "Access assignments, results, and academic progress through a modern and easy-to-use student dashboard.",
      icon: <FaUserGraduate />,
      btn: "View Portal"
    },
    {
      title: "Online Exam Demo",
      desc: "Try a secure and smart online examination system with auto-evaluation and real-time performance tracking.",
      icon: <FaLaptop />,
      btn: "Start Demo"
    }
  ];

  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <section className="text-center px-5 sm:px-6 py-14 max-w-5xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Explore Our <span className="text-[#FF9100]">Demo Modules</span>
        </h1>

        <p className="text-gray-600 text-[15px] sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Discover how our digital solutions simplify educational operations.
          Try our demo modules to understand how automation, analytics, and smart
          tools can transform your institution.
        </p>

        <p className="text-[#FF9100] font-medium mt-4">
          No signup required • Instant access • Easy to explore
        </p>
      </section>

      {/* 🔥 DEMO CARDS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {demoData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 text-center shadow-sm 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >

              {/* TOP GRADIENT LINE */}
              <div className="absolute top-0 left-0 w-full h-1.5 
              bg-gradient-to-r from-[#FF9100] to-[#3d52d9] 
              scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* ICON */}
              <div className="text-[#FF9100] text-4xl mb-5 flex justify-center">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-[14.5px] leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* BUTTON */}
          <Link to={`/demo/${index}`}>
  <button className="px-6 py-2.5 rounded-full bg-[#1E3A8A] text-white text-sm font-medium 
  hover:bg-[#FF9100] transition-all">
    {item.btn}
  </button>
</Link>

            </div>
          ))}

        </div>
      </section>

      <Footer />
      <SideElements />
    </div>
  );
}

export default Demo;