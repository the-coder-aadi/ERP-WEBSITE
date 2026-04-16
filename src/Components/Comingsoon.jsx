import Navbar from "./Navbar"
import Footer from "./Footer"
import SideElements from "./SideElements"
function ComingSoon() {
    return(
        <div  className="min-h-screen bg-white relative">
            <Navbar />
              <div className="flex-1 py-8 flex items-center justify-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A3AFF] tracking-wide">
      Coming Soon
    </h1>
  </div>
     <Footer />
      <SideElements />
        </div>
    )
}
export default ComingSoon