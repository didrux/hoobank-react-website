import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { Route, Routes } from "react-router-dom";
import Features from "./components/Features";
import Modal from "./components/Modal/Modal.jsx";
import { useState } from "react";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/home" element={<Hero />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/profil" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
