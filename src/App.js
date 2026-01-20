import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import SecurityService from "./pages/SecurityService";
import EntertainmentService from "./pages/EntertainmentService";
import DataNetworking from "./pages/DataNetworking";

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
        <Route path="/electrical-services" element={<ElectricService />} />
        <Route path="/security-systems" element={<SecurityService />} />
        <Route path="/entertainment-technology" element={<EntertainmentService />} />
        <Route path="/data-networking" element={<DataNetworking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Privacypage />} />
        <Route path="/areas-we-service" element={<AreaWeService />} />
        <Route path="/switchboard-upgrade" element={<SwitchBoard />} />
        <Route path="/terms-and-conditions" element={<Termspage />} />
        <Route path="/services" element={<ServicesDirectory />} />
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
