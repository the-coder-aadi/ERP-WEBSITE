import React from 'react';

const RequestDemo = () => {
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

        <form className="p-6 md:p-12  md:pt-4 flex flex-col gap-8 sm:gap-10">
          
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
                  <input type="text" placeholder="Your Full Name" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Email Address <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>mail</span>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Phone Number <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>smartphone</span>
                  <input type="tel" placeholder="+91..." className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all" />
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
                  <input type="text" placeholder="Your Institute" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Institute Website <span className="text-orange-500">*</span></label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>language</span>
                  <input type="text" placeholder="www.institute.edu" className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12.5px] font-semibold text-gray-600 uppercase">Select Solution</label>
                <div className="relative mt-1.5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[20px]" style={{fontSize:"20px"}}>laptop_mac</span>
                  <select className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all appearance-none text-gray-500">
                    <option>Select Solution</option>
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
                <textarea rows="3" placeholder="Tell us about your requirements..." className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-blue-400 outline-none transition-all resize-y min-h-[100px] max-h-[300px]"></textarea>
              </div>
            </div>
          </div>

          {/* CAPTCHA AREA */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-4 max-w-sm mx-auto w-full">
            <div className="flex items-center gap-4">
              <div className="bg-white border px-3 py-2 rounded shadow-inner font-mono text-[15px] tracking-[6px] italic font-bold text-gray-700 select-none">
                XEU3RR
              </div>
              <button type="button" className="material-symbols-outlined text-blue-500 hover:rotate-180 transition-all duration-500">cached</button>
            </div>
            <input type="text" placeholder="ENTER CAPTCHA" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-center text-xs tracking-widest outline-none focus:border-blue-400" />
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