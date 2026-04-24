import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt , FaCheckCircle} from "react-icons/fa";
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Contact() {

  const [loading, setLoading] = useState(false);
 const [showToast, setShowToast] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));

  // typing pe error hatao
  setErrors((prev) => ({
    ...prev,
    [name]: ""
  }));
};


const validate = () => {
  let newErrors = {};

  if (!formData.name) {
    newErrors.name = "Name required";
  }

if (!formData.email) {
  newErrors.email = "Email required";
} else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
  newErrors.email = "Enter valid Gmail (example@gmail.com)";
}

 if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }
  // message optional hai → skip

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
        type: "Send us a Message",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: new Date().toLocaleString()
      })
    });

            setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 6000);

  setFormData({
    name: "",
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


  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Navbar />

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-[#6e3dd9] to-[#856afd] text-white py-8 md:py-16 px-4 text-center">
        <h1 className="text-3xl text-[#f4d350] max-[400px]:text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-sm sm:text-lg max-w-2xl mx-auto opacity-90">
          Let’s connect and build smarter education systems together.
        </p>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-14">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2  gap-8 lg:gap-12 mb-18">

          {/* LEFT */}
          <div className="space-y-6">

            {[
              { icon: <FaPhoneAlt />, title: "Call Us", value: "+91 98765 43210" },
              { icon: <FaPhoneAlt />, title: "Call Us", value: "+91 74925 40271" },
              { icon: <FaEnvelope />, title: "Email Us", value: "support@vidyaerp.com" },
              { icon: <FaMapMarkerAlt />, title: "Visit Us", value: "Pune, Maharashtra, India" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border-2  border-[#ededed] shadow-sm 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center 
                  bg-[#FF9100]/10 rounded-full 
                  group-hover:bg-[#d0a402] transition">
                    <span className="text-[#d0bb01] group-hover:text-white">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-2  border-[#ededed] hover:shadow-xl transition">

            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} spellCheck={false} className="space-y-3 sm:space-y-5">

        <input
  name="name"
  value={formData.name}
  onChange={handleChange}
  type="text"
  placeholder="Your Name"
  className={`w-full border  mb-1.5 rounded-lg px-4 py-3 outline-none duration-200 focus:border-[#8c00ff54]  transition
  ${errors.name ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.name}</p>

         <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="Your Email"
  className={`w-full border  mb-1.5 rounded-lg px-4 py-3 outline-none duration-200 focus:border-[#8c00ff54]  transition
  ${errors.email ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.email}</p>

        <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
maxLength={10}
  type="tel"
  placeholder="Phone Number"
  className={`w-full border  mb-1.5 rounded-lg px-4 py-3 outline-none duration-200 focus:border-[#8c00ff54]  transition
  ${errors.phone ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.phone}</p>

       <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="2"
  placeholder="Your Message"
  className="w-full border  border-[#959595] rounded-lg px-4 py-3 min-h-[80px] outline-none duration-200 focus:border-[#8c00ff54]  transition"
></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d8c705] cursor-pointer hover:bg-[#dab303] text-white font-semibold py-3 rounded-lg transition hover:scale-[1.02]"
              >
               {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>

        {/* 🔥 FULL WIDTH MAP */}
        <div className="w-full rounded-2xl mb-6 overflow-hidden shadow-lg ">
          <iframe
            src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
            className="w-full h-[300px] sm:h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>

      </section>

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
          Your Contact info is received. <br className="hidden sm:block" /> 
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

      <Footer />
      <SideElements />
    </div>
  );
}

export default Contact;