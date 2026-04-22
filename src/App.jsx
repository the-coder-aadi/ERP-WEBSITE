import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./Components/PageWrapper";

import { useLayoutEffect, useEffect } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import VidyaUniversity from "./Pages/vidhyauniversity";
import CRM from "./Pages/CRM";
import VidyaSchool from "./Pages/VidyaSchool";
import EasyEnroll from "./Pages/EasyEnroll";
import EasyCheck from "./Pages/EasyCheck";
import VidyaLMS from "./Pages/vidyaLMS";
import EasyPariksha from "./Pages/EasyPariksha";
import VidyaHR from "./Pages/VidyaHR";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeams";
import OurDemo from "./Pages/OurDemo";
import DemoDetail from "./Pages/DemoDetail";
import LifeAtVidya from "./Pages/LifeAtVidya";
import Careers from "./Pages/Careers";
import Referral from "./Pages/Referral";
import VidyaDesk from "./Pages/VidyaDesk";
import ChannelPartner from "./Pages/ChannelPartner";
import ScrollToTop from "./Components/ScrollToTop";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AppPolicy from "./Pages/AppPolicy";
import TermsConditions from "./Pages/TermCondition";
import Disclaimer from "./Pages/Disclaimer";
import TermsOfUse from "./Pages/TermsOfUse";
import CopyrightPolicy from "./Pages/CopyRightpolicy";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/vidya-university" element={<PageWrapper><VidyaUniversity /></PageWrapper>} />
        <Route path="/easy-enroll" element={<PageWrapper><EasyEnroll /></PageWrapper>} />
        <Route path="/crm-software" element={<PageWrapper><CRM /></PageWrapper>} />
        <Route path="/vidya-school" element={<PageWrapper><VidyaSchool /></PageWrapper>} />
        <Route path="/vidya-lms" element={<PageWrapper><VidyaLMS /></PageWrapper>} />
        <Route path="/easy-check" element={<PageWrapper><EasyCheck /></PageWrapper>} />
        <Route path="/easy-pariksha" element={<PageWrapper><EasyPariksha /></PageWrapper>} />
        <Route path="/vidya-hr" element={<PageWrapper><VidyaHR /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogDetail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/our-demo" element={<PageWrapper><OurDemo /></PageWrapper>} />
        <Route path="/our-team" element={<PageWrapper><OurTeam /></PageWrapper>} />
        <Route path="/demo/:id" element={<PageWrapper><DemoDetail /></PageWrapper>} />
        <Route path="/life-at-vidya" element={<PageWrapper><LifeAtVidya /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/referral-partner" element={<PageWrapper><Referral /></PageWrapper>} />
        <Route path="/channel-partner" element={<PageWrapper><ChannelPartner /></PageWrapper>} />
        <Route path="/vidya-desk" element={<PageWrapper><VidyaDesk /></PageWrapper>} />
         <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/App-policy" element={<PageWrapper><AppPolicy /></PageWrapper>} />
            <Route path="/terms-conditions" element={<PageWrapper><TermsConditions /></PageWrapper>} />
            <Route path="/disclaimer" element={<PageWrapper><Disclaimer /></PageWrapper>} />
            <Route path="/terms-of-use" element={<PageWrapper><TermsOfUse /></PageWrapper>} />
            <Route path="/copyright-policy" element={<PageWrapper><CopyrightPolicy /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {

useLayoutEffect(() => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");

  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
}, []);

useEffect(() => {
  const handleBeforeUnload = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes /> 
    </BrowserRouter>
  );
}

export default App;