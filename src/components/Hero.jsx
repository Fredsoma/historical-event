import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-combahee.jpeg";

const Hero = () => (
  <section
    id="hero"
    className="hero animate-on-scroll"
  >
    <div className="hero-overlay"></div>
    <img
      src={heroImage}
      alt="Archival photo of Combahee River Collective members marching"
      className="hero-image"
      loading="lazy"
    />
    <div className="hero-text">
      <h2>Honoring Black Feminist Resistance</h2>
      <p>
        Explore the roots and ongoing legacy of the
        Combahee River Collective—pioneers of
        intersectional activism.
      </p>
      <a href="#story" className="cta-btn">
        Discover More
      </a>
    </div>
  </section>
);

export default Hero;
