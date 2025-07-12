import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FreeQuote from "./pages/FreeQuote"; // Import the FreeQuote page component
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AreaWeService from "./pages/AreaWeService";
import SwitchBoard from "./pages/SwitchBoard";
import SmartHome from "./pages/SmartHome";
import Privacypage from "./pages/PrivacyPage";
import Termspage from "./pages/Termspage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-quote" element={<FreeQuote />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Our-Serives" element={<OurServices />} />
        <Route path="/smart-home" element={<SmartHome />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Privacy-Policy" element={<Privacypage />} />
        <Route path="/Areas-We-Service" element={<AreaWeService />} />
        <Route path="/Switch-board-upgrade" element={<SwitchBoard />} />
        <Route path="/Terms-and-Conditions" element={<Termspage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
