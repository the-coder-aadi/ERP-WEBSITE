import Navbar from "../Components/Navbar";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Components/firebase";

import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import RequestDemo from "../Components/RequestDemo";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import Counter from "../Components/Counter";

function Home() {
  const [generatedCaptcha, setGeneratedCaptcha] = useState("")
  const [timer, setTimer] = useState(120)
  const [rotate, setRotate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    captchaInput: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // 🔥 IMPORTANT: error remove on typing
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };
  const handleCaptchaClick = () => {
    setRotate(true)
    generateCaptcha()

    setTimeout(() => {
      setRotate(false);
    }, 400);
  }

  useEffect(() => {
    generateCaptcha(); // first time

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          generateCaptcha(); // 🔥 new captcha
          return 120;        // reset timer
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateCaptcha = () => {
    setIsGenerating(true);
    setGeneratedCaptcha("");

    // 1.5 second ka delay add kiya hai
    setTimeout(() => {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let captcha = "";

      for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
      }

      setGeneratedCaptcha(captcha);
      setIsGenerating(false); 
    }, 500); 
  }


  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name required";

    if (!formData.email) {
      newErrors.email = "Email required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Enter valid Gmail (example@gmail.com)";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }
    if (formData.captchaInput !== generatedCaptcha) {
      newErrors.captcha = "Invalid captcha";
    }
    if (!formData.position) {
      newErrors.position = "select a position";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;


    if (!validate()) return;

    try {
  
      setLoading(true);

      // 3. Firebase save
      await addDoc(collection(db, "enquiries"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        createdAt: new Date()
      });

      await fetch("https://script.google.com/macros/s/AKfycby4Qa7jLNEk4z8c8lH7wInzbGyGBXFvHmCG4U8CsBlKbvN-UWae5JXTsUYI8hGq4U7D-w/exec", {
        method: "POST",
        body: JSON.stringify({
          type: "enquiry",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
           select: formData.position,
          date: new Date().toLocaleString()
        })
      });

      // 4. success
      alert("Enquiry sent successfully 🎉");

      // 5. reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        captchaInput: ""
      });
      generateCaptcha()


    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");

    } finally {
      setLoading(false);
    }
  };


  const handleFocus = (field) => {
  setErrors((prev) => ({
    ...prev,
    [field]: ""
  }));
};


  const stories = [
    "Organizations need efficient digital solutions to manage data and academic operations. Choosing the right ERP can be challenging, but Vidya ERP provides a reliable and user-friendly platform that fits institutional needs effectively.",

    "Managing institutional data and daily operations online has always been challenging. Vidya ERP has helped us streamline processes and maintain data efficiently with a flexible and cost-effective solution.",

    "With the growing number of students and staff, we needed a complete solution to manage operations smoothly. Vidya ERP’s cloud-based platform has simplified our workflows and improved overall data management."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };



  const solutionsData = [
    {
      icon: <FaUniversity />,
      title: "Vidya College ERP",
      description: "A powerful cloud-based ERP solution designed to streamline operations and enhance learning management for colleges and higher institutions."
    },
    {
      icon: <FaSchool />,
      title: "Vidya School ERP",
      description: "An advanced school management system that simplifies administration, improves communication, and supports better student outcomes."
    },
    {
      icon: <FaBookOpen />,
      title: "Vidya LMS",
      description: "A complete learning management system to create, manage, and deliver courses, assessments, and performance tracking seamlessly."
    },
    {
      icon: <FaCheckSquare />,
      title: "EasyCheck",
      description: "A smart digital evaluation system that simplifies answer checking and reduces manual workload through automated processes."
    },
    {
      icon: <FaLaptopCode />,
      title: "EasyPariksha",
      description: "An AI-powered online examination platform for secure, scalable, and seamless assessment management."
    },
    {
      icon: <FaCertificate />,
      title: "EasyAccredit",
      description: "A comprehensive accreditation management system to track, analyze, and meet institutional compliance standards."
    }
  ];



  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      {/* Mobile Content Area: Below navbar, above poster on small screens */}
      <div className="hidden max-[900px]:block px-4 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <p className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
              Smart ERP Solutions for Modern Institutions
            </p>
            <h1 className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
              Enhancing Education
              with <span className="text-[#ffffff] bg-secondary px-2 rounded-md">Integrated</span> <br />
              Complete <span className="text-[#ffffff] bg-secondary px-2 rounded-md">ERP Platform</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full h-[600px] max-[900px]:h-auto overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full max-[900px]:h-auto bg-white">
          <img
            src="/heropic.webp"
            
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-full h-full object-cover object-top"
          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/heropicmobile.webp" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-[1500px] mx-auto h-full px-6 flex items-start pt-16 md:pt-7 lg:pt-6">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[900px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <p className="text-primary text-[16px] sm:text-[20px] md:text-[26px] lg:text-[33px]  font-bold tracking-wide mb-2 opacity-90">
                Smart ERP Solutions for Modern Institutions
              </p>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <h1 className="text-[16px] sm:text-[20px] md:text-[25px]  lg:text-[30px] font-semibold text-[#3a3a3a] leading-[1.9] lg:leading-[1.6]  ">
                Enhancing Education
                with <span className="text-[#ffffff] bg-secondary px-2 rounded-md">Integrated</span> <br />
                Complete  <span className="text-[#ffffff] bg-secondary px-2 rounded-md">ERP Platform</span>
              </h1>


            </div>

            {/* Right Side: Enquiry Form (Visible only above 900px) */}
            <div className="hidden min-[900px]:block  lg:w-[300px] ml-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 self-center">
              {/* Form Header */}
              <div className="bg-white px-6 py-2 border-b border-gray-50 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px] fill-1">send</span>
                <h3 className="text-[17px] font-extrabold text-primary uppercase tracking-tight">Enquiry Form</h3>
              </div>

              <form className="p-4 flex flex-col gap-1.5" spellCheck={false}>
                {/* Section Title */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontSize: "14px" }}>account_circle</span>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Your Details</span>
                </div>

                {/* Input Fields with Icons */}
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "18px" }}>person</span>
                  <input type="text" placeholder="Your Name"
                    onFocus={() => handleFocus("name")}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}

                    className={`w-full bg-white border rounded-lg pl-10 pr-4 py-2 outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  text-sm  transition-all
  ${errors.name ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />

                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "18px" }}>mail</span>
                  <input type="email" placeholder="you@example.com"
                    value={formData.email}
                     onFocus={() => handleFocus("email")}
                    name="email"
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-lg pl-10 pr-4 outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  py-2 text-sm  transition-all
  ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />

                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "18px" }}>smartphone</span>
                  <input type="tel" placeholder="+91..."
                    value={formData.phone}
                     onFocus={() => handleFocus("phone")}
                    name="phone"
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />

                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "18px" }}>badge</span>
                  <select
                    value={formData.position}
                    onChange={handleChange}
                     onFocus={() => handleFocus("position")}
                    name="position"
                    className={`w-full bg-white border appearance-none rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.position ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}>
                    <option value="" disabled>Select Position</option>
                    <option value="Principal">Principal</option>
                    <option value="Director">Director</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">arrow_drop_down</span>

                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-[18px]" style={{ fontSize: "18px" }}>chat</span>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                     onFocus={() => handleFocus("message")}
                    name="message"
                    placeholder="Message for us..." rows="1" className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  transition-all placeholder:text-gray-300 min-h-[40px] "></textarea>

                </div>

                {/* Captcha Section */}
                <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-white px-3 py-1 border border-gray-200 rounded font-mono font-bold tracking-[5px] text-md select-none italic text-gray-700 shadow-sm relative overflow-hidden">
                      {generatedCaptcha}

                      {/* noise overlay */}
                      <div className="absolute inset-0 pointer-events-none opacity-100">
                        <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:6px_6px]"></div>
                      </div>

                      {/* slight blur + distortion layer */}
                      <div className="absolute inset-0 pointer-events-none backdrop-blur-[0.8px]"></div>
                    </div>
                    <button type="button" onClick={() => {
                      generateCaptcha()
                      handleCaptchaClick()
                    }}
                      style={{
                        transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      className="material-symbols-outlined text-primary cursor-pointer transition-transform duration-500">cached</button>
                  </div>
                  <p className="text-[12px] font-bold text-red-500 animate-pulse">New CAPTCHA in {timer}s</p>
                  <input type="text"
                    value={formData.captchaInput}
                     onFocus={() => handleFocus("captcha")}
                    onChange={handleChange}
                    name="captchaInput"
                    placeholder="ENTER CAPTCHA" className={`w-full bg-white border text-center rounded-lg px-5 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.captcha ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />

                </div>

                {/* Send Enquiry Button (Orange with Icon) */}
                <button onClick={handleSubmit}
                  disabled={loading}
                  className="w-full cursor-pointer bg-gradient-to-r from-[#a600ff] to-[#dd00ff] hover:from-[#c800ff] hover:to-[#ff00ee] text-white font-extrabold py-2.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-1 group">
                  <span className="uppercase tracking-wider text-[12px]"> {loading ? "Sending..." : "Send Enquiry"}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={{ fontSize: "18px" }}>send</span>
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Schedule Button: Centered on poster for desktop */}
        <a
          href="#request-demo"
          className="schedule-btn !hidden min-[900px]:!inline-flex absolute bottom-18 left-1/2 -translate-x-1/2 z-10 px-8 py-3 rounded-lg  text-white font-bold text-lg shadow-lg transition-all "
        >
          Schedule a Free Demo
        </a>
      </section>

      {/* Mobile button: below poster and smaller on small screens */}
      <div className="max-[900px]:block hidden">
        <a href="#request-demo" className="mx-auto mt-4 block w-fit px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg transition-all ">
          Schedule a Free Demo
        </a>
      </div>



      {/* --- MOBILE/TABLET WALA FORM (Hero ke niche) --- */}
      <div className="min-[900px]:hidden w-full px-4 py-6 ">
        <div className="max-w-[450px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

          {/* Form Header - Height kam ki hai */}
          <div className="bg-white px-5 py-3 border-b border-gray-50 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">send</span>
            <h3 className="text-[16px] font-extrabold text-primary uppercase tracking-tight">Enquiry Form</h3>
          </div>

          <form className="p-4 flex flex-col gap-2.5"> {/* Gap kam kiya hai */}
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontSize: "17px" }}>account_circle</span>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Your Details</span>
            </div>

            {/* Input Fields - Padding kam ki hai height ghatane ke liye */}
            <div className="space-y-2"> {/* Space-y-3 se space-y-2 kiya */}
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "17px" }}>person</span>
                <input type="text" placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white border rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.name ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]"
                  style={{ fontSize: "17px" }}>mail</span>
                <input type="email" placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className={`w-full bg-white border rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "17px" }}>smartphone</span>
                <input type="tel" placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  className={`w-full bg-white border rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />
              </div>

              <div className="relative text-[#888585]">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" style={{ fontSize: "17px" }}>badge</span>
                <select
                  value={formData.position}
                  onChange={handleChange}
                  name="position"
                  className={`w-full bg-white border appearance-none rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.position ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}>
                  <option value="" disabled>Select Position</option>
                  <option value="Principal">Principal</option>
                  <option value="Director">Director</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Other">Other</option>

                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">arrow_drop_down</span>
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-[18px]" style={{ fontSize: "17px" }}>chat</span>
                <textarea
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Message..." rows="2" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none duration-200 focus:border-[#8c00ff54]  focus:border-primary resize-y min-h-[30px]"></textarea>
              </div>
            </div>


            <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-white px-3 py-1 border border-gray-200 rounded font-mono font-bold tracking-[5px] text-md select-none italic text-gray-700 shadow-sm relative overflow-hidden">
                  {generatedCaptcha}

                  {/* noise overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-100">
                    <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:6px_6px]"></div>
                  </div>

                  {/* slight blur + distortion layer */}
                  <div className="absolute inset-0 pointer-events-none backdrop-blur-[0.8px]"></div>
                </div>
                <button
                  onClick={() => {
                    generateCaptcha()
                    handleCaptchaClick()
                  }}
                  style={{
                    transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  type="button" className="material-symbols-outlined text-primary duration-300 text-2xl">cached</button>
              </div>
              <p className="text-[12px] font-bold text-red-500 animate-pulse">New CAPTCHA in {timer}s</p>
              <input type="text"
                value={formData.captchaInput}
                onChange={handleChange}
                name="captchaInput"
                placeholder="ENTER CAPTCHA" className={`w-full bg-white text-center text-[#5d5d5d] font-semibold border rounded-lg px-5 py-2 text-[15px] outline-none duration-200 focus:border-[#8c00ff54]  transition-all
  ${errors.captcha ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`} />
            </div>


            <button onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#a600ff] to-[#dd00ff] hover:from-[#c800ff] hover:to-[#ff00ee] text-white font-extrabold py-2.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-1 group">
              <span className="uppercase tracking-wider text-[12px]"> {loading ? "Sending..." : "Send Enquiry"}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" style={{ fontSize: "18px" }}>send</span>
            </button>
          </form>
        </div>
      </div>

      {/* --- About/Empower Section (Right After Hero) --- */}
      <section className="w-full bg-white py-18 md:py-25 px-10  max-[400px]:px-4 md:px-20 lg:px-32 overflow-hidden">

        {/* Container ki max-width kam ki hai (1400px -> 1200px) taaki sides se padding zyada dikhe */}
        <div className="max-w-[1200px] mx-auto flex flex-col min-[1000px]:flex-row items-center gap-16 lg:gap-30">

          {/* Left Side: Bulb Graphic - Size aur chota kiya hai */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full min-[1000px]:w-[40%] flex justify-center"
          >
            <div className="relative max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] w-full">
              <img
                src="/empower.jpg"
                alt="Empowering Education Bulb"
                className="w-full h-auto object-contain transition-transform scale-125 duration-500 hover:-translate-y-3"
              />
            </div>
          </motion.div>

          {/* Right Side: Content Area - Width thodi kam ki hai (65% -> 60%) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full min-[1000px]:w-[60%] flex flex-col items-start"
          >

            {/* Orange Accent Line */}
            <div className="w-15 h-[10px] bg-secondary rounded-full mb-6"></div>

            {/* Main Heading - Responsive sizing */}
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-semibold text-[#3f3f3f] leading-[1.3] mb-6 tracking-tight">
              Empowering Educational Institutions with Smart Digital ERP Solutions
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-500 text-[14px] md:text-[15.5px] leading-[1.8] text-justify font-medium opacity-90">
              <p>
                Driving the digital transformation of schools, colleges, and universities
                with advanced ERP solutions. Vidya ERP provides a comprehensive suite of
                tools designed to simplify institutional operations, enhance productivity,
                and improve the overall teaching and learning experience.
              </p>

              <p>
                Whether you manage a school, college, or university, Vidya ERP is built to
                meet your unique requirements. Our platform empowers administrators,
                teachers, students, and parents by streamlining processes, improving
                communication, and delivering a seamless, user-friendly digital experience.
              </p>
            </div>
          </motion.div >

        </div>
      </section>

      <main className="w-full bg-[#FBFBFC] max-[400px]:px-4 md:px-16 py-14 md:py-18 px-8">

        {/* Max-width container to keep content centered */}
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* 1. Orange Accent Line (Bilkul center mein) */}
          <div className="w-14 h-2.5 bg-secondary rounded-full mb-8"></div>

          {/* 2. Main Heading: SMART CLOUD-BASED SOLUTIONS */}
          {/* Text colors aur sizes photo ke hisab se exact match kiye hain */}
          <h2 className="text-[28px] uppercase sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-primary leading-tight mb-8 tracking-tight">
            Smart Cloud-Based ERP Solutions
          </h2>

          {/* 3. Sub-text (Italicized Description) */}
          {/* 'italic' class aur professional font style use kiya hai readability ke liye */}
          <p className="italic text-gray-700 text-[15px] sm:text-[16px] md:text-[20.5px]  leading-relaxed  font-semibold">
            Powerful, cloud-driven ERP solutions designed to streamline operations,
            simplify administration, and enhance learning outcomes for modern educational institutions.
          </p>

        </div>


        <section className="w-full mt-12 ">
          <div className="max-w-[1400px] mx-auto grid sm:gap-6  grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4">

            {solutionsData.map((item, index) => (
              <div
                key={index}
                className="bg-white border-[1.5px] will-change-contents border-blue-100 rounded-[15px] max-[400px]:p-5 p-7 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
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


      </main>
      {/* 
    <section className="bg-[#2F2FB2] py-12 px-5 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-2.5 bg-secondary rounded-full"></div>
        </div>
        <h2 className="text-white text-2xl md:text-[32px] font-bold mb-12">
          Transforming Education with Vidya ERP
        </h2>

        <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 sm:gap-10">

    
          <div className="flex flex-col items-center">

      
            <div className="border-4 border-white hover:-translate-y-2 transition-all duration-300  py-8 w-full">
              <Counter value={4} suffix="L+" />
            </div>

            <p className="text-white font-semibold mt-2 text-2xl sm:text-3xl">Learners</p>
          </div>

     
          <div className="flex flex-col items-center">
            <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300 ">
              <Counter value={142} suffix="+" />
            </div>
            <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Clients</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300 ">
              <Counter value={47} suffix="+" />
             
            </div>
            <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Modules</p>
          </div>

        </div>
        
      </section> */}
      <Counter />

      <section className="w-full bg-[#F9FAFB] py-12 sm:py-16 px-5">

        <div className="max-w-6xl mx-auto">

          {/* Top Line */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-2.5 bg-secondary rounded-full"></div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold mb-6 sm:mb-12">
            What We Offer
          </h2>

          {/* Content */}
          <div className="flex flex-col min-[900px]:flex-row items-center gap-8 sm:gap-10">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-1/2">
              <img
                src="offer.jpg"
                alt="offers"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>

            {/* RIGHT LIST */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 min-[470px]:grid-cols-2 gap-y-4 gap-x-10">

              {[

                "Dedicated Support & Training",
                "Mobile Applications",
                "Biometric Integration",
                "Smart Notifications",
                "QR Code Integration",
                "Barcode Support",
                "End-to-End ERP Solutions",
                "Intuitive User Interface",
                "Advanced Dashboards & Reporting",
                "Seamless System Integration",
                "Easy Third-Party API Integration",
                "Secure Data Management & Centralized Repository"

              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer 
            transition-all duration-300 hover:translate-x-2"
                >
                  {/* Dot */}
                  <div className="w-4 h-4 min-w-[16px] min-h-[16px] rounded-full bg-[#E6E8FF] flex items-center justify-center ">
                    <div className="w-2 h-2 rounded-full bg-[#4c3bcf]"></div>
                  </div>

                  {/* Text */}
                  <p className="text-[15px] font-medium">
                    {item}
                  </p>
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>




      <section className="w-full bg-primary px-2 py-10 mt-6 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* --- Orange Line --- */}
          <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

          {/* --- Heading --- */}
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            Success Stories
          </h2>

          {/* --- Quote Icon --- */}
          <div className="text-white/30 mb-8">
            <FaQuoteLeft className="text-5xl md:text-6xl" />
          </div>

          {/* --- Content Area with Arrows --- */}
          <div className="relative w-full flex items-center justify-between gap-2 md:gap-10">

            {/* Left Arrow */}
            <button
              onClick={prevStory}
              className="text-[#cfb703] hover:text-white cursor-pointer transition-colors p-2 z-10"
            >
              <FaChevronLeft className="text-2xl md:text-4xl" />
            </button>

            {/* Text Container with Animation */}
            <div className="flex-1 min-h-[150px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm sm:text-[13px] md:text-[17px] font-medium leading-[1.8] max-w-4xl"
                >
                  {stories[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextStory}
              className="text-[#cfb703] hover:text-white cursor-pointer transition-colors p-2 z-10"
            >
              <FaChevronRight className="text-2xl md:text-4xl" />
            </button>

          </div>

          {/* --- Dots Indicators (Optional but looks professional) --- */}
          <div className="flex gap-2 mt-12">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-secondary" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>

        </div>
      </section>



      <div id="request-demo">
        <RequestDemo />
      </div>
      <Footer />
      <SideElements />
    </div>
  );
}

export default Home;