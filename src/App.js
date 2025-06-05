import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import WhyItMatters from "./components/WhyItMatters";
import Gallery from "./components/Gallery";
import Sources from "./components/Sources";
import Footer from "./components/Footer";
import "./App.css";


function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);
}

function App() {
  useScrollAnimation();

  return (
    <div>
      <Header />
      <main role="main">
        <Hero />
        <Story />
        <Timeline />
        <WhyItMatters />
        <Gallery />
        <Sources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
