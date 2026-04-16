import React from 'react';
import { db } from './firebase';
import { FaWhatsapp, FaRegCommentDots, FaEnvelope, FaPhoneAlt, FaChevronUp, FaPaperPlane, FaTimes } from 'react-icons/fa';
import  { useState, useEffect } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from './firebase';


const SideElements = () => {
const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const [confirmationResult, setConfirmationResult] = useState(null);

useEffect(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }
}, []);



const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  institute: "",
  product: "",
});

const resetForm = () => {
  setFormData({
    fullName: "",
    email: "",
    phone: "",
    institute: "",
    product: []
  });

  setErrors({});
};

const downloadBrochure = () => {
if (formData.product.includes("school")) {
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/vidya_school_brochure.pdf";
    link.download = "Vidya-School-Brochure.pdf";
    link.click();
  }, 0);
}

if (formData.product.includes("college")) {
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/vidya_college_brochure.pdf";
    link.download = "Vidya-College-Brochure.pdf";
    link.click();
  }, 500);
}
};

const validate = () => {
  let newErrors = {};

  if (!formData.fullName) newErrors.fullName = "Name required";

  if (!formData.email.includes("@")) {
    newErrors.email = "Valid email required";
  }

  if (formData.phone.length < 10) {
    newErrors.phone = "Valid phone required";
  }

  if (!formData.institute) {
  newErrors.institute = "Institute required";
}

if (formData.product.length === 0) {
  newErrors.product = "Select at least one brochure";
}

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleGenerateOTP = async (e) => {
  e.preventDefault();

  if (!validate()) return;
  setLoading(true);

  const appVerifier = window.recaptchaVerifier; 

  try {
    const result = await signInWithPhoneNumber(
      auth,
      "+91" + formData.phone,
      appVerifier
    );

    setConfirmationResult(result);
    setOtpSent(true);

    alert("OTP Sent ✅");

  } catch (error) {
    console.error(error);
    alert("OTP Failed ❌");
  }
   setLoading(false);
};

const handleVerifyOTP = async () => {
  if (!otp) {
    alert("Enter OTP");
    return;
  }

  try {
    await confirmationResult.confirm(otp);

    // ✅ OTP verified → ab data save hoga
    await addDoc(collection(db, "brochureLeads"), {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      institute: formData.institute,
      product: formData.product,
      createdAt: new Date()
    });

    downloadBrochure();

    alert("Verified & Download Started 🎉");

    resetForm();
    setIsModalOpen(false);
    setOtp("");
    setOtpSent(false);

  } catch (error) {
    console.error(error);
    alert("Invalid OTP ❌");
  }
};

  const [isModalOpen, setIsModalOpen] = useState(false);


const [isVisible, setIsVisible] = useState(false);

  // 1. Scroll Check Logic: Jab 300px neeche jaye tab button dikhao
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Isse smooth scroll hoga
    });
  };

useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  useEffect(() => {
  const openModal = () => {
    setIsModalOpen(true);
  };

  window.addEventListener("openBrochureModal", openModal);

  return () => {
    window.removeEventListener("openBrochureModal", openModal);
  };
}, []);
 

  return (
    <>
    <div className="fixed right-0 top-0 h-full z-[55]  pointer-events-none">
      
      {/* 1. Download Brochure Button (Sticky Center-Right) */}
      <div className="absolute right-0 top-[17%]  pointer-events-auto">
        <button onClick={() => setIsModalOpen(true)} className="bg-[#00b7ff] text-white font-medium py-2 px-3 max-[500px]:py-1 max-[500px]:px-2 rounded-sm shadow-lg flex text-sm sm:text-xl items-center gap-2 [writing-mode:vertical-lr] rotate-0 hover:bg-[#006fe6] transition-all duration-300">
          Download Brochure
        </button>
      </div>

      {/* 2. Floating Action Icons (Bottom-Right) */}
      <div className="absolute bottom-13 max-[500px]:right-1  right-4 flex flex-col gap-4 pointer-events-auto">
        
        {/* WhatsApp Icon */}
        <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" 
           className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="text-[28px] min-[501px]:text-[35px]" />
        </a>

        {/* Live Chat Icon */}
        <button className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#002B5B] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaRegCommentDots  className="text-[25px] min-[501px]:text-[35px]" />
        </button>

        {/* Email Icon */}
        <a href="mailto:sales@edupluscampus.com" 
           className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <FaEnvelope className="text-[23px] min-[501px]:text-[28px]" />
        </a>

        {/* Call Icon (Main Action) */}
    <div className="relative">
  <a 
    href="tel:+919028690536" // Yahan tum apna main number dalo
    className="w-10 h-10 min-[501px]:w-12 min-[501px]:h-12 bg-[#001529] text-white rounded-lg flex items-center justify-center shadow-2xl hover:bg-[#002b5b] transition-all duration-300 pointer-events-auto"
  >
    <FaPhoneAlt className="text-[23px] min-[501px]:text-[30px] -rotate-90"  />
  </a>
</div>

      </div>

      {/* 4. Scroll to Top (Optional, but usually present in such footers) */}
<div 
        className={`fixed bottom-6 left-3 sm:left-4 z-[999] transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}
      >
        <button 
          onClick={scrollToTop}
          className="w-11 h-11 max-[500px]:w-8 max-[500px]:h-8 cursor-pointer bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 pointer-events-auto"
          title="Go to Top"
        >
          <FaChevronUp size={20}  />
        </button>
      </div>
    </div>

<div id="recaptcha-container"></div>
{isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Blur Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]">
            
            {/* Header */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
              <h2 className="text-lg max-[340px]:text-[16px] sm:text-xl md:text-2xl font-bold text-gray-800">Download Brochure</h2>
              <button onClick={() => 
              {
              setIsModalOpen(false) 

resetForm();
              }

              } className="text-gray-400 hover:text-gray-600 transition-colors"><FaTimes size={25} /></button>
            </div>

            {/* Form Body */}
  <form  className="sm:p-6 p-4">

  {/* Full Name */}
  <div className="mb-4">
    <input
      value={formData.fullName}
      onChange={(e) => {
        setFormData({ ...formData, fullName: e.target.value });
        setErrors({ ...errors, fullName: "" });
      }}
      type="text"
      placeholder="Your Full Name:"
      className={`w-full px-3 py-2 bg-gray-50 border rounded-md outline-none duration-300 focus:border-[#FF9100]
      ${errors.fullName ? "border-red-500" : "border-gray-100"}`}
    />
    {errors.fullName && (
      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
    )}
  </div>

  {/* Email */}
  <div className="mb-4">
    <input
      value={formData.email}
      onChange={(e) => {
        setFormData({ ...formData, email: e.target.value });
        setErrors({ ...errors, email: "" });
      }}
      type="email"
      placeholder="Email:"
      className={`w-full px-3 py-2 bg-gray-50 border rounded-md outline-none focus:border-[#FF9100]
      ${errors.email ? "border-red-500" : "border-gray-100"}`}
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
    )}
  </div>

  {/* Phone */}
  <div className="mb-4">
    <input
      value={formData.phone}
      onChange={(e) => {
        setFormData({ ...formData, phone: e.target.value });
        setErrors({ ...errors, phone: "" });
      }}
      type="tel"
      placeholder="Phone Number:"
      className={`w-full px-3 py-2 bg-gray-50 border rounded-md outline-none focus:border-[#FF9100]
      ${errors.phone ? "border-red-500" : "border-gray-100"}`}
    />
    {errors.phone && (
      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
    )}
  </div>

  {/* Institute */}
  <div className="mb-4">
    <input
      value={formData.institute}
      onChange={(e) => {
        setFormData({ ...formData, institute: e.target.value });
        setErrors({ ...errors, institute: "" });
      }}
      type="text"
      placeholder="Your Institute:"
      className={`w-full px-3 py-2 bg-gray-50 border rounded-md outline-none focus:border-[#FF9100]
      ${errors.institute ? "border-red-500" : "border-gray-100"}`}
    />
    {errors.institute && (
      <p className="text-red-500 text-xs mt-1">{errors.institute}</p>
    )}
  </div>

  {/* Checkboxes */}
  <div className="mb-4">
    <p className="text-gray-600 font-bold mb-3 text-sm sm:text-md">
      Select Product Brochure
    </p>

    <div className="flex flex-wrap gap-4">

<label className="flex items-center gap-2 cursor-pointer text-gray-500 text-sm">
  <input
    type="checkbox"
    value="school"
    checked={formData.product.includes("school")}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        product: prev.product.includes(value)
          ? prev.product.filter((item) => item !== value)
          : [...prev.product, value]
      }));
    }}
    className="w-4 h-4 accent-[#FF9100]"
  />
  Vidya School Brochure
</label>

<label className="flex items-center gap-2 cursor-pointer text-gray-500 text-sm">
  <input
    type="checkbox"
    value="college"
    checked={formData.product.includes("college")}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        product: prev.product.includes(value)
          ? prev.product.filter((item) => item !== value)
          : [...prev.product, value]
      }));
    }}
    className="w-4 h-4 accent-[#FF9100]"
  />
  Vidya College Brochure
</label>
    </div>

    {errors.product && (
      <p className="text-red-500 text-xs mt-1">{errors.product}</p>
    )}
  </div>

  {/* Submit */}
  <div className="flex justify-center pt-2">
{!otpSent ? (
<button
  onClick={handleGenerateOTP}
  disabled={loading}
  className={`bg-[#FF9100] hover:bg-[#e68200] text-white font-bold px-5 py-2.5 sm:py-3 sm:px-10 rounded-full shadow-lg transition-all active:scale-95 uppercase tracking-wide text-sm flex items-center justify-center gap-2
  ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : (
    "Generate OTP"
  )}
</button>
) : (
  <>
    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      className="w-full mt-3 px-3 py-2 bg-gray-50 border border-gray-100 rounded-md outline-none focus:border-green-500"
    />

    <button
      type="button"
      onClick={handleVerifyOTP}
      className="mt-3 bg-green-600 text-white font-bold px-5 py-2.5 sm:py-3 sm:px-10 rounded-full shadow-lg"
    >
      Verify & Download
    </button>
  </>
)}
  </div>

</form>

          </div>
        </div>
      )}

{/* --- 4. BOTTOM MOBILE BUTTONS (Refined Design) --- */}
{/* Parent container ko center karne ke liye 'justify-center' add kiya gaya hai */}
<div className="fixed bottom-4 left-0 w-full px-4 flex justify-center md:hidden z-[100] pointer-events-none">
  
  {/* Inner Wrapper: width kam kar di (max-w-[300px]) aur background transparent rakha */}
  <div className="w-full sm:max-w-[320px] max-w-[230px]  flex gap-2 h-9 sm:h-12 pointer-events-auto">
    
    {/* Enquire Now Button */}
    <button className="flex-1 bg-[#002B5B] text-white rounded-xl flex items-center justify-center gap-2 font-bold text-[12px] sm:text-[13px] uppercase tracking-wider active:scale-95 transition-all shadow-lg">
      <FaPaperPlane className="text-orange-400 text-sm" />
      Enquire
    </button>

    {/* Call Now Button */}
    <a 
      href="tel:+919028690536" 
      className="flex-1 bg-[#FF9100] text-white rounded-xl flex text-[12px] items-center justify-center gap-2 font-bold sm:text-[13px] uppercase tracking-wider active:scale-95 transition-all shadow-lg"
    >
      <FaPhoneAlt className="text-sm" />
      Call Now
    </a>
  </div>
</div>
<style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default SideElements;