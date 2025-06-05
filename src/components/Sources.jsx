import React from "react";
import "./Sources.css";

const Sources = () => (
  <section
    id="sources"
    className="sources animate-on-scroll"
    aria-labelledby="sources-heading"
  >
    <div className="container">
      <h2 id="sources-heading">Sources & References</h2>
      <ol>
        <li>
          Combahee River Collective. “The Combahee River Collective Statement.” 1977.{" "}
          <a
            href="https://ia904602.us.archive.org/11/items/zines2022/Combahee3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF (Full Statement)
          </a>
        </li>
        <li>
          Lerner, Gerda. <em>When History Is Women’s History:</em> Retrospect,
          Perspective, and Prospect. Univ. of North Carolina Press, 1993.
        </li>
        <li>
          Taylor, Keeanga-Yamahtta.{" "}
          <em>How We Get Free: Black Feminism and the Combahee River Collective.</em> 
          Haymarket Books, 2017.
        </li>
      </ol>
    </div>
  </section>
);

export default Sources;
