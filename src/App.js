import React from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import FAQ from "./components/FAQ.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
