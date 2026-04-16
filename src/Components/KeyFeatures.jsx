  import {
  FaChevronLeft, FaChevronRight, FaUserGraduate,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaChalkboardTeacher,
  FaChartLine,
  FaShieldAlt,
  FaChevronDown} from "react-icons/fa";
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


function KeyFeatures() {
    return(
      


        <section className="w-full mt-2 sm:mt-6 ">
      <div className="max-w-[1400px] mx-auto grid sm:gap-6  grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {featuresData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border-[1.5px] will-change-contents border-blue-100 rounded-[15px] max-[400px]:p-4 p-5 md:p-6 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
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

  
    )
}
export default KeyFeatures