import React from 'react';
import { useState,useEffect } from 'react';
import { FaSyncAlt } from 'react-icons/fa';

const OurDemo = () => {

   const [rotate, setRotate] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
    const [loading, setLoading] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("")

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
  captcha: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));

  // typing ke time error hatao
  setErrors((prev) => ({
    ...prev,
    [name]: ""
  }));
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

  if (!formData.position || formData.position === "Select Position")
    newErrors.position = "Select position";

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
          type: "Download Brochure",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          select: formData.position,
          message: formData.message,
          date: new Date().toISOString()
        })
      });
      alert("Form submitted successfully 🎉");

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    captcha: ""
  });

  setErrors({});
  } catch (error) {
    console.log(error);
    alert("Error submitting form ❌");
  }finally {
    setLoading(false);
  }
};

const [errors, setErrors] = useState({});


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

  return (
    <section className="w-full bg-[#F3F4F6] px-4 py-16 sm:px-4">

      <div className="flex flex-col items-center mb-6 sm:mb-10 text-center">
        <div className="w-14 h-2.5 bg-secondary rounded-full mb-6"></div>
        <h2 className="sm:text-2xl text-xl mb-4 md:text-3xl font-bold text-primary">Request For Demo</h2>
        <p className="italic text-gray-600 text-[13px] sm:text-[15px] md:text-[16.5px]  leading-relaxed  font-medium">
          Our experts will help you find the perfect solution for your needs.

        </p>
      </div>

      <div className="sm:max-w-[800px]  max-w-[500px]  mx-auto bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-100">

        {/* Form Header */}

        <form onSubmit={handleSubmit} spellCheck={false} className="p-6 md:p-10  flex flex-col gap-6 sm:gap-8">

          {/* SECTION 1: YOUR DETAILS */}
          <div className="sm:space-y-4 space-y-2">


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600  uppercase">Full Name <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[20px]" style={{ fontSize: "20px" }}>person</span>
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
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[20px]" style={{ fontSize: "20px" }}>mail</span>
                 <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="your@email.com"
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all
  ${errors.email ? "border-red-500" : "border-gray-200"}`}
/>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Phone Number <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[20px]" style={{ fontSize: "20px" }}>smartphone</span>
               <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  type="tel"
  placeholder="+91..."
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all
  ${errors.phone ? "border-red-500" : "border-gray-200"}`}
/>
                </div>
              </div>


              <div className="sm:space-y-4 space-y-2">


                <div className=" gap-4 sm:gap-6">


                  <div className="space-y-2">
                    <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Select Position</label>
                    <div className="relative mt-1.5">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[20px]" style={{ fontSize: "20px" }}>laptop_mac</span>
                 <select
  name="position"
  value={formData.position}
  onChange={handleChange}
  className={`w-full border rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all
  ${errors.position ? "border-red-500" : "border-gray-200"}`}
>
  <option>Select Position</option>
  <option>College ERP</option>
  <option>School ERP</option>
  <option>LMS System</option>
</select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: MESSAGE */}

            </div>
          </div>

          <div className="sm:space-y-4 space-y-2">

            <div className="space-y-0">
              <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Your Message</label>
              <div className="relative mt-1.5">
                <span className="material-symbols-outlined absolute left-3 top-4 text-primary text-[20px]" style={{ fontSize: "20px" }}>edit</span>
             <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="3"
  placeholder="Tell us about your requirements..."
  className="w-full border border-gray-200 rounded-lg min-h-[80px] pl-10 pr-4 py-3 text-sm outline-none"
/>
              </div>
            </div>
          </div>
          {/* SECTION 2: INSTITUTE DETAILS */}


          {/* CAPTCHA AREA */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-4 max-w-sm mx-auto w-full">
            <div className="flex items-center gap-4">
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
              className="text-[20px] text-primary cursor-pointer relative z-10"
            />
          </div>
            
            </div>
          <input
  name="captcha"
  value={formData.captcha}
  onChange={handleChange}
  type="text"
  placeholder="ENTER CAPTCHA"
  className={`w-full border text-lg rounded-lg px-4 py-1.5 text-center font-semibold tracking-widest outline-none
  ${errors.captcha ? "border-red-500" : "border-gray-200"}`}
/>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-center">
            <button disabled={loading} className="bg-gradient-to-r from-[#6f00ff] to-[#aa00ff] hover:scale-105 cursor-pointer transition-all text-white font-bold sm:py-4 sm:px-12 px-5 rounded-full shadow-xl flex items-center gap-3 py-3 uppercase tracking-wider text-[14px] sm:text-sm">
              {loading ? "Submitting..." : "Submit Request"}
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default OurDemo;