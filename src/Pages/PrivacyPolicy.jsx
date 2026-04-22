import React from "react";
import Navbar from "../Components/Navbar";
import SideElements from "../Components/SideElements";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f8f9fb]">
        <Navbar />
  <div className="bg-gray-50 min-h-screen py-7 sm:py-10  px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p className="text-gray-700">
            Vidya ERP is a cloud-based platform designed to manage academic and administrative operations.
            This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Sections */}
        <Section title="Information We Collect">
          <List items={[
            "Personal details (name, email, phone)",
            "Student academic records & attendance",
            "Staff & faculty information",
            "Fees and financial transactions",
            "Login and usage data"
          ]} />
        </Section>

        <Section title="How We Use Your Information">
          <List items={[
            "Provide and manage ERP services",
            "Handle academic & administrative workflows",
            "Send notifications & updates",
            "Improve system performance & analytics"
          ]} />
        </Section>

        <Section title="Data Storage & Security">
          <p>
            All data is stored securely on cloud servers with encryption, role-based access,
            and strict security protocols to prevent unauthorized access.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            We may use trusted third-party tools like payment gateways, SMS/email services,
            and analytics providers. These services follow their own privacy policies.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p>
            We do not sell user data. Information is only shared when required for service delivery
            or legal compliance.
          </p>
        </Section>

        <Section title="User Responsibility">
          <p>
            Users are responsible for keeping their login credentials secure and using the platform responsibly.
          </p>
        </Section>

        <Section title="Policy Updates">
          <p>
            We may update this policy from time to time. Changes will be reflected on this page.
          </p>
        </Section>

        {/* Contact Box */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            If you have any questions, contact us at:
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
  );
};
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

export default PrivacyPolicy;