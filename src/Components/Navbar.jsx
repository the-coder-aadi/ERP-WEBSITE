import { useState } from "react";
import { FaBars } from "react-icons/fa";
import VidyaUniversity from "../Pages/vidhyauniversity";
import React from "react";
import { useNavigate,useLocation  } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
const isAboutActive = location.pathname.startsWith("/about") || location.pathname.startsWith("/our")|| location.pathname.startsWith("/life")|| location.pathname.startsWith("/careers");
const isProductActive =
  location.pathname.startsWith("/vidya") ||
  location.pathname.startsWith("/crm") ||
  location.pathname.startsWith("/easy");

  const IsPartnerActive = location.pathname.startsWith("/referral") ||
  location.pathname.startsWith("/channel");


const navigate = useNavigate();

const subMenuItems = [
  { name: "About Vidya ERP", path: "/about" },
  { name: "Our Team", path: "/our-team" },
  { name: "Demo", path: "/our-demo" },
  { name: "Life at Vidya ERP", path: "/life-at-vidya" },
  { name: "Careers", path: "/careers" }
];
const productsData = [
  { name: "VidyaUniversity", path: "/vidya-university" },
  { name: "EasyCheck", path: "/easy-check" },
  { name: "VidyaCollege", path: "/vidya-university" },
  { name: "EasyPariksha", path: "/easy-pariksha" },
  { name: "VidyaSchool", path: "/vidya-school" },
  { name: "VidyaCRM", path: "/crm-software" },
  { name: "EasyEnroll", path: "/easy-enroll" },
  { name: "VidyaHR", path: "/vidya-hr" },
  { name: "VidyaLMS", path: "/vidya-lms" },
  { name: "VidyaDesk", path: "/vidya-desk" }
];

const partnerdata = [
  {
    name: "Become a Referral Partner",
    path: "/referral-partner", 

  },
  {
    name: "Become a Channel Partner",
    path: "/channel-partner",

  }
];

const [openSection, setOpenSection] = useState(null); 

  const toggleSection = (section) => {
    // Agar wahi section click kiya toh band kar do, warna naya kholo
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
    <nav className="w-full sticky top-0 z-[100] bg-white border-b shadow-sm border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 sm:py-4.5">

        {/* Logo */}
     {/* Logo */}
<div className="flex items-center"> <img src="/vidyalogo.png" alt="logo" className="md:h-14 sm:h-12 h-10 object-contain" /> </div>
        {/* Desktop Menu */}
        <ul className="hidden min-[900px]:flex items-center gap-7 mt-3  text-[15px] font-medium text-gray-700">
          <li onClick={()=> navigate("/")}
  className={`cursor-pointer font-medium text-[15.5px] hover:text-blue-600 ${
    location.pathname === "/" ? "text-blue-600" : "text-gray-700"
  }`}
>
  Home
</li>

<li className="relative group">
  
  {/* Trigger */}
  <div className={`flex items-center gap-1 text-[15.5px] cursor-pointer hover:text-blue-600 ${
    isAboutActive ? "text-blue-600 font-medium" : ""
  }`}>
    About Us
    <span className="material-symbols-outlined text-[18px]" style={{ fontSize: "19px" }}>
      expand_more
    </span>
  </div>

  {/* Dropdown */}
  <div
    className="absolute left-0 top-10 w-56 bg-white border border-gray-200 rounded-md shadow-lg 
    opacity-0 invisible translate-y-2 
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
    transition-all duration-200 ease-out z-50  after:content-[''] after:absolute after:-top-4 after:left-0 after:w-full after:h-4"
  >
    <ul className="py-2">
      {subMenuItems.map((item, index) => (
        <li
         onClick={()=> navigate(item.path)}
          key={index}
            style={{
          color: location.pathname === item.path ? "blue" : "text-gray-500"
        }}
          className="px-4 py-3 text-[15px] text-gray-500 hover:text-gray-800 hover:bg-gray-50 cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>

</li>

  <li className="relative group">

  {/* Trigger */}
  <div className={`flex items-center gap-1 text-[15.5px] font-medium cursor-pointer hover:text-blue-600 ${
    isProductActive ? "text-blue-600 font-medium" : ""
  }`}>
    Products
    <span className="material-symbols-outlined text-[18px]" style={{ fontSize: "19px" }}>
      expand_more
    </span>
  </div>

  {/* Dropdown */}
  <div
    className="absolute left-0 top-10 w-[350px] bg-white border border-gray-200 rounded-md shadow-lg 
    opacity-0 invisible translate-y-2 
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
    transition-all duration-200 ease-out z-50   after:content-[''] after:absolute after:-top-4 after:left-0 after:w-full after:h-4"
  >
    <ul className="py-2 grid grid-cols-2">
      {productsData.map((item, index) => (
        <React.Fragment key={index}>
          <li  onClick={()=> navigate(item.path)}
                  style={{
         color: location.pathname === item.path ? "blue" : "text-gray-500"

        }}
          className="px-4 py-3 text-[15px] text-gray-500 hover:text-gray-800 hover:bg-gray-50 cursor-pointer">
            {item.name}
            
          </li>

        </React.Fragment>
      ))}
    </ul>
  </div>

</li>

<li className="relative group">

  {/* Trigger */}
  <div className={`flex items-center gap-1 text-[15.5px] font-medium cursor-pointer hover:text-blue-600 ${
    IsPartnerActive ? "text-blue-600 font-medium" : ""
  }`} >
    Partners
    <span className="material-symbols-outlined text-[18px]" style={{ fontSize: "19px" }}>
      expand_more
    </span>
  </div>

  {/* Dropdown */}
  <div
    className="absolute left-0 top-10 w-63 bg-white border border-gray-200 rounded-md shadow-lg 
    opacity-0 invisible translate-y-2 
    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
    transition-all duration-200 ease-out z-50 after:content-[''] after:absolute after:-top-4 after:left-0 after:w-full after:h-4"
  >
    <ul className="py-2">
      {partnerdata.map((item, index) => (
        <li
          key={index}
                    style={{
          color: location.pathname === item.path ? "blue" : "text-gray-500"

        }}
          onClick={()=> navigate(item.path)}
          className="px-4 py-2 text-[15.5px] text-gray-500 hover:text-gray-800 hover:bg-gray-50 cursor-pointer"
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>

</li>

          <li className="cursor-pointer hover:text-blue-600 font-medium text-[15.5px]" onClick={()=> navigate("/pricing")}>Pricing</li>
          <li className={`cursor-pointer font-medium text-[15.5px] hover:text-blue-600 ${
    location.pathname.startsWith("/blog") ? "text-blue-600" : "text-gray-700"
  }`}  onClick={()=> navigate("/blog")}>Blog</li>
          <li className={`cursor-pointer font-medium text-[15.5px] hover:text-blue-600 ${
    location.pathname === "/contact" ? "text-blue-600" : "text-gray-700"
  }`}  onClick={()=> navigate("/contact")}>Contact Us</li>
        </ul>

        {/* Mobile Menu Icon */}
    <div className="min-[900px]:hidden cursor-pointer" onClick={() =>{
     setMenuOpen(!menuOpen) 
      setOpenSection(null)
    }
    }>
  
  <div className="w-6 h-5 flex flex-col justify-between">
    
    {/* Top Line */}
    <span
      className={`block h-[2px] bg-black transition-all duration-300 ${
        menuOpen ? "rotate-45 translate-y-[9px]" : ""
      }`}
    ></span>

    {/* Middle Line */}
    <span
      className={`block h-[2px] bg-black transition-all duration-300 ${
        menuOpen ? "opacity-0" : ""
      }`}
    ></span>

    {/* Bottom Line */}
    <span
      className={`block h-[2px] bg-black transition-all duration-300 ${
        menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
      }`}
    ></span>

  </div>
</div>
      </div>

      {/* Mobile Dropdown */}

    </nav>


<div
  className={`min-[900px]:hidden overflow-hidden w-[90%]  fixed sm:top-21 top-16 md:top-23 left-1/2 transform -translate-x-1/2 border border-[#d6d6d6] rounded-md transition-all duration-500 ease-in-out bg-white z-110
  ${menuOpen ? "max-h-[500px] opacity-100 shadow-lg" : "max-h-0 opacity-0"}
  `}
>
  <ul className="flex flex-col text-[15px] font-medium text-gray-700">
    
    {/* Sabhi li mein equal padding aur border set kar di hai */}
<li 
  onClick={() => navigate("/")}
  className={`px-5 py-3.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
    location.pathname === "/" ? "text-blue-600" : "text-gray-700"
  }`}
>
  Home
</li>

<li className="flex flex-col border-b border-gray-100">
          <div 
            onClick={() => toggleSection('about')}
            className={`flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors ${openSection === 'about' ? 'text-blue-600' : ''} ${
    isAboutActive ? "text-blue-600 font-medium" : ""
  }` }
          >
            About Us
       <div className={`transition-all duration-300 ease-in-out flex items-center justify-center ${openSection === 'about' ? 'rotate-180' : 'rotate-0'}`}>
      <span className="material-symbols-outlined" style={{fontSize:"20px"}}>
        {openSection === 'about' ? 'remove' : 'add'}
      </span>
    </div>
          </div>
          
          {/* Sub Menu Shutter */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#F9F9F9] ${openSection === 'about' ? 'max-h-[300px]' : 'max-h-0'}`}>
            <ul className="flex flex-col">
              {subMenuItems.map((item, index) => (
                <li onClick={()=> navigate(item.path)} key={index} className={`px-8 py-3 border-b border-gray-200/50 text-[14px] cursor-pointer ${
    location.pathname === item.path ? "text-blue-600" : "text-gray-600"
  }`}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </li>

 <li className="flex flex-col border-b border-gray-100">
          <div 
            onClick={() => toggleSection('products')}
            className={`flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors ${openSection === 'products' ? 'text-blue-600' : ''} ${
    isProductActive ? "text-blue-600 font-medium" : ""
  }`}
          >
            Products
           <div className={`transition-all duration-300 ease-in-out flex items-center justify-center ${openSection === 'products' ? 'rotate-180' : 'rotate-0'}`}>
      <span className="material-symbols-outlined" style={{fontSize:"20px"}}>
        {openSection === 'products' ? 'remove' : 'add'}
      </span>
    </div>
          </div>
          
          <div className={`overflow-x-hidden transition-all duration-500 ease-in-out bg-[#F9F9F9] ${openSection === 'products' ? 'max-h-[300px]' : 'max-h-0'}`}>
            <ul className="flex flex-col">
              {productsData.map((item, index) => (
                <li onClick={()=> navigate(item.path)}  key={index}   className={`px-8 py-3 border-b border-gray-200/50 text-[14px] cursor-pointer ${
    location.pathname === item.path ? "text-blue-600" : "text-gray-600"
  }`}
>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </li>

  <li className="flex flex-col border-b border-gray-100">
          <div 
            onClick={() => toggleSection('partners')}
            className={`flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors ${openSection === 'partners' ? 'text-blue-600' : ''} ${
    IsPartnerActive ? "text-blue-600 font-medium" : ""
  }`}
          >
            Partners
   <div className={`transition-all duration-300 ease-in-out flex items-center justify-center ${openSection === 'partners' ? 'rotate-180' : 'rotate-0'}`}>
      <span className="material-symbols-outlined" style={{fontSize:"20px"}}>
        {openSection === 'partners' ? 'remove' : 'add'}
      </span>
    </div>
          </div>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#F9F9F9] ${openSection === 'partners' ? 'max-h-[300px]' : 'max-h-0'}`}>
            <ul className="flex flex-col">
              {partnerdata.map((item, index) => (
                <li onClick={()=> navigate(item.path)} key={index}   className={`px-8 py-3 border-b border-gray-200/50 text-[14px] cursor-pointer ${
    location.pathname === item.path ? "text-blue-600" : "text-gray-600"
  }`}
>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </li>

    <li onClick={()=> navigate("/pricing")} className="px-5 py-3.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
      Pricing
    </li>

  <li 
  onClick={() => navigate("/blog")}
  className={`px-5 py-3.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
    location.pathname === "/blog" ? "text-blue-600" : "text-gray-700"
  }`}
>
  Blog
</li>

    {/* Last item se border-b hata di hai taaki niche extra line na dikhe */}
  <li 
  onClick={() => navigate("/contact")}
  className={`px-5 py-3.5 cursor-pointer hover:bg-gray-50 ${
    location.pathname === "/contact" ? "text-blue-600" : "text-gray-700"
  }`}
>
  Contact Us
</li>

  </ul>
</div>
</>
  );
}

export default Navbar;