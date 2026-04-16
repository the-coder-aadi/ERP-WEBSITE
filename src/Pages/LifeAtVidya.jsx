import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SideElements from "../Components/SideElements";

function LifeAtVidya() {

  const galleryImages = [
    {
      img: "teamCollabe.jpg",
      title: "Team Collaboration"
    },
    {
      img: "culture.jpg",
      title: "Work Culture"
    },
    {
      img: "Brainstorming-Sessions.jpg",
      title: "Brainstorming Sessions"
    },
    {
      img: "office-work.jpg",
      title: "Office Environment"
    },
    {
      img: "meeting.jpg",
      title: "Team Meetings"
    },
    {
      img: "celebration.jpg",
      title: "Celebrations"
    }
  ];

  return (
    <div className="bg-[#f4f7fb] min-h-screen">
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <section className="relative py-8 sm:py-16 px-5 text-center bg-gradient-to-br from-[#1E3A8A] to-[#3d52d9] text-[orange] overflow-hidden">
        
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Life at Vidya
        </h1>

        <p className="text-md sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Where innovation meets collaboration and every idea turns into impact.
        </p>

        {/* glow effect */}
      
      </section>

      {/* 🔥 INTRO */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-4">
          A Culture Built on Growth & Innovation
        </h2>

        <p className="text-gray-600 text-[17px] leading-relaxed">
          At Vidya, we believe in creating an environment where ideas grow, people collaborate,
          and innovation thrives. Our workspace encourages creativity, continuous learning,
          and strong teamwork that drives meaningful results.
        </p>
      </section>

      {/* 🔥 IMAGE GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* IMAGE */}
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 CULTURE POINTS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Collaborative Environment",
              desc: "Work together, grow together with a strong team culture."
            },
            {
              title: "Continuous Learning",
              desc: "Upskill and evolve with constant learning opportunities."
            },
            {
              title: "Innovation Driven",
              desc: "We encourage new ideas and creative problem-solving."
            },
            {
              title: "Work-Life Balance",
              desc: "Maintaining productivity while valuing personal time."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-[#1E3A8A] text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 QUOTE SECTION */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-[orange] mb-4">
          “Work. Learn. Grow.”
        </h2>
        <p className="text-gray-500 text-md sm:text-lg">
          Building the future of education together.
        </p>
      </section>

      <Footer />
      <SideElements />
    </div>
  );
}

export default LifeAtVidya;