import React, { useEffect, useState } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import Slider from "./components/Slider";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Agents from "./components/Agents";
import { Watch } from "react-loader-spinner";
import ScrollTopToBottom from "./components/ScrollTopToBottom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return <div className="loading"><Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    /></div>;
  }

  return (
    <div id="app">

      <div className="site-content bg-white overflow-hidden">
        <Slider />
        <Features />
        <Testimonials />
        <Agents />
        <ScrollTopToBottom />
      </div>
    </div>
  );
}

export default App;
