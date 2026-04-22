import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRef, useState, useEffect } from "react";
import SideElements from "../Components/SideElements";

function BlogDetail() {
const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));

  // typing pe error remove
  setErrors((prev) => ({
    ...prev,
    [name]: ""
  }));
};

const validate = () => {
  let newErrors = {};

  // name
  if (!formData.fullName) {
    newErrors.fullName = "Full name required";
  }

  // phone
  if (!formData.phone || formData.phone.length < 10) {
    newErrors.phone = "Valid phone required";
  }

  // email
 if (!formData.email) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
  newErrors.email = "Enter valid Gmail (example@gmail.com)";
}


  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


const handleSubmit = async(e) => {
  e.preventDefault();
 if (loading) return;

  if (!validate()) return;

 try {
    setLoading(true);

        await fetch("https://script.google.com/macros/s/AKfycby4Qa7jLNEk4z8c8lH7wInzbGyGBXFvHmCG4U8CsBlKbvN-UWae5JXTsUYI8hGq4U7D-w/exec", {
      method: "POST",
      body: JSON.stringify({
        type: "Get in Touch",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: new Date().toLocaleString()
      })
    });

      alert("Submiting successfully 🎉");

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  setErrors({});
}
  catch (error) {
    console.log(error);
    alert("Error submitting form ❌");
  }finally {
    setLoading(false);
  }
};


const footerRef = useRef(null);
const [hideForm, setHideForm] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    if (!footerRef.current) return;

    const footerTop = footerRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 👉 agar footer screen me aa gaya
    if (footerTop < windowHeight - 100) {
      setHideForm(true);
    } else {
      setHideForm(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const { id } = useParams(); // 👈 URL se id milegi

  // same data ya API se fetch
const blogsData = [
  {
    id: 1,
    image: "AIpic.png",
    title: "How Does School ERP Work with Artificial Intelligence?",
    date: "05/03/2026",

    intro:
      "Modern schools are evolving with intelligent systems that automate daily operations and provide real-time insights for better academic management.",

    sections: [
      {
        heading: "What is an AI-Enabled School ERP?",
        content:
          "An AI-enabled ERP system goes beyond traditional data storage by analyzing patterns and providing smart recommendations for better institutional management."
      },
      {
        heading: "How AI Improves School Operations",
        content:
          "AI helps automate routine tasks like attendance tracking, communication, and reporting while also predicting trends in student performance."
      }
    ],

    features: [
      "Automated attendance and scheduling",
      "Real-time performance tracking",
      "Smart notifications and alerts",
      "Centralized academic data"
    ],

    table: [
      { step: "1", process: "Data Collection", outcome: "All data stored centrally" },
      { step: "2", process: "Analysis", outcome: "Patterns identified" },
      { step: "3", process: "Automation", outcome: "Manual work reduced" }
    ],

    benefits: [
      "Saves time for staff",
      "Improves decision-making",
      "Enhances student performance",
      "Increases operational efficiency"
    ],

    faqs: [
      {
        q: "How does AI help in school ERP?",
        a: "AI analyzes school data and automates routine processes, helping institutions work more efficiently."
      },
      {
        q: "Is AI-based ERP better than traditional ERP?",
        a: "Yes, it provides predictive insights and automation, making it more powerful."
      }
    ]
  },

  {
    id: 2,
    image: "smartai.png",
    title: "What Is an ERP System in School & How Does AI Make It Smarter?",
    date: "03/02/2026",

    intro:
      "School ERP systems simplify administrative tasks, and when combined with AI, they become intelligent platforms that improve decision-making.",

    sections: [
      {
        heading: "Understanding School ERP",
        content:
          "A school ERP is a centralized platform that manages student data, attendance, fees, and communication."
      },
      {
        heading: "Role of AI in ERP",
        content:
          "AI enhances ERP systems by providing insights, automating workflows, and predicting outcomes."
      }
    ],

    features: [
      "Centralized data system",
      "Automated workflows",
      "AI-based predictions",
      "Improved communication"
    ],

    table: [
      { step: "1", process: "Input Data", outcome: "Stored securely" },
      { step: "2", process: "Processing", outcome: "Insights generated" },
      { step: "3", process: "Execution", outcome: "Tasks automated" }
    ],

    benefits: [
      "Better management",
      "Reduced paperwork",
      "Faster communication",
      "Accurate reporting"
    ],

    faqs: [
      {
        q: "What does an ERP system do?",
        a: "It manages all school operations in one place."
      },
      {
        q: "How does AI improve ERP?",
        a: "AI makes ERP smarter by adding automation and predictive insights."
      }
    ]
  },

  {
  id: 3,
  image: "aicheck.png",
  title: "Top Benefits of Using AI for Answer Sheet Correction in Educational Institutes",
  date: "23/12/2025",

  intro:
    "Educational institutions are rapidly adopting AI-powered evaluation systems to simplify the answer sheet correction process. These systems not only save time but also ensure fair and accurate assessment for every student.",

  sections: [
    {
      heading: "What is AI-Based Answer Sheet Evaluation?",
      content:
        "AI-based evaluation systems use advanced algorithms to assess answer sheets digitally. They can analyze patterns, detect errors, and assist examiners in grading more efficiently."
    },
    {
      heading: "Why Institutions Are Moving to Digital Evaluation",
      content:
        "Traditional paper checking is time-consuming and prone to inconsistencies. AI-driven systems eliminate manual effort, reduce errors, and speed up the result generation process."
    }
  ],

  features: [
    "Automated answer sheet scanning and evaluation",
    "AI-assisted marking and error detection",
    "Real-time result processing",
    "Secure digital storage of answer scripts"
  ],

  table: [
    {
      step: "1",
      process: "Answer Sheet Upload",
      outcome: "Scripts digitized and stored securely"
    },
    {
      step: "2",
      process: "AI Analysis",
      outcome: "Patterns and responses evaluated"
    },
    {
      step: "3",
      process: "Marking & Review",
      outcome: "Accurate grading with minimal errors"
    }
  ],

  benefits: [
    "Faster evaluation process",
    "Reduced human errors in marking",
    "Improved transparency in results",
    "Better workload management for teachers"
  ],

  faqs: [
    {
      q: "How does AI help in answer sheet correction?",
      a: "AI assists in analyzing responses, detecting patterns, and supporting examiners in assigning accurate marks efficiently."
    },
    {
      q: "Is AI-based evaluation reliable?",
      a: "Yes, it improves accuracy by reducing human bias and ensuring consistent marking across all answer sheets."
    },
    {
      q: "Can teachers still review the answers?",
      a: "Absolutely, teachers can review, edit, and finalize marks even after AI-assisted evaluation."
    }
  ]
}
];

  // 👇 jis blog par click hua usko find karo
  const blog = blogsData.find((item) => item.id === Number(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
  <div className="bg-[#f8f9fb]">
      <Navbar />

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-10">

        {/* 🔥 LEFT CONTENT (SCROLLABLE AREA) */}
        <div className="w-full lg:w-[65%] bg-white rounded-xl shadow-sm p-6 sm:p-8">

          {/* IMAGE */}
          <img
            src={`/${blog.image}`}
            alt={blog.title}
            className="w-full rounded-lg mb-6"
          />

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            {blog.title}
          </h1>

          {/* INTRO */}
          <p className="text-gray-600 leading-relaxed mb-6">
           {blog.intro}
          </p>

          {/* SECTION */}
         {blog.sections.map((sec, i) => (
  <div key={i} className="mb-6">
    <h2 className="text-xl font-semibold text-primary mb-2">
      {sec.heading}
    </h2>
    <p className="text-gray-600">{sec.content}</p>
  </div>
))}
          {/* FEATURES */}
          <h2 className="text-xl font-semibold text-primary mb-4">
            Key Capabilities
          </h2>
<ul className="list-disc pl-5 text-gray-600 mb-6">
  {blog.features.map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>

          {/* STEPS TABLE */}
          <h2 className="text-xl font-semibold text-primary mb-4">
            How It Works
          </h2>

          <div className="overflow-x-auto mb-6">
    <table className="w-full border text-sm mb-6">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-3 border">Step</th>
      <th className="p-3 border">Process</th>
      <th className="p-3 border">Outcome</th>
    </tr>
  </thead>
  <tbody>
    {blog.table.map((row, i) => (
      <tr key={i}>
        <td className="p-3 border">{row.step}</td>
        <td className="p-3 border">{row.process}</td>
        <td className="p-3 border">{row.outcome}</td>
      </tr>
    ))}
  </tbody>
</table>
          </div>

          {/* BENEFITS */}
          <h2 className="text-xl font-semibold text-primary mb-4">
            Benefits
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Reduced manual workload</li>
            <li>Improved communication</li>
            <li>Better decision-making</li>
            <li>Enhanced productivity</li>
          </ul>

        </div>

        {/* 🔥 RIGHT FORM (FIXED ONLY DESKTOP) */}
<div className="hidden lg:block">
  <div
       className={`fixed top-[180px] right-[15px] w-[350px] xl:right-[130px] bg-white p-6 rounded-2xl shadow-xl z-50
    ${hideForm ? "opacity-0 pointer-events-none" : "opacity-100"}`}
  >
    
    <h3 className="text-xl font-bold text-primary mb-4">
      Get in Touch
    </h3>

    <form onSubmit={handleSubmit} className="flex flex-col" spellCheck={false}>
    <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  type="text"
  placeholder="Your Full Name"
  className={`border rounded-lg p-2.5 mb-1   outline-none duration-200 focus:border-[#8c00ff4e] 
  ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
/>
<p className="text-red-500 mb-2 text-xs">{errors.fullName}</p>
  <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  type="text"
  placeholder="Phone Number"
  className={`border rounded-lg p-2.5 mb-1  outline-none duration-200 focus:border-[#8c00ff54] 
  ${errors.phone ? "border-red-500" : "border-gray-300"}`}
/>
<p className="text-red-500 mb-2 text-xs">{errors.phone}</p>
    <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="Email"
  className={`border rounded-lg p-2.5  mb-1 outline-none duration-200 focus:border-[#8c00ff54] 
  ${errors.email ? "border-red-500" : "border-gray-300"}`}
/>
<p className="text-red-500 mb-2 text-xs">{errors.email}</p>
<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="4"
  placeholder="Message"
  className="border rounded-lg p-2.5 mb-5 outline-none min-h-[80px]  duration-200 focus:border-[#8c00ff54]  border-gray-300"
></textarea>

      <button disabled={loading} className="bg-primary text-white py-3 rounded-full font-semibold hover:bg-[#2c3bb5] transition">
       {loading ? "Submiting..." : "Submit"}
      </button>
    </form>

  </div>
</div>

      </div>

      <div ref={footerRef}>
  <Footer />
</div>
      <SideElements />
    </div>
  );
}

export default BlogDetail;