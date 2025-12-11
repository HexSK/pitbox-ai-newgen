import React from "react";
import logo  from "./assets/imgs/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from './assets/components/Navigator.jsx';
import Footer    from './assets/components/Footer.jsx';
import HeroPage  from './assets/components/home/HeroPage.jsx';
import WhyUseIt  from './assets/components/home/WhyUseIt.jsx';

export default function App() {
  return (
    <>
    <Navigator/ >
    <div className="app bg-dark text-white">
      <HeroPage/ >
      <WhyUseIt/ >
      <Footer/>
    </div>
    </>
  );
}

