import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import HomeSection from "./Component/HomeSection";
import HomePage from "./Pages/HomePage";
import EmailLogin from "./Pages/Login/EmailLogin";
import OtpVerify from "./Pages/Login/OtpVerify";




function App() {
  return (
    <Router>
     <Header></Header>
      <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/email-login" element={<EmailLogin></EmailLogin>} />
      <Route path="/verify-otp" element={<OtpVerify></OtpVerify>} />

      </Routes>
    </Router>
  );
}

export default App;

