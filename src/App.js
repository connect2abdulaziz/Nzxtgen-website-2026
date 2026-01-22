import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FreeQuote from "./pages/FreeQuote"; // Import the FreeQuote page component
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AreaWeService from "./pages/AreaWeService";
import SwitchBoard from "./pages/SwitchBoard";
import SmartHome from "./pages/SmartHome";
import SmartHomeMoreInfo from "./pages/SmartHomeMoreInfo";
import Privacypage from "./pages/PrivacyPage";
import Termspage from "./pages/Termspage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ServicesDirectory from "./pages/ServicesDirectory";
import SuburbsDirectory from "./pages/SuburbsDirectory";
import ElectricService from "./pages/ElectricService";
import SmartHomeService from "./pages/SmartHomeService";
import SecuritySystemsService from "./pages/SecuritySystemsService";
import DataNetworkingService from "./pages/DataNetworkingService";
import EntertainmentService from "./pages/EntertainmentService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-quote" element={<FreeQuote />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/smart-home" element={<SmartHome />} />
        <Route path="/smart-home-more-info" element={<SmartHomeMoreInfo />} />
        <Route path="/services" element={<ServicesDirectory />} />
        <Route path="/services/electrical-services" element={<ElectricService />} />
        <Route path="/services/smart-home" element={<SmartHomeService />} />
        <Route path="/services/security-systems" element={<SecuritySystemsService />} />
        <Route path="/services/data-networking" element={<DataNetworkingService />} />
        <Route path="/services/entertainment-technology" element={<EntertainmentService />} />
        {/* Redirects from old URLs to new service URLs for SEO */}
        <Route path="/security-systems" element={<Navigate to="/services/security-systems" replace />} />
        <Route path="/data-networking" element={<Navigate to="/services/data-networking" replace />} />
        <Route path="/entertainment-technology" element={<Navigate to="/services/entertainment-technology" replace />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Privacypage />} />
        <Route path="/areas-we-service" element={<AreaWeService />} />
        <Route path="/switchboard-upgrade" element={<SwitchBoard />} />
        <Route path="/terms-and-conditions" element={<Termspage />} />
        <Route path="/suburbs" element={<SuburbsDirectory />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
