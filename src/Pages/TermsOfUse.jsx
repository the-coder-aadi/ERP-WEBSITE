import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import SideElements from "../Components/SideElements";

function TermsOfUse() {
    return(
        <div className="bg-[#f8f9fb] min-h-screen">
<Navbar />
<div className="bg-gray-50 min-h-screen py-8 sm:py-10 px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p>
            These Terms of Use govern your access to and use of the Vidya ERP website,
            platform, and related services. By accessing or using our platform, you agree
            to comply with these terms.
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Acceptance of Terms">
          <p>
            By using this website or interacting with any services, you confirm that you
            have read, understood, and agreed to be bound by these Terms of Use along with
            our Privacy Policy and other applicable policies.
          </p>
        </Section>

        <Section title="2. Nature of Platform">
          <p>
            Vidya ERP provides a cloud-based ERP solution for educational institutions.
            This website may also showcase demo features, product information, and service
            capabilities for informational purposes.
          </p>
        </Section>

        <Section title="3. User Responsibilities">
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Use the platform only for lawful purposes</li>
            <li>Maintain confidentiality of login credentials</li>
            <li>Ensure compliance with applicable laws and regulations</li>
          </ul>
        </Section>

        <Section title="4. Prohibited Activities">
          <ul className="list-disc pl-5 space-y-2">
            <li>Unauthorized access to systems or data</li>
            <li>Uploading harmful or illegal content</li>
            <li>Attempting to disrupt or damage the platform</li>
            <li>Copying or misusing platform content without permission</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All content, design, branding, and software related to Vidya ERP are owned
            by the company. You may not copy, reproduce, or distribute any content
            without prior permission.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            The platform may include integrations such as payment gateways, communication
            tools, or external services. We are not responsible for their functionality
            or policies.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            We are not liable for any loss, damages, or disruptions caused by the use
            or inability to use the platform, including data loss or business impact.
          </p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>
            These Terms of Use may be updated at any time. Continued use of the platform
            after updates implies acceptance of the revised terms.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            We reserve the right to suspend or terminate access to the platform if any
            user violates these terms or engages in harmful activities.
          </p>
        </Section>

        {/* Contact */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            If you have any questions regarding these Terms of Use:
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

export default TermsOfUse