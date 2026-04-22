import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SideElements from "../Components/SideElements";


function AppPolicy() {
    return(
        <div className="bg-[#f8f9fb] min-h-screen">
<Navbar />
  <div className="bg-gray-50 min-h-screen py-7 sm:py-10  px-4 md:px-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#6702bf" }}>
            App Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-purple-50 border-l-4 p-4 mb-8 rounded-lg" style={{ borderColor: "#6702bf" }}>
          <p>
            Vidya ERP mobile application is designed to support educational institutions
            with smart digital operations including attendance, communication, and academic management.
            This policy explains how user data is collected, used, and protected within the app.
          </p>
        </div>

        {/* Sections */}
        <Section title="Information We Collect">
          <List items={[
            "Basic personal details (name, email, phone number)",
            "Student and staff academic records",
            "Attendance and activity data",
            "Device and usage information",
          ]} />
        </Section>

        <Section title="Location Data">
          <p>
            The app may collect location data to support features like attendance tracking,
            geo-based verification, and security monitoring. This data is used only for system functionality.
          </p>
        </Section>

        <Section title="Biometric & Identity Data">
          <p>
            For secure authentication and attendance features, the app may use biometric
            methods such as facial recognition or device-based verification.
          </p>
          <List items={[
            "Used only for authentication and identity verification",
            "Not shared publicly or sold to third parties",
            "Stored securely with restricted access",
          ]} />
        </Section>

        <Section title="How We Use Data">
          <List items={[
            "To provide and manage ERP services",
            "To enable attendance, communication, and academic tracking",
            "To improve system performance and user experience",
            "To ensure security and prevent misuse",
          ]} />
        </Section>

        <Section title="Data Security">
          <p>
            We implement strong security practices including encrypted data storage,
            role-based access control, and secure cloud infrastructure to protect user information.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            The app may integrate with trusted third-party services such as payment gateways,
            messaging services, or analytics tools. These services follow their own privacy policies.
          </p>
        </Section>

        <Section title="User Rights">
          <List items={[
            "Request access to your data",
            "Request correction or deletion",
            "Withdraw consent where applicable",
          ]} />
        </Section>

        <Section title="Cookies & Tracking">
          <p>
            The app may use minimal tracking technologies to enhance performance and user experience.
            Users can control these through device settings.
          </p>
        </Section>

        <Section title="Policy Updates">
          <p>
            This policy may be updated from time to time. Continued use of the app
            indicates acceptance of the updated terms.
          </p>
        </Section>

        {/* Contact */}
        <div className="mt-10 bg-gray-100 p-5 rounded-xl">
          <h3 className="font-semibold mb-2" style={{ color: "#6702bf" }}>
            Contact Us
          </h3>
          <p className="text-gray-600">
            For any questions regarding this App Policy:
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
        <span className="mt-2.5 w-2 h-2 rounded-full" style={{ background: "#cfb703" }}></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default AppPolicy