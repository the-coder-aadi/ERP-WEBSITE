import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SideElements from "../Components/SideElements";

function TermsConditions() {
    
    return(
        <div className="bg-[#f8f9fb] min-h-screen">
            <Navbar />
 <div className="bg-gray-50 min-h-screen py-8 sm:py-10 px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p>
            These Terms & Conditions govern your access and use of Vidya ERP,
            a cloud-based platform designed for educational institutions. By using
            our services, you agree to comply with these terms.
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using Vidya ERP, you confirm that you have read,
            understood, and agreed to these Terms & Conditions along with
            our Privacy Policy and other applicable guidelines.
          </p>
        </Section>

        <Section title="2. Services Overview">
          <p>
            Vidya ERP provides digital solutions for managing academic and
            administrative operations such as student management, attendance,
            examinations, finance, HR, CRM, and other related services.
          </p>
        </Section>

        <Section title="3. User Responsibilities">
          <List items={[
            "Provide accurate and complete information",
            "Maintain confidentiality of login credentials",
            "Use the system only for authorized purposes",
            "Avoid misuse or unauthorized access to data"
          ]} />
        </Section>

        <Section title="4. Account & Access Control">
          <p>
            Access to the platform is role-based. Institutions are responsible
            for managing user roles and permissions within their organization.
          </p>
        </Section>

        <Section title="5. Payments & Subscription">
          <p>
            Vidya ERP may operate on a subscription-based model. All payments
            must be made as per agreed plans. Failure to make payments may result
            in suspension or restriction of services.
          </p>
        </Section>

        <Section title="6. Data & Privacy">
          <p>
            We respect user privacy and handle data in accordance with our
            Privacy Policy. Users are responsible for ensuring proper use
            of institutional data within the platform.
          </p>
        </Section>

        <Section title="7. Service Availability">
          <p>
            While we strive to provide uninterrupted services, we do not guarantee
            100% uptime. Temporary downtime may occur due to maintenance or
            technical issues.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            Vidya ERP shall not be held liable for any indirect, incidental,
            or consequential damages arising from the use or inability to use
            the platform.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            We reserve the right to suspend or terminate access to the platform
            in case of violation of these terms or misuse of the system.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            These Terms & Conditions may be updated from time to time.
            Continued use of the platform indicates acceptance of the updated terms.
          </p>
        </Section>

        {/* Contact */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            If you have any questions regarding these Terms & Conditions:
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

const List = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-2 w-2 h-2 rounded-full" style={{ background: "#cfb703" }}></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default TermsConditions