import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaRocket, FaUsers, FaLightbulb, FaHeart,FaBriefcase, FaMapMarkerAlt, FaClock, FaTimes, FaCloudUploadAlt, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

const Careers = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const [resume, setResume] = useState(null); // File store karne ke liye
  const [isDragging, setIsDragging] = useState(false);

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
      <section className="bg-[#1E3A8A] py-10 sm:py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Background pattern placeholder */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="sm:text-4xl text-3xl md:text-6xl font-black mb-6 leading-tight">
            Build the Future of <span className="text-[#FF9100]">Ed-Tech</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            We are looking for passionate individuals to help us redefine how educational institutions operate globally.
          </p>
          <a href="#openings" className="bg-[#FF9100] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all uppercase tracking-wider">
            View Openings
          </a>
        </div>
      </section>

      {/* --- Why Join Us (Benefits) --- */}
      <section className="sm:py-20 py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="sm:text-3xl text-[25px] md:text-4xl font-bold text-[#1E3A8A]">Why Join Vidya ERP?</h2>
          <div className="w-20 h-1 bg-[#FF9100] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
              <div className="text-[#FF9100] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Current Openings Section --- */}
      <section id="openings" className="sm:py-16 py-8 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
            <div>
              <h2 className="sm:text-3xl text-[27px] md:text-4xl font-bold text-[#1E3A8A]">Current Openings</h2>
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
        <span className="text-[15px] font-medium text-[#FF9100] uppercase tracking-tighter">{job.category}</span>
        <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A] mt-1">{job.title}</h3>
        
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
          <div className="flex items-center gap-1.5 bg-blue-50 text-[#1E3A8A] px-2 py-0.5 rounded-md font-medium">
            <FaBriefcase className="text-[#1E3A8A] text-xs" />
            <span>Exp: {job.experience}</span>
          </div>
        </div>
      </div>
      
      <button onClick={() => openModal(job.title)} className="w-full md:w-auto bg-[#1E3A8A] group-hover:bg-[#FF9100] text-white px-7 py-3 sm:px-10 sm:py-3.5 rounded-xl font-bold transition-all transform active:scale-95 shadow-md">
        Apply Now
      </button>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="sm:py-16 py-10 mb-6 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1E3A8A] to-blue-800 rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see a fit?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            We are always looking for amazing talent. Send us your CV at <span className="font-bold border-b-2 border-[#FF9100]">careers@vidyaerp.com</span> and we'll get in touch.
          </p>
          <button className="bg-white text-[#1E3A8A] sm:px-10 px-6 py-2.5 sm:py-4 rounded-full font-black hover:scale-105 transition-transform uppercase shadow-lg">
            Send Resume
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop: Simple Fade */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Box: Simple Scale-up */}
          <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.2s_ease-out]">
            
            <div className=" p-4 sm:p-6 border-b flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-bold text-[#1E3A8A]">Application Form</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500"><FaTimes size={25}/></button>
            </div>

            <form className="p-6 space-y-3 sm:space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl outline-none focus:border-[#FF9100]" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl outline-none focus:border-[#FF9100]" required />
                <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-xl outline-none focus:border-[#FF9100]" required />
              </div>
              
              <select 
                value={selectedJob} 
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full p-3 border rounded-xl outline-none focus:border-[#FF9100] bg-white"
              >
                {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
              </select>

              {/* Simple File Input */}
 <div 
  onDragOver={handleDragOver}
  onDragEnter={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  className={`relative border-2 border-dashed rounded-xl p-3 sm:p-8 text-center transition-all ${
    isDragging ? "border-[#FF9100] bg-orange-50" : "border-gray-200 bg-gray-50"
  }`}
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
                  <div className="flex flex-col items-center text-[#1E3A8A]">
                    <FaFileAlt size={30} className="mb-2 text-[#FF9100]" />
                    <p className="font-semibold text-sm">{resume.name}</p>
                    <button type="button" onClick={() => setResume(null)} className="text-xs text-red-500 mt-2 underline">Remove file</button>
                  </div>
                ) : (
                  <>
                    <FaCloudUploadAlt className={`mx-auto mb-2 ${isDragging ? "text-[#FF9100]" : "text-gray-400"}`} size={40} />
                    <p className="text-gray-600 font-medium">Drag & Drop resume here</p>
                    <p className="text-xs text-gray-400 mt-1">or click to browse (PDF, DOCX)</p>
                  </>
                )}
              </div>

              <button type="submit" className="w-full bg-[#FF9100] text-white py-2 sm:py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;