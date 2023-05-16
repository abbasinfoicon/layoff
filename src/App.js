import React from "react";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Agents from "./components/Agents";

function App() {
  return (
    <div id="app">
      <div className="site-content bg-white overflow-hidden">
        <Slider />
        <Features />
        <Testimonials />
        <Agents />
      </div>
    </div>
  );
}

export default App;
