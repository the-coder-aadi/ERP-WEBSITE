import React from 'react';
import { useState, useEffect } from "react";
import { FaSyncAlt } from 'react-icons/fa';

const RequestDemo = () => {
 const [rotate, setRotate] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCaptcha, setGeneratedCaptcha] = useState("")
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  instituteName: "",
  website: "",
  solution: "",
  message: "",
  captcha: ""
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

  if (!formData.instituteName)
    newErrors.instituteName = "Institute name required";

// website validation
if (!formData.website) {
  newErrors.website = "Website required";
} else {
  const websiteRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/;

  if (!websiteRegex.test(formData.website)) {
    newErrors.website = "Enter valid website URL (e.g. example.com)";
  }
}

  if (!formData.solution)
    newErrors.solution = "Please select solution";

  if (!formData.captcha)
    newErrors.captcha = "Captcha required";
  else if (formData.captcha !== generatedCaptcha)
    newErrors.captcha = "Captcha does not match";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  alert("Form submitted successfully 🎉");

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    instituteName: "",
    website: "",
    solution: "",
    message: "",
    captcha: ""
  });

  setErrors({});
  generateCaptcha();
};


  return (
    <section className="w-full bg-[#F3F4F6] px-4 py-16 sm:px-4">

     <div className="flex flex-col items-center mb-8 sm:mb-14 text-center">
          <div className="w-14 h-2.5 bg-[#FF9100] rounded-full mb-6"></div>
          <h2 className="sm:text-2xl text-xl mb-4 md:text-3xl font-bold text-[#3d52d9]">Are you Looking for Smart Solutions to Automate Your Campus?</h2>
   <p className="italic text-gray-700 text-[13px] sm:text-[15px] md:text-[17.5px]  leading-relaxed  font-medium">
         With the best support and smooth implementation, we can help you do just that. <br />
Just fill in this form and our representatives will get in touch with you.
        </p>
        </div>

      <div className="sm:max-w-[1000px]  max-w-[500px]  mx-auto bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-100">
        
        {/* Form Header */}
        <div className="flex items-center text-center justify-center max-[330px]:gap-2 gap-3 py-6 sm:py-8 border-b border-gray-50">
          <span className="material-symbols-outlined text-[#FF9100] text-4xl">headset_mic</span>
          <h2 className="text-xl md:text-2xl max-[330px]:text-[16px]  font-extrabold text-[#2C84D5]">Request a Demo</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-12  md:pt-4 flex flex-col gap-8 sm:gap-10">
          
          {/* SECTION 1: YOUR DETAILS */}
          <div className="sm:space-y-4 space-y-2">
            <div className="flex items-center gap-2 text-[#2C84D5]">
              <span className="material-symbols-outlined text-[20px]" style={{fontSize:"20px"}}>account_circle</span>
              <span className="text-xs font-bold uppercase tracking-widest">Your Details</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600  uppercase">Full Name <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>person</span>
                 <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  type="text"
  placeholder="Your Full Name"
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all
  ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
/>

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Email Address <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>mail</span>
                 <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="your@email.com"
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none
  ${errors.email ? "border-red-500" : "border-gray-200"}`}
/>

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Phone Number <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>smartphone</span>
                <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  type="tel"
  placeholder="+91..."
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none
  ${errors.phone ? "border-red-500" : "border-gray-200"}`}
/>

                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: INSTITUTE DETAILS */}
          <div className="sm:space-y-4 space-y-2">
            <div className="flex items-center gap-2 text-[#2C84D5]">
              <span className="material-symbols-outlined text-[20px]" style={{fontSize:"20px"}}>account_balance</span>
              <span className="text-xs font-bold uppercase tracking-widest">Institute Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Institute Name <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>domain</span>
                 <input
  name="instituteName"
  value={formData.instituteName}
  onChange={handleChange}
  type="text"
  placeholder="Your Institute"
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none
  ${errors.instituteName ? "border-red-500" : "border-gray-200"}`}
/>

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Institute Website <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>language</span>
                 <input
  name="website"
  value={formData.website}
  onChange={handleChange}
  type="text"
  placeholder="www.institute.edu"
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none
  ${errors.website ? "border-red-500" : "border-gray-200"}`}
/>

                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Select Solution</label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>laptop_mac</span>
                <select
  name="solution"
  value={formData.solution}
  onChange={handleChange}
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none
  ${errors.solution ? "border-red-500" : "border-gray-200"}`}
>
  <option value="">Select Solution</option>
  <option>College ERP</option>
  <option>School ERP</option>
  <option>LMS System</option>
</select>

                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: MESSAGE */}
          <div className="sm:space-y-4 space-y-2">
            <div className="flex items-center gap-2 text-[#2C84D5]">
              <span className="material-symbols-outlined text-[20px]" style={{fontSize:"20px"}}>chat</span>
              <span className="text-xs font-bold uppercase tracking-widest">Message</span>
            </div>
            <div className="space-y-2">
              <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Your Message</label>
              <div className="relative mt-1.5">
                <span className="material-symbols-outlined absolute left-3 top-4 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>edit</span>
               <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="3"
  placeholder="Tell us about your requirements..."
  className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all resize-y min-h-[100px] max-h-[300px]"
></textarea>
              </div>
            </div>
          </div>

          {/* CAPTCHA AREA */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-4 max-w-sm mx-auto w-full">
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
  placeholder="ENTER CAPTCHA"
  className={`w-full border rounded-lg px-4 py-1.5  text-center text-lg font-semibold text-[#767676] tracking-widest outline-none
  ${errors.captcha ? "border-red-400" : "border-gray-200"}`}
/>

          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#FF8E00] to-[#FF6200] hover:scale-105 transition-all text-white font-bold sm:py-4 sm:px-12 px-5 rounded-full shadow-xl flex items-center gap-3 py-3 uppercase tracking-wider text-[14px] sm:text-sm">
              Submit Request
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default RequestDemo;