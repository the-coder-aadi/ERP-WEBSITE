import { Route, Routes, BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import RequestDemo from "./Components/RequestDemo"
import SideElements from "./Components/SideElements"
import Footer from "./Components/Footer"
function App() {
 return(
<BrowserRouter>
<Routes>
    <Route path="/Navbar" element={<Navbar />}/>
    <Route path="/" element={<Home />}/>
     <Route path="/request-demo" element={<RequestDemo />}/>
     <Route path="/side-elements" element={<SideElements />}/>
    
</Routes>
</BrowserRouter>
 )  
}
export default App