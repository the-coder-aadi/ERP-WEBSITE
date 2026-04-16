import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "./Pages/Home"

import About from "./Pages/About"

import VidyaUniversity from "./Pages/vidhyauniversity"

import CRM from "./Pages/CRM"
import VidyaSchool from "./Pages/VidyaSchool"
import EasyEnroll from "./Pages/EasyEnroll"
import EasyCheck from "./Pages/EasyCheck"
import VidyaLMS from "./Pages/vidyaLMS"
import EasyPariksha from "./Pages/EasyPariksha"
import VidyaHR from "./Pages/VidyaHR"
import Blog from "./Pages/Blog"
import BlogDetail from "./Pages/BlogDetail"
import Contact from "./Pages/Contact"
import OurTeam from "./Pages/OurTeams"
import OurDemo from "./Pages/OurDemo"
import DemoDetail from "./Pages/DemoDetail"
import LifeAtVidya from "./Pages/LifeAtVidya"
import Careers from "./Pages/Careers"
import Referral from "./Pages/Referral"
import VidyaDesk from "./Pages/VidyaDesk"
import ChannelPartner from "./Pages/ChannelPartner"
import ScrollToTop from "./Components/ScrollToTop"


function App() {
 return(
<BrowserRouter>
<ScrollToTop />
<Routes>
    <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/vidya-university" element={<VidyaUniversity />}/>
  
<Route path="/easy-enroll" element={<EasyEnroll />}/>
        <Route path="/crm-software" element={<CRM />}/>
    <Route path="/vidya-school" element={<VidyaSchool />}/>
    <Route path="/vidya-lms" element={<VidyaLMS />}/>
    <Route path="/easy-check" element={<EasyCheck />}/>
    <Route path="/easy-pariksha" element={<EasyPariksha />}/>
<Route path="/vidya-hr" element={<VidyaHR />}/>
<Route path="blog" element={<Blog />}/>
<Route path="/blog/:id" element={<BlogDetail />} />
<Route path="/contact" element={<Contact />}/>
<Route path="/our-demo" element={<OurDemo />}/>
<Route path="/our-team" element={<OurTeam />}/>
<Route path="/demo/:id" element={<DemoDetail />} />
<Route path="/life-at-vidya" element={<LifeAtVidya />} />
<Route path="/careers" element={<Careers />} />
<Route path="/referral-partner" element={<Referral />} />
<Route path="/channel-partner" element={<ChannelPartner />} />
<Route path="/vidya-desk" element={<VidyaDesk />} />
</Routes>
</BrowserRouter>
 )  
}
export default App