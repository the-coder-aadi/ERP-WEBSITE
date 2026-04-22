import Navbar from "../Components/Navbar"
import { FaCheckCircle } from "react-icons/fa";
import SideElements from "../Components/SideElements";
import Footer from "../Components/Footer";

function ChannelPartner() {
    return(
        <div className="min-h-screen bg-white relative">
<Navbar />

<section className="w-full bg-white py-8 sm:py-16 px-5 sm:px-6">
  
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-[60%] text-center lg:text-left">

      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
        Become a Channel Partner
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        Partner with Vidya ERP and unlock new growth opportunities in the education sector. 
        Collaborate with us to deliver smart digital solutions to institutions while expanding 
        your business reach and building long-term value.
      </p>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        As a channel partner, you’ll represent a trusted ERP platform, gain access to training 
        and resources, and play a key role in transforming how schools and colleges operate 
        in the modern digital era.
      </p>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full  lg:w-[30%] flex justify-center">
      <img
        src="partnership.png" // 👉 replace later
        alt="Channel Partner Illustration"
        className="w-full max-w-sm sm:max-w-md hover:-translate-y-2 transition duration-300 object-contain"
      />
    </div>

  </div>

</section>

<section className="w-full bg-[#f8f9fb] py-10 sm:py-16 px-5 sm:px-6">
  
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    {/* 🔥 LEFT IMAGE */}
    <div className="w-full lg:w-[45%] flex justify-center">
      <img
        src="teammembers.png" // 👉 replace later
        alt="Channel Partner Benefits"
        className="w-full  max-w-md hover:-translate-y-2 transition duration-300"
      />
    </div>

    {/* 🔥 RIGHT CONTENT */}
    <div className="w-full lg:w-[55%]">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
        Benefits for Channel Partners
      </h2>

      {/* LIST */}
      <div className="space-y-5">

        {[
          "Earn attractive commissions with a transparent and rewarding partnership model.",
          "Access complete training, onboarding support, and marketing resources.",
          "Expand your professional network across schools, colleges, and institutions.",
          "Work with a trusted and growing ERP brand in the education sector.",
          "Get dedicated pre-sales and post-sales assistance for smooth operations.",
          "Unlock long-term collaboration opportunities and business growth."
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 text-gray-700">

            {/* ICON */}
            <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />

            {/* TEXT */}
            <span className="text-sm sm:text-lg font-medium leading-relaxed">
              {item}
            </span>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

<section className="w-full bg-white py-8 sm:py-16 px-5 sm:px-6">
  
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    {/* 🔥 LEFT CONTENT */}
    <div className="w-full lg:w-[55%]">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 text-center lg:text-left">
        Responsibilities of Channel Partners
      </h2>

      {/* LIST */}
      <div className="space-y-5">

        {[
          "Identify and connect with educational institutions that can benefit from ERP solutions.",
          "Promote and represent Vidya ERP offerings in your assigned region or network.",
          "Assist institutions during the onboarding and initial understanding of the platform.",
          "Coordinate with the internal team to ensure smooth communication and deal closure.",
          "Maintain strong relationships with clients and provide basic guidance when required.",
          "Actively contribute to expanding the reach and presence of Vidya ERP."
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 text-gray-700">

            {/* ICON */}
            <FaCheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />

            {/* TEXT */}
            <span className="text-sm sm:text-lg font-medium leading-relaxed">
              {item}
            </span>

          </div>
        ))}

      </div>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="w-full lg:w-[45%] flex justify-center">
      <img
        src="responsibility.png" // 👉 replace later
        alt="Channel Partner Responsibilities"
        className="w-full max-w-md  hover:-translate-y-2 transition duration-300"
      />
    </div>

  </div>

</section>
<SideElements />
<Footer />

        </div>
    )
}
export default ChannelPartner