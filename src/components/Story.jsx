
import React from "react";
import "./Story.css";
import crcRetreat from "../assets/crc-retreat-1976.jpg";
import audreLorde from "../assets/audre-lorde.jpg";

const voices = [
  {
    name: "Barbara Smith",
    // Top row, second from left in the group photo
    cropClass: "barbara",
    bio: "Co-founder, prolific writer on Black feminist theory and activist networks.",
  },
  {
    name: "Beverly Smith",
    // Top row, third from left in the group photo
    cropClass: "beverly",
    bio: "Editor and thought leader, helped frame the Collective’s message for wider audiences.",
  },
  {
    name: "Demita Frazier",
    // Bottom row, first from left in the group photo
    cropClass: "demita",
    bio: "Organizer, speaker, and advocate for LGBTQ+ rights within Black feminist movements.",
  },
  {
    name: "Audre Lorde",
    cropClass: "audre",
    img: audreLorde,
    bio: "Renowned poet and activist whose work galvanized intersectional awareness.",
  },
];

const Story = () => (
  <section
    id="story"
    className="story animate-on-scroll"
    aria-labelledby="story-heading"
  >
    <div className="container">
      <h2 id="story-heading">The Story</h2>

      <div className="story-grid">
        {/* Left column: narrative */}
        <div className="story-content">
          <h3>Origins and Mission</h3>
          <p>
            In 1974, six Black lesbian feminists—Barbara Smith, Demita Frazier,
            Beverly Smith, Charlotte Bunch, and Audre Lorde—convened aboard the
            Common Sense, a houseboat on the Combahee River in South Carolina.
            Concerned about racism and misogyny within white feminist circles
            and sexism and homophobia within the civil rights movement, they
            founded the Combahee River Collective in Boston to address the
            intersections of oppression.
          </p>
          <h3>Collective Statement (1977)</h3>
          <blockquote>
            “We are actively committed to struggling against racial, sexual,
            heterosexual, and class oppression, and see as our particular work
            the development of integrated analysis and practice based upon the
            fact that the major systems of oppression are interlocking.”
            <cite>—The Combahee River Collective, 1977</cite>
          </blockquote>
          <h3>Impact and Legacy</h3>
          <p>
            The Collective’s 1977 Statement introduced the concept of identity
            politics, highlighting how race, gender, and class intersect. Their
            pioneering work laid the groundwork for later intersectional
            feminism and continues to inspire activists addressing systemic
            injustices today.
          </p>
        </div>

        {/* Right column: map */}
        <div className="story-image-container">
          <img
            src={crcRetreat}
            alt="Combahee River Collective members at 1976 retreat (group photo)"
            className="group-photo"
            loading="lazy"
          />
        </div>
      </div>

      <div className="voices-section">
        <h3>Voices of the Collective</h3>
        <div className="voices-grid">
          {voices.map((person, idx) => (
            <div key={idx} className="voice-card">
              <div
                className={`voice-photo-wrapper ${
                  person.cropClass
                }`}
              >
                {person.cropClass === "audre" && (
                  <img
                    src={person.img}
                    alt={`Portrait of ${person.name}`}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="voice-info">
                <h4>{person.name}</h4>
                <p>{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Story;
