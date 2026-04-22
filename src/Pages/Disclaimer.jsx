import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import SideElements from "../Components/SideElements";

function Disclaimer() {
    return(
        <div className="bg-[#f8f9fb] min-h-screen">
            <Navbar />
    <div className="bg-gray-50 min-h-screen py-8 sm:py-10 px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            Disclaimer
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p>
            This Disclaimer outlines the limitations of liability and responsibilities
            related to the use of Vidya ERP platform, including its website and mobile applications.
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Use at Your Own Risk">
          <p>
            By accessing and using Vidya ERP, you acknowledge that you are doing so at your own discretion.
            You are responsible for evaluating the suitability and accuracy of the platform for your needs.
          </p>
        </Section>

        <Section title="2. No Warranty">
          <p>
            All services, features, and content are provided on an “as-is” basis without any guarantees.
            We do not make warranties regarding accuracy, reliability, or uninterrupted availability of the platform.
          </p>
        </Section>

        <Section title="3. Limitation of Liability">
          <p>
            Vidya ERP shall not be held responsible for any direct, indirect, incidental, or consequential
            damages including loss of data, revenue, or business interruption arising from the use of the platform.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            The platform may include integrations or links to third-party services such as payment gateways,
            messaging systems, or external tools. We do not control or take responsibility for their performance,
            policies, or content.
          </p>
        </Section>

        <Section title="5. System Availability">
          <p>
            While we strive to ensure smooth and continuous service, we do not guarantee that the platform
            will always be available without interruptions. Downtime may occur due to maintenance or technical issues.
          </p>
        </Section>

        <Section title="6. User Responsibility">
          <p>
            Users are responsible for maintaining proper usage of the system, safeguarding their credentials,
            and ensuring compliance with institutional policies and applicable regulations.
          </p>
        </Section>

        <Section title="7. External Links">
          <p>
            Vidya ERP may contain links to external websites. We are not responsible for the content,
            policies, or practices of these external platforms.
          </p>
        </Section>

        <Section title="8. Changes to Disclaimer">
          <p>
            This Disclaimer may be updated at any time without prior notice. Continued use of the platform
            implies acceptance of any modifications.
          </p>
        </Section>

        {/* Contact */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            If you have any questions regarding this Disclaimer:
          </p>
          <p className="font-medium mt-1" style={{ color: "#cfb703" }}>
            support@vidyaerp.com
          </p>
        </div>

      </div>
    </div>
<SideElements />
<Footer />
        </div>
    )
}
const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-3" style={{ color: "#6702bf" }}>
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);
export default Disclaimer