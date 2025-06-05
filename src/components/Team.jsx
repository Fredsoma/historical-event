import React from "react";
import "./Team.css";
import member from "../assets/member.jpg"; 


const teamMembers = [
  {
    name: "Fred Soma",
    role:
      "Developer: Built and designed the entire website from scratch, including React components, interactive timeline, and responsive styling.",
    img: member,
  },
];

const Team = () => (
  <section
    id="team"
    className="team animate-on-scroll"
    aria-labelledby="team-heading"
  >
    <div className="container">
      <h2 id="team-heading">Team</h2>
      <div className="team-grid">
        {teamMembers.map((m, idx) => (
          <div key={idx} className="team-card">
            <div className="team-photo-wrapper">
              <img
                src={m.img}
                alt={`Photo of ${m.name}`}
                loading="lazy"
              />
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
