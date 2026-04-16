import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";

function DemoDetail() {

  const { id } = useParams();

  // 🔥 SAME DATA (later API se aa sakta hai)
const demoData = [
  {
    title: "School ERP Demo",
    desc: "Complete school management with admissions, attendance, exams and fees.",

    overview:
      "This demo gives a complete overview of how a modern school ERP works. It connects administration, teachers, students, and parents into one centralized system for smooth operations.",

    features: [
      "Student Management",
      "Attendance Tracking",
      "Fee Management",
      "Report Cards"
    ],

    steps: [
      "Add and manage student records",
      "Track daily attendance digitally",
      "Manage fees and generate receipts",
      "Generate report cards instantly"
    ],

    benefits: [
      "Reduces manual workload",
      "Improves data accuracy",
      "Faster communication",
      "Better decision making"
    ],

    faqs: [
      {
        q: "What can I explore in this demo?",
        a: "You can explore student records, attendance, fee modules, and reporting features in a simplified format."
      },
      {
        q: "Is this a real system?",
        a: "This is a demo version designed to give you a feel of how the actual system works."
      }
    ]
  },

  {
    title: "Student Portal Demo",
    desc: "Interactive student dashboard for learning and tracking progress.",

    overview:
      "This demo showcases how students can access academic data, assignments, and performance reports through a single dashboard.",

    features: [
      "Assignments & Homework",
      "Result Tracking",
      "Notifications",
      "Study Material Access"
    ],

    steps: [
      "Login to student dashboard",
      "View assignments and submit work",
      "Check results and progress",
      "Access study materials anytime"
    ],

    benefits: [
      "Easy access to academic data",
      "Improves student engagement",
      "Better communication with teachers",
      "Learning anytime anywhere"
    ],

    faqs: [
      {
        q: "Can students access this on mobile?",
        a: "Yes, the portal is fully responsive and works on all devices."
      },
      {
        q: "What can students track here?",
        a: "Students can track assignments, results, attendance, and notifications."
      }
    ]
  },

  {
    title: "Online Exam Demo",
    desc: "Secure online exam system with auto evaluation.",

    overview:
      "This demo helps you understand how online exams can be conducted securely with automated evaluation and instant results.",

    features: [
      "MCQ & Subjective Exams",
      "Auto Result Generation",
      "Performance Analytics",
      "Secure Exam Environment"
    ],

    steps: [
      "Create and schedule exam",
      "Students attempt exam online",
      "System evaluates responses",
      "Results generated instantly"
    ],

    benefits: [
      "Saves time in evaluation",
      "Reduces human errors",
      "Ensures exam security",
      "Instant result processing"
    ],

    faqs: [
      {
        q: "Is the exam system secure?",
        a: "Yes, it includes multiple security layers to ensure fair exams."
      },
      {
        q: "Are results generated instantly?",
        a: "Yes, especially for objective exams, results are available immediately."
      }
    ]
  }
];

  const demo = demoData[id];

  if (!demo) return <h2 className="p-10">Demo not found</h2>;

  return (
 <div className="bg-[#f4f7fb] min-h-screen">
  <Navbar />

  <section className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-14">

    {/* 🔥 HEADER */}
    <div className=" mb-6 sm:mb-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-3">
        {demo.title}
      </h1>
      <p className="text-gray-500  max-w-2xl leading-relaxed">
        {demo.desc}
      </p>
    </div>

    {/* 🔥 DEMO PREVIEW */}
    <div className="rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl p-6 sm:p-8 mb-14 sm:mb-16">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[#1E3A8A]">
          Demo Preview
        </h2>

        <span className="text-xs bg-[#FF9100]/10 text-[#FF9100] px-3 py-1 rounded-full font-medium">
          Live Simulation
        </span>
      </div>

      {/* FAKE DASHBOARD */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#eef2ff] to-[#f9fafc] h-[220px] sm:h-[320px] flex items-center justify-center relative">

        {/* fake elements */}
        <div className="absolute top-4 left-4 w-24 h-3 bg-gray-300 rounded-full"></div>
        <div className="absolute top-10 left-4 w-16 h-3 bg-gray-200 rounded-full"></div>



      </div>

      {/* 🔥 MINI STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {["Fast Setup", "Secure System", "Cloud Based", "Real-Time Data"].map((item, i) => (
          <div key={i} className="bg-[#f1f5ff] rounded-xl p-3 text-center text-sm font-medium text-[#1E3A8A]">
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* 🔥 FEATURES */}
    <div className="mb-10 sm:mb-16">
      <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-5">
        Key Features
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {demo.features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-gray-700  font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* 🔥 USE CASES */}
    <div className="mb-10 sm:mb-16">
      <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-5">
        Use Cases
      </h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {["Schools", "Colleges", "Coaching Institutes"].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-[#f9fbff] p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition"
          >
            <p className="font-semibold text-[#1E3A8A]">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 🔥 BENEFITS */}
    <div>
      <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-5">
        Benefits
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          "Saves administrative time",
          "Improves efficiency",
          "User-friendly interface",
          "Access anytime anywhere"
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-sm"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF9100]/10 text-[#FF9100] text-sm font-bold">
              ✓
            </div>
            <p className="text-gray-600 text-md">{item}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
<SideElements />
  <Footer />
</div>
  );
}

export default DemoDetail;