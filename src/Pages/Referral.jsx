import Navbar from "../Components/Navbar"
import { FaCheckCircle,FaLaptopCode,FaAngleDoubleRight,FaSyncAlt,FaUserCheck,FaStar,FaEnvelope,FaUser, FaPhoneAlt, FaBuilding, FaAddressCard, FaUserTie, FaPaperPlane } from "react-icons/fa";
import SideElements from "../Components/SideElements";
import Footer from "../Components/Footer";

import { useState , useEffect} from "react";
function Referral() {
const [errors, setErrors] = useState({});
 const [rotate, setRotate] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
    const [loading, setLoading] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("")

  const [formData, setFormData] = useState({
  fullName: "",
  mobile: "",
  email: "",
  instituteName: "",
  contactPerson: "",
  clientMobile: "",
  clientEmail: "",
  captcha: ""
});

  const handleCaptchaClick = () => {
  setRotate(true)
  generateCaptcha()

  setTimeout(() => {
    setRotate(false);
  }, 400);
}

const generateCaptcha = () => {
  setIsGenerating(true); // Pehle loading chalu karo
  setGeneratedCaptcha(""); // Purana captcha clear kar do (optional)

  // 1.5 second ka delay add kiya hai
  setTimeout(() => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let captcha = "";

    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }

    setGeneratedCaptcha(captcha);
    setIsGenerating(false); // Kaam hone ke baad loading band
  }, 500); // 1500ms = 1.5 seconds
}
  useEffect(() => {
    generateCaptcha();
  }, []);


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

const validate = () => {
  let newErrors = {};

  if (!formData.fullName) newErrors.fullName = "Full name required";
  if (!formData.mobile || formData.mobile.length < 10)
    newErrors.mobile = "Valid mobile required";

if (!formData.email) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
  newErrors.email = "Enter valid Gmail (example@gmail.com)";
}

  if (!formData.instituteName)
    newErrors.instituteName = "Institute name required";

  if (!formData.contactPerson)
    newErrors.contactPerson = "Contact person required";

  if (!formData.clientMobile || formData.clientMobile.length < 10)
    newErrors.clientMobile = "Valid client mobile required";

if (!formData.clientEmail) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.clientEmail)) {
  newErrors.clientEmail = "Enter valid Gmail (example@gmail.com)";
}

 if (!formData.captcha) {
  newErrors.captcha = "Captcha required";
} else if (formData.captcha !== generatedCaptcha) {
  newErrors.captcha = "Captcha does not match";
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
        type: "Referral Registration",
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        instituteName: formData.instituteName,
        contactPerson: formData.contactPerson,
        clientMobile: formData.clientMobile,
        clientEmail: formData.clientEmail,
        message: formData.message,
        date: new Date().toLocaleString()
      })
    });

      alert("Submit Referral successfully 🎉");

  setFormData({
    fullName: "",
  mobile: "",
  email: "",
  instituteName: "",
  contactPerson: "",
  clientMobile: "",
  clientEmail: "",
  captcha: ""
  });

  setErrors({});
  generateCaptcha()
}
  catch (error) {
    console.log(error);
    alert("Error submitting form ❌");
  }finally {
    setLoading(false);
  }
};

      const solutions = [
    "Vidya School ERP",
    "Vidya College Management",
    "Vidya University Suite",
    "Learning Management System",
    "Smart Attendance System",
    "Online Examination Platform",
    "Admission & Enrollment System",
    "Vidya CRM",
    "HR & Payroll Management",
    "Inventory Management",
    "Student Mobile App",
    "Analytics Dashboard"
  ];

  const incentives = [
    { id: 1, text: "Earn a competitive 10% referral bonus on the successful first-year subscription closure of the institution." },
    { id: 2, text: "The incentive is calculated based on the net value of the initial contract signed by the referred entity." },
    { id: 3, text: "Rewards are processed promptly following the final payment confirmation and deployment milestone." },
    { id: 4, text: "In cases of milestone-based payments, incentives are disbursed proportionally as each installment is received." },
    { id: 5, text: "All professional incentives are subject to standard tax regulations as per the Income Tax Act of India." },
    { id: 6, text: "Vidya reserves the right to verify the authenticity of the referral to maintain program integrity." },
    { id: 7, text: "Transparent TDS deductions are applied as per government norms before the final disbursement." },
    { id: 8, text: "Partners must ensure that referrals are genuine and free from any organizational conflict of interest." }
  ];

  const steps = [
    {
      id: 1,
      text: "Identify any academic institution—be it a school, coaching center, or university—looking to digitize their operations with a robust ERP."
    },
    {
      id: 2,
      text: "Connect their decision-makers or administrative heads with our Vidya Business Support Team to initiate the transformation."
    },
    {
      id: 3,
      text: "Collaborate with us throughout the journey, from the initial product walkthrough to the final implementation stage."
    },
    {
      id: 4,
      text: "A referral is successfully recognized once the institution onboard with Vidya ERP, making you eligible for professional rewards and incentives."
    }
  ];

    return(
        <div className="min-h-screen bg-white relative">
<Navbar />

     <div className="hidden max-[701px]:block px-5 py-4  bg-white">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-primary text-[18px] max-[400px]:text-[15.5px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-wide mb-1 opacity-90">
                Vidya's
  Referral Program
            </h1>
            <p className="text-[18px] sm:text-[22px] max-[400px]:text-[14.5px] md:text-[25px] lg:text-[28px] font-semibold text-[#3a3a3a] leading-[1.5] lg:leading-[1.6]">
             Join Our Network
  & Grow Together
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section: Default height fixed hai (Poster look) aur 900px ke neeche scaling shuru */}
      <section className="relative w-full max-[700px]:h-full max-[1023px]:h-[450px] max-[770px]:h-[380px] h-[600px] overflow-hidden bg-[#001529]">

        {/* Banner Image: 900px ke upar poster rahega, niche scale hoga */}
        <div className="w-full h-full bg-white">
          <img
            src="/partner.webp"
            alt="ERP Banner Desktop"
            className="hidden min-[701px]:block w-screen max-[700px]:h-full max-[770px]:h-[380px] max-[1023px]:h-[450px]  h-full object-cover object-top"

          />

          {/* 2. Mobile Image: Jo sirf 600px aur usse niche dikhegi */}
          <img
            src="/partnermobile.webp" // Yahan apni mobile wali image ka path dalo
            alt="ERP Banner Mobile"
            className="block min-[701px]:hidden w-full h-auto object-cover"
          />
        </div>

        {/* Content Overlay: flex-items-start aur pt (padding-top) se text upar shift ho jayega */}
        <div className="absolute inset-0 z-10 top-[0px] md:top-[50px] lg:top-[80px]">
          <div className="max-w-[1500px] mx-auto h-full px-6 pl-8 md:pl-9 lg:pl-18 flex items-start pt-16 md:pt-2 lg:pt-3">

            {/* Left Content Area */}
            <div className="w-full min-[900px]:w-1/2 flex max-[701px]:hidden  flex-col  items-start whitespace-nowrap">

              {/* 1. Small Heading: Size kam kiya hai */}
              <h1 className="text-secondary text-[19px] sm:text-[34px] md:text-[40px] lg:text-[52px]  font-bold tracking-wide mb-2 opacity-90">
               Vidya's<br />
  Referral Program
              </h1>

              {/* 2. Main Heading: Size aur line-height adjust ki hai taaki photo na dhake */}
              <p className="text-[16px] sm:text-[28px] md:text-[34px]  lg:text-[38px] font-semibold text-[#a534fc] leading-[1.4] lg:leading-[1.6]  ">
                 Join Our Network<br />
  & Grow Together
              </p>

            </div>


          </div>
        </div>

        {/* Schedule Button: Centered on poster for desktop */}
        <button  onClick={() => {
    document
      .getElementById("partner-registration")
      .scrollIntoView({ behavior: "smooth" });
  }} className="schedule-btn !hidden min-[900px]:!inline-flex  absolute bottom-20 left-1/2 -translate-x-1/2 z-10 px-10  py-3 rounded-lg bg-orange-500 text-white font-bold text-xl shadow-lg transition-all hover:bg-blue-600">
          Partner With Us
        </button>
      </section>

      {/* Mobile button: below poster and smaller on small screens */}
      <div className="max-[900px]:block hidden">
        <button  onClick={() => {
    document
      .getElementById("partner-registration")
      .scrollIntoView({ behavior: "smooth" });
  }} className="mx-auto mt-4 block px-6 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg transition-all hover:bg-blue-600">
          Partner With Us
        </button>
      </div>


<section className="w-full bg-gray-100 py-10 lg:my-0 my-6 md:py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Orange Accent Line */}
        <div className="w-14 h-2.5 bg-secondary rounded-full mx-auto mb-6"></div>

        {/* Main Heading */}
        <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 leading-tight">
          Refer educational institutions and get rewarded!
        </h2>
        {/* Testimonial Text */}
        <div className="max-w-4xl mx-auto">
         <p className="text-gray-700 text-md md:text-lg leading-relaxed font-medium mb-8 sm:mb-10">
    <span className="text-[#1E3A8A] font-bold">Vidya</span> is at the forefront of educational transformation, providing a 
    comprehensive ERP ecosystem that simplifies campus management. With a massive footprint across 
    <span className="text-secondary font-bold"> 170+ premier institutions</span> and impact on 
    <span className="text-secondary font-bold"> 2 Lakh+ students</span>, we are redefining 
    digital learning every single day.
  </p>
          
          {/* Author/Client Info */}
          <div className="mt-6 sm:mt-8">
            <h4 className="text-secondary font-semibold text-[15px] uppercase tracking-wider">
           Your referral will benefit the institutions you recommend while rewarding your time and effort.
            </h4>
          </div>
        </div>

      </div>
    </section>

  <section className="w-full bg-white py-6 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">

          {/* 🔥 LEFT IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
              src="/joinus.webp" // 👈 apni image daal
              alt="Vidya ERP Dashboard"
              className="w-full lg:w-[76%] max-h-[400px]  object-cover  rounded-2xl hover:-translate-y-2 duration-300 shadow-lg"
            />
          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* small tag */}
            <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>

            {/* heading */}
            <h2 className="text-2xl sm:text-3xl text-center md:text-4xl font-bold text-primary leading-tight mb-6">
              Why Join the Vidya Referral Program?
            </h2>


<p className="text-gray-600 mb-6 text-lg leading-relaxed">
  Vidya is committed to simplifying and enhancing educational management through smart digital solutions. 
  As a referral partner, you not only contribute to transforming institutions but also unlock valuable opportunities for growth and rewards.
</p>

<ul className="space-y-4">

  <li className="flex items-start gap-3 text-gray-600">
    <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
    <span>
      Help institutions adopt modern ERP solutions that improve efficiency, transparency, and decision-making.
    </span>
  </li>

  <li className="flex items-start gap-3 text-gray-600">
    <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
    <span>
      Earn attractive incentives for every successful referral you make with a transparent reward system.
    </span>
  </li>

  <li className="flex items-start gap-3 text-gray-600">
    <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
    <span>
      Expand your network by connecting with schools, colleges, and educational institutions.
    </span>
  </li>

  <li className="flex items-start gap-3 text-gray-600">
    <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
    <span>
      Collaborate with a trusted ERP platform and explore long-term growth opportunities.
    </span>
  </li>

</ul>

          </div>
        </div>
      </section>

 <section className="w-full bg-[#f8f9fb] py-12 sm:py-16 px-5 sm:px-6">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* 🔥 LEFT CONTENT */}
        <div className="w-full lg:w-[70%]">

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
            Solutions You Can Refer
          </h2>

          {/* GRID LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">

            {solutions.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                
                {/* ICON */}
                <FaLaptopCode className="text-secondary text-xl flex-shrink-0" />

                {/* TEXT */}
                <span className="text-sm sm:text-lg font-semibold">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <img
            src="solution.jpg" // 👉 replace later
            alt="Solutions Illustration"
            className="w-full max-w-md rounded-2xl shadow-md hover:-translate-y-2 duration-300"
          />

        </div>

      </div>

    </section>

    <section className="sm:py-16 py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* --- Left Side: Image --- */}
        <div className="w-full lg:w-[45%]">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-300 border border-gray-100">
            <img 
              src="peoplenetwork.jpg" 
              alt="How it works illustration" 
              className="w-full h-auto shadow-md hover:scale-105 duration-300 object-cover"
            />
          </div>
        </div>

        {/* --- Right Side: Content --- */}
        <div className="w-full lg:w-[55%]">
          {/* Main Heading */}
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">
            How the Referral Works
          </h2>

          {/* Steps List */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                <span className="text-secondary mt-1 shrink-0 text-xl">
                  <FaAngleDoubleRight />
                </span>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Note Box */}
          <div className="mt-12 border-l-[6px] border-[#9604c6] bg-slate-50 p-6 rounded-r-xl">
            <p className="text-blue-700  font-medium">
              <span className="text-secondary font-extrabold uppercase tracking-tight mr-2">Please Note:</span>
              Participating in the Vidya Referral Program is absolutely free—there are no hidden joining fees.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full bg-[#f8f9fb] py-8 sm:py-16 px-5 sm:px-6">
      
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-[70%]">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
        Who Can Become a Referral Partner?
      </h2>

      {/* GRID LIST */}
      <div className="grid grid-cols-1 gap-y-5">

        {[
          "Professionals connected with schools, colleges, or educational networks such as consultants, advisors, or former educators.",
          "Individuals who can actively participate in the referral journey — from introduction to successful onboarding.",
          "Self-driven individuals with a growth mindset who want to expand their network and earn through meaningful collaborations."
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 text-gray-700">

            {/* ICON */}
            <FaUserCheck className="text-secondary text-2xl mt-1 flex-shrink-0" />

            {/* TEXT */}
            <span className="text-sm sm:text-lg font-medium leading-relaxed">
              {item}
            </span>

          </div>
        ))}

      </div>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center">

      <img
        src="clients.jpg"
        alt="Referral Partner"
        className="w-full max-w-md rounded-2xl shadow-md hover:-translate-y-2 duration-300"
      />

    </div>

  </div>

</section>


<section className="sm:py-16 py-8 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-7 lg:gap-20">
        
        {/* --- Right Side: Content --- */}
        <div className="w-full lg:w-[55%]">
          {/* Main Heading: Screenshot style */}
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">
            Incentive Structure and Transparency
          </h2>

          {/* Incentives List */}
          <div className="space-y-5">
            {incentives.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <span className="text-secondary mt-1.5 shrink-0 text-sm md:text-base">
                  <FaStar />
                </span>
                <p className="text-gray-600 text-base md:text-[17px] leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Left Side: Image --- */}
        <div className="w-full lg:w-[45%]">
          <div className="rounded-3xl overflow-hidden bg-white hover:-translate-y-2 duration-300 shadow-xl p-2 border border-gray-100">
            <img 
              src="money.jpg" 
              alt="Incentive Structure Illustration" 
              className="w-full h-auto object-cover shadow-md  rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>


  
  
    <section className="sm:py-16 py-8 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Main Heading: Royal Blue --- */}
        <h2 className="text-primary text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Join Our Mission and Scale With Us!
        </h2>

        {/* --- Subheading --- */}
        <p className="text-gray-500 text-lg md:text-xl font-medium mb-8">
          Have questions? Reach out to our partnership team:
        </p>

        {/* --- Contact Details --- */}
        <div className="flex flex-col items-center gap-4 mb-8 sm:mb-12">
          {/* Phone Numbers */}
          <div className="flex  items-center gap-3 text-gray-700 text-lg md:text-xl font-bold">
            <FaPhoneAlt className="text-primary text-xl" />
            <span>+91 98765 43210, 98765 43211, 98765 43212</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-700 text-lg md:text-xl font-bold">
            <FaEnvelope className="text-secondary text-xl" />
            <a href="mailto:partners@vidyaerp.com" className="hover:text-secondary transition-colors">
              partners@vidyaerp.com
            </a>
          </div>
        </div>

        {/* --- Register Button: Screenshot Style --- */}
        <button  onClick={() => {
    document
      .getElementById("partner-registration")
      .scrollIntoView({ behavior: "smooth" });
  }} className="bg-secondary text-white px-7 py-3.5 rounded-full font-black text-md sm:text-lg uppercase tracking-widest shadow-xl shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all transform active:scale-95">
          Register Now
        </button>

      </div>
    </section>

<section id="partner-registration" className="sm:py-16 py-8 px-4 md:px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-100/50 border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-white px-8 py-6 border-b border-gray-50">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 text-center lg:text-left ">
              Referral <span className="text-primary">Registration</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-8">
            
            {/* --- SECTION 1: YOUR DETAILS --- */}
            <div className=" mb-10 sm:mb-12">
              <div className="flex items-center gap-3 mb-5 sm:mb-8 border-l-4 border-primary pl-4">
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
                  Your Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
                {/* Full Name */}
                <div className="flex items-start gap-3">
                  <FaUser className="text-gray-400 mt-0.5 text-xl shrink-0" /> {/* Icon Bahar */}
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Full Name *</label>
            <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  type="text"
  placeholder="John Doe"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 text-[#666666] text-md font-semibold outline-none duration-200 focus:border-[#8c00ff30] transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>
                
                {/* Mobile */}
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Mobile Number *</label>
               <input
  name="mobile"
  value={formData.mobile}
  onChange={handleChange}
  type="tel"
  placeholder="+91..."
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 text-[#666666] duration-200 focus:border-[#8c00ff30] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.mobile ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Email Address *</label>
              <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="you@example.com"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 duration-200 focus:border-[#8c00ff30] text-[#666666] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.email ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION 2: REFERRAL DETAILS --- */}
            <div className="mb-6 sm:mb-12">
              <div className="flex items-center gap-3 mb-5 sm:mb-8 border-l-4 border-primary pl-4">
                <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
                  Referral Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {/* Institute Name */}
                <div className="flex items-start gap-3">
                  <FaBuilding className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Institute Name *</label>
                  <input
  name="instituteName"
  value={formData.instituteName}
  onChange={handleChange}
  type="text"
  placeholder="e.g. Pune University"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 duration-200 focus:border-[#8c00ff30] text-[#666666] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.instituteName ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>
                
                {/* Contact Person */}
                <div className="flex items-start gap-3">
                  <FaUserTie className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Contact Person *</label>
                  <input
  name="contactPerson"
  value={formData.contactPerson}
  onChange={handleChange}
  type="text"
  placeholder="Principal / Director"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 duration-200 focus:border-[#8c00ff30] text-[#666666] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.contactPerson ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>

                {/* Client Mobile */}
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Client Mobile *</label>
          <input
  name="clientMobile"
  value={formData.clientMobile}
  onChange={handleChange}
  type="tel"
  placeholder="Mobile Number"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 duration-200 focus:border-[#8c00ff30] text-[#666666] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.clientMobile ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>

                {/* Client Email */}
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-gray-400 mt-0.5 text-xl shrink-0" />
                  <div className="flex-1 group">
                    <label className="block text-md font-medium text-gray-600 mb-1 uppercase">Client Email *</label>
      <input
  name="clientEmail"
  value={formData.clientEmail}
  onChange={handleChange}
  type="email"
  placeholder="client@institute.com"
  required
  className={`w-full bg-white border-2 rounded-xl px-4 py-2 duration-200 focus:border-[#8c00ff30] text-[#666666] text-md font-semibold outline-none transition-all placeholder:text-gray-300 placeholder:font-normal
  ${errors.clientEmail ? "border-red-500" : "border-gray-200"}`}
/>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CAPTCHA & SUBMIT (Responsive Fix) --- */}
            <div className=" mt-8 sm:mt-16 flex flex-col items-center gap-8">
              
              {/* Captcha Box */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-lg bg-slate-50 p-6 rounded-2xl border border-dashed border-gray-300">
  <div className="relative bg-white px-6 py-3 border-2 border-gray-100 rounded-lg font-mono font-bold tracking-[6px] text-xl italic text-gray-800 shadow-inner select-none flex items-center gap-4 overflow-hidden">
  
  {/* CAPTCHA TEXT (blur added) */}
  <span className="relative z-10 blur-[1.3px]">
    {isGenerating ? "..." : generatedCaptcha}
  </span>

  {/* NOISE LAYER */}
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute top-1 left-2 w-2 h-2 bg-gray-400 rotate-12"></div>
    <div className="absolute top-3 left-10 w-1 h-1 bg-gray-500"></div>
    <div className="absolute bottom-2 right-5 w-2 h-2 bg-gray-400 rotate-45"></div>
    <div className="absolute top-2 right-10 w-1.5 h-1.5 bg-gray-500"></div>
    <div className="absolute bottom-3 left-6 w-1 h-1 bg-gray-400"></div>
  </div>

  {/* REFRESH ICON */}
  <FaSyncAlt
    onClick={handleCaptchaClick}
    style={{
      transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
      transition: "0.4s"
    }}
    className="text-[20px] text-blue-500 cursor-pointer relative z-10"
  />
</div>
                
          <input
  name="captcha"
  value={formData.captcha}
  onChange={handleChange}
  type="text"
  placeholder="Enter Captcha"
  required
  className={`flex-1 min-w-[120px] px-5 py-2 border-2 rounded-lg duration-200 focus:border-[#8c00ff30] outline-none focus:border-primary text-[#4f4e4e] uppercase tracking-widest text-md text-center font-bold transition-all
  ${errors.captcha ? "border-red-500" : "border-gray-300"}`}
/>
              </div>

              <button disabled={loading} type="submit" className="w-full sm:w-auto bg-gradient-to-r from-[#cb0af7] to-[#8c00ff] text-white font-black px-5 sm:px-12 py-3 sm:py-4 rounded-xl  hover:-translate-y-1 transition-all uppercase tracking-[2px] max-[400px]:text-sm sm:text-md flex items-center justify-center gap-4">
               {loading ? "Submiting..." : "Submit Referral"}
                <FaPaperPlane className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      </div>


    </section>

    <SideElements />
    <Footer />

        </div>
    )
}
export default Referral