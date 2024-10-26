import "./App.css";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Layout/Footer";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import ReservationPage from "./pages/ReservationPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* It will be a private routes mb */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
