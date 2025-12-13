import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from './assets/pages/components/Navigator';
import Footer    from './assets/pages/components/Footer';
import Home      from "./assets/pages/Home";
import About     from "./assets/pages/About";

export default function App(): React.ReactElement {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <div className="app bg-dark text-white">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/pitbox" element={<Pitbox/>}/> */}
            {/* <Route path="/contact-us" element={<Contact/>}/> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
