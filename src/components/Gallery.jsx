import React from "react";
import "./Gallery.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";

const Gallery = () => (
  <section
    id="gallery"
    className="gallery animate-on-scroll"
    aria-labelledby="gallery-heading"
  >
    <div className="container">
      <h2 id="gallery-heading">Gallery</h2>
      <div className="gallery-grid">
        {[img1, img2, img3].map((src, idx) => (
          <figure key={idx} className="gallery-item">
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
            />
            <figcaption>
              {idx === 0 && "Members planning strategy, 1975"}
              {idx === 1 && "Book cover: How We Get Free"}
              {idx === 2 && "Original draft of the Statement, 1977"}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
