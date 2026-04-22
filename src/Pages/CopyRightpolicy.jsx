import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import SideElements from "../Components/SideElements";

function CopyrightPolicy() {
    return(
        <div className="bg-[#f8f9fb] min-h-screen">
<Navbar />
  <div className="bg-gray-50 min-h-screen sm:py-10 py-8 px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            Copyright Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p>
            This Copyright Policy explains how content, materials, and intellectual property
            on the Vidya ERP platform are protected and how copyright-related concerns are handled.
          </p>
        </div>

        {/* Sections */}

        <Section title="1. Ownership of Content">
          <p>
            All content available on Vidya ERP, including text, graphics, logos, UI design,
            images, software, and data, is the property of Vidya ERP or its licensors and is
            protected under applicable copyright and intellectual property laws.
          </p>
        </Section>

        <Section title="2. Use of Website Content">
          <p>
            You may access and use the content for personal or institutional use only.
            You are not allowed to copy, reproduce, distribute, modify, or commercially
            exploit any content without prior written permission.
          </p>
        </Section>

        <Section title="3. Restrictions">
          <ul className="list-disc pl-5 space-y-2">
            <li>Do not copy or reuse platform content for commercial purposes</li>
            <li>No automated data extraction (bots, scraping, etc.)</li>
            <li>No reproduction of UI, branding, or software logic</li>
            <li>No creation of similar database using our data</li>
          </ul>
        </Section>

        <Section title="4. Third-Party Content">
          <p>
            Some content, integrations, or resources may belong to third-party providers.
            Such content remains the property of respective owners and is used under
            appropriate permissions or licenses.
          </p>
        </Section>

        <Section title="5. Reporting Copyright Infringement">
          <p>
            If you believe that your copyrighted content has been used on Vidya ERP without
            permission, you may submit a request including the following details:
          </p>

          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>Description of the copyrighted work</li>
            <li>Location (URL) of the content on our platform</li>
            <li>Proof of ownership</li>
            <li>Your contact information</li>
            <li>A declaration of good faith belief</li>
          </ul>
        </Section>

        <Section title="6. Action on Complaints">
          <p>
            Upon receiving a valid complaint, we will review the request and take appropriate
            action, which may include removing the content or restricting access.
          </p>
        </Section>

        <Section title="7. Misuse of Claims">
          <p>
            Submitting false or misleading copyright claims may result in legal consequences.
            Please ensure all information provided is accurate and truthful.
          </p>
        </Section>

        <Section title="8. Policy Updates">
          <p>
            This Copyright Policy may be updated from time to time. Continued use of the platform
            indicates acceptance of the updated policy.
          </p>
        </Section>

        {/* Contact */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            For copyright-related concerns or notices:
          </p>
          <p className="font-medium mt-1" style={{ color: "#cfb703" }}>
            legal@vidyaerp.com
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
export default CopyrightPolicy