import { useProfile } from "../../profile/useProfile";
import "./Position.css";

export function PositionFit() {
  const { position } = useProfile();

  return (
    <div className="position-container">
      <div className="position-header">
        <h1>Position Fit</h1>
        <p className="position-intro">{position.intro}</p>
      </div>

      {position.sections.map((section, sectionIndex) => (
        <section
          key={`${section.reqTitle}-${sectionIndex}`}
          className="position-section"
        >
          <div className="position-req">
            <h3 className="position-req-title">{section.reqTitle}</h3>
            <ul className="position-req-list">
              {section.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          <div
            className={
              section.isBonus
                ? "position-response position-response--bonus"
                : "position-response"
            }
          >
            {section.responses.map((text, i) => (
              <p
                key={`${section.reqTitle}-${i}`}
                className="position-response-text"
              >
                {text}
              </p>
            ))}
          </div>
        </section>
      ))}

      <p className="position-closing">{position.closing}</p>
    </div>
  );
}
