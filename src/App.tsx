import React from "react";
import logo from "./assets/imgs/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from './assets/components/Navigator';
import Footer from './assets/components/Footer';
import HeroPage from './assets/components/home/HeroPage';
import WhyUseIt from './assets/components/home/WhyUseIt';

export default function App(): React.ReactElement {
  return (
    <>
      <Navigator />
      <div className="app bg-dark text-white">
        <HeroPage />
        <WhyUseIt />
        <Footer />
      </div>
    </>
  );
}
