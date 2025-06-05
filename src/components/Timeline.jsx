import React from "react";
import "./Timeline.css";

const events = [
  {
    date: "1974",
    title: "Founding of the Collective",
    description:
      "Six Black lesbian feminists convene on the Combahee River to form the organization.",
  },
  {
    date: "1977",
    title: "Publication of the Collective Statement",
    description:
      "The Combahee River Collective Statement is released, outlining Black feminist theory.",
  },
  {
    date: "1978",
    title: "First National Conference",
    description:
      "Hosts the first gathering focused on Black women’s liberation issues.",
  },
  {
    date: "1980",
    title: "Collective Disbands",
    description:
      "Members pursue individual activism projects, continuing the legacy.",
  },
];

const Timeline = () => (
  <section
    id="timeline"
    className="timeline animate-on-scroll"
    aria-labelledby="timeline-heading"
  >
    <div className="container">
      <h2 id="timeline-heading">Timeline</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {events.map((event, idx) => (
          <div key={idx} className="timeline-event">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
