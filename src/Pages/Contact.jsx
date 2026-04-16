import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState,useEffect } from "react";

function Contact() {

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

  if (!formData.phone || formData.phone.length < 10) {
    newErrors.phone = "Valid phone required";
  }

  // message optional hai → skip

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  alert("Message sent successfully 🎉");

  setFormData({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  setErrors({});
};


  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Navbar />

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-[#3d52d9] to-[#6a78fd] text-white py-8 md:py-16 px-4 text-center">
        <h1 className="text-3xl max-[400px]:text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
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
                  group-hover:bg-[#FF9100] transition">
                    <span className="text-[#FF9100] group-hover:text-white">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#3d52d9]">
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

            <h2 className="text-2xl font-bold text-[#3d52d9] mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">

        <input
  name="name"
  value={formData.name}
  onChange={handleChange}
  type="text"
  placeholder="Your Name"
  className={`w-full border outline-none mb-1.5 rounded-lg px-4 py-3 focus:ring-1 transition
  ${errors.name ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.name}</p>

         <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="Your Email"
  className={`w-full border outline-none mb-1.5 rounded-lg px-4 py-3 focus:ring-1 transition
  ${errors.email ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.email}</p>

        <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  type="text"
  placeholder="Phone Number"
  className={`w-full border outline-none mb-1.5 rounded-lg px-4 py-3 focus:ring-1 transition
  ${errors.phone ? "border-red-500" : "border-[#959595]"}`}
/>
<p className="text-red-500 text-xs">{errors.phone}</p>

       <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="2"
  placeholder="Your Message"
  className="w-full border outline-none border-[#959595] rounded-lg px-4 py-3 min-h-[80px] focus:ring-1 transition"
></textarea>

              <button
                type="submit"
                className="w-full bg-[#FF9100] hover:bg-[#e57f00] text-white font-semibold py-3 rounded-lg transition hover:scale-[1.02]"
              >
                Send Message
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

      <Footer />
      <SideElements />
    </div>
  );
}

export default Contact;