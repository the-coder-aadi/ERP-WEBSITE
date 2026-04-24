import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {motion,  useInView, AnimatePresence } from "framer-motion";

import { FaRocket,FaCheckCircle, FaUsers, FaLightbulb, FaHeart,FaBriefcase, FaMapMarkerAlt, FaClock, FaTimes, FaCloudUploadAlt, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import SideElements from '../Components/SideElements';

const Careers = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
   const [showToast, setShowToast] = useState(false);

  const [resume, setResume] = useState(null); // File store karne ke liye
  const [isDragging, setIsDragging] = useState(false);


const uploadResume = async (file) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "resume_upload");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dhjti8rys/raw/upload",
    {
      method: "POST",
      body: formData
    }
  );


  const data = await res.json();
    return data.secure_url.split("/upload/")[0] +
         "/upload/fl_attachment/" +
         data.secure_url.split("/upload/")[1];
};

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: ""
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  
    // error remove while typing
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

const resetForm = () => {
  setFormData({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: ""
  });

  setErrors({});
};

  const validate = () => {
  let newErrors = {};

  if (!formData.fullName) newErrors.fullName = "Full name required";

if (!formData.email) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
  newErrors.email = "Enter valid Gmail (example@gmail.com)";
}

  if (!formData.phone || formData.phone.length < 10)
    newErrors.phone = "Valid phone required";


  if (!formData.position)
    newErrors.position = "Please select position";

if (!resume) {
  newErrors.resume = "Resume is required";
}

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();


  if (loading) return;



  if (!validate()) return;
console.log("submit ho raha hai...")
  try {
setLoading(true);

  let resumeUrl = "";

    if (resume) {
      resumeUrl = await uploadResume(resume);
  
    }

    // 📊 GOOGLE SHEET SAVE
    await fetch("https://script.google.com/macros/s/AKfycby4Qa7jLNEk4z8c8lH7wInzbGyGBXFvHmCG4U8CsBlKbvN-UWae5JXTsUYI8hGq4U7D-w/exec", {
      method: "POST",
      body: JSON.stringify({
        type: "Application Form",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        select: formData.position,
        resumeUrl: resumeUrl,
        date: new Date().toLocaleString()
      })
    });

    setIsModalOpen(false)

          setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 6000);

    // reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
    });
    setResume(null);

    setErrors({});

  } catch (error) {
    console.log(error);
    alert("Error submitting form ❌");
  }finally {
    setLoading(false);
  }
  
};


  const openModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };



  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation(); // Browser default behavior stop karne ke liye
  setIsDragging(true);
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation(); // Sabse important line
  setIsDragging(false);
  
  // Files nikalne ka logic
  const files = e.dataTransfer.files;
  if (files && files.length > 0) {
    const file = files[0];
    // Check file type (optional but good)
    if (file.type === "application/pdf" || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
      setResume(file);
    } else {
      alert("Please upload PDF or DOC files only!");
    }
  }
};

  // Dummy Job Data
const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    type: "Full-Time",
    location: "Remote / Mumbai",
    category: "Engineering",
    experience: "1 - 2 Years" // Added Experience
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full-Time",
    location: "Remote",
    category: "Design",
    experience: "1 - 2 Years" // Added Experience
  },
  {
    id: 3,
    title: "Business Development Manager",
    type: "Part-Time",
    location: "Pune",
    category: "Sales",
    experience: "1 - 2 Years" // Added Experience
  }
];

  const benefits = [
    { icon: <FaUsers size={25} />, title: "Great Culture", desc: "Work with a team that feels like family." },
    { icon: <FaRocket size={25} />, title: "Growth", desc: "We invest in your learning and career path." },
    { icon: <FaLightbulb size={25} />, title: "Innovation", desc: "Your ideas are heard and implemented." },
    { icon: <FaHeart size={25} />, title: "Work-Life Balance", desc: "Flexible hours and mental well-being." },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="bg-primary py-10 sm:py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Background pattern placeholder */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="sm:text-4xl text-3xl md:text-6xl font-black mb-6 leading-tight">
            Build the Future of <span className="text-secondary">Ed-Tech</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            We are looking for passionate individuals to help us redefine how educational institutions operate globally.
          </p>
          <a href="#openings" className="bg-[#d9a411]  text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg hover:bg-[#c29006] transition-all uppercase tracking-wider">
            View Openings
          </a>
        </div>
      </section>

      {/* --- Why Join Us (Benefits) --- */}
      <section className="sm:py-18 py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="sm:text-3xl text-[25px] md:text-4xl font-bold text-primary">Why Join Vidya ERP?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="text-secondary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Current Openings Section --- */}
      <section id="openings" className="sm:py-14 py-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
            <div>
              <h2 className="sm:text-3xl text-[27px] md:text-4xl font-bold text-primary">Current Openings</h2>
              <p className="text-gray-500 mt-2">Find your next big challenge.</p>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">{jobs.length} Positions Available</span>
            </div>
          </div>

      <div className="space-y-5">
  {jobs.map((job) => (
    <div key={job.id} className="group border-2 border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center hover:border-[#ff91004b] hover:shadow-xl transition-all duration-300 bg-white">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <span className="text-[15px] font-medium text-secondary uppercase tracking-tighter">{job.category}</span>
        <h3 className="text-xl md:text-2xl font-bold text-primary mt-1">{job.title}</h3>
        
        {/* Info Tags with Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-gray-500 text-sm">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaClock className="text-gray-400" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-50 text-primary px-2 py-0.5 rounded-md font-medium">
            <FaBriefcase className="text-primary text-xs" />
            <span>Exp: {job.experience}</span>
          </div>
        </div>
      </div>
      
      <button onClick={() => openModal(job.title)} className="w-full md:w-auto bg-primary  text-white px-7 py-3 sm:px-10 sm:py-3.5 cursor-pointer  rounded-xl font-bold hover:scale-105 duration-300 transition-all transform active:scale-95 shadow-md">
        Apply Now
      </button>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="sm:py-16 py-10 mb-6 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#6c05d3] to-[#922bf8] rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see a fit?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            We are always looking for amazing talent. Send us your CV at <span className="font-bold border-b-2 border-secondary">careers@vidyaerp.com</span> and we'll get in touch.
          </p>
          <button className="bg-white text-primary cursor-pointer sm:px-10 px-6 py-2.5 sm:py-4 rounded-full font-black hover:scale-105 transition-transform uppercase shadow-lg">
            Send Resume
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop: Simple Fade */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)
  }
           
          >

          </div>

          {/* Modal Box: Simple Scale-up */}
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.2s_ease-out]">
            
            <div className=" p-4 sm:p-6 border-b flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-bold text-primary">Application Form</h2>
              <button onClick={() =>{

               setIsModalOpen(false)
               resetForm()
              }
              } className="text-gray-400 cursor-pointer hover:text-red-500"><FaTimes size={25}/></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-3 sm:space-y-4" spellCheck={false}>
              <input type="text"   name="fullName"
  value={formData.fullName}
  onChange={handleChange}
   placeholder="Full Name" className={`w-full py-2 px-3 sm:px-3 sm:py-2.5  border rounded-lg outline-none transition-all
${errors.fullName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-400"}
`} required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email"
                  name="email"
  value={formData.email}
  onChange={handleChange}
                placeholder="Email" className={`w-full py-2 px-3 sm:px-3 sm:py-2.5 border rounded-lg outline-none transition-all
${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-400"}
`} required />
                <input type="tel"
                  name="phone"
  value={formData.phone}
  onChange={handleChange}
                placeholder="Phone" className={`w-full py-2 px-3 sm:px-3 sm:py-2.5 border rounded-lg outline-none transition-all
${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-400"}
`} required />
              </div>
              
              <select 
                  name="position"
  value={formData.position}
  onChange={handleChange}
           
               className={`w-full py-2 px-3 sm:px-3 sm:py-2.5 border rounded-lg outline-none transition-all
${errors.position ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-400"}
`}
              >
                  <option value="">Select Role</option>
                {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
              </select>

              {/* Simple File Input */}
 <div 
  onDragOver={handleDragOver}
  onDragEnter={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
 className={`relative border-2 border-dashed rounded-xl p-3 sm:p-8 text-center transition-all
${
  errors.resume
    ? "border-red-500 bg-red-50"
    : isDragging
    ? "border-secondary bg-orange-50"
    : "border-gray-200 bg-gray-50"
}
`}
>
  {/* Agar resume nahi hai tabhi input dikhao, varna remove button kaam nahi karega */}
  {!resume && (
    <input 
      type="file" 
      onChange={handleFileChange}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
      accept=".pdf,.doc,.docx"
    />
  )}
                
                {resume ? (
                  <div className="flex flex-col items-center text-primary">
                    <FaFileAlt size={30} className="mb-2 text-secondary" />
                    <p className="font-semibold text-sm">{resume.name}</p>
                    <button type="button" onClick={() => setResume(null)} className="text-xs text-red-500 mt-2 underline">Remove file</button>
                  </div>
                ) : (
                  <>
                    <FaCloudUploadAlt className={`mx-auto mb-2 ${isDragging ? "text-secondary" : "text-gray-400"}`} size={40} />
                    <p className="text-gray-600 font-medium">Drag & Drop resume here</p>
                    <p className="text-xs text-gray-400 mt-1">or click to browse (PDF, DOCX)</p>
                  </>
                )}
              </div>

              <button disabled={loading} type="submit" className="w-full hover:scale-95 duration-300  bg-secondary cursor-pointer text-white py-2 sm:py-4 rounded-xl font-bold text-lg  transition-all">
                {loading ? "submiting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

<AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: 100, x: "-50%" }} 
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 100, x: "-50%", transition: { duration: 0.2 } }}
      // Responsive classes: w-[92%] mobile par, sm:w-auto desktop par
      className="fixed bottom-5 sm:bottom-8 left-1/2 z-[9999] bg-[#10b981] text-white px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 border border-white/20 backdrop-blur-md w-[92%] sm:w-auto min-w-[300px] max-w-[500px]"
    >
      {/* Icon: Mobile par thoda chota */}
      <div className="bg-white/20 p-2 sm:p-3 rounded-full shrink-0">
        <FaCheckCircle className="text-xl sm:text-2xl" />
      </div>

      <div className="flex-1">
        <h4 className="font-black text-base sm:text-lg leading-none uppercase tracking-wider">
          Success
        </h4>
        <p className="text-[13px] sm:text-sm font-bold opacity-90 mt-1.5 leading-tight sm:leading-relaxed">
          Your Application form is Submitted. <br className="hidden sm:block" /> 
          We will contact you very soon.
        </p>
      </div>

      {/* Progress Bar (Timer) */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 4, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1.5 bg-white/30 rounded-full"
      />
    </motion.div>
  )}
</AnimatePresence>

<SideElements />
      <Footer />
    </div>
  );
};

export default Careers;