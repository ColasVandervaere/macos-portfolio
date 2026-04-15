import { useProfile } from "../../profile/useProfile";
import "./About.css";

export function About() {
  const { about } = useProfile();

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Hey!</h1>
        <p className="about-intro">
          {about.introLine} <br />
          {about.beforeLink}
          <a
            className="about-link"
            href={about.jobLink.href}
            target="_blank"
            rel="noreferrer"
          >
            {about.jobLink.label}
          </a>
          {about.afterLink}
        </p>
      </div>

      <div className="about-guide">
        <span className="about-guide-title">
          As a little Guide, here's how the app is structured:
        </span>
        <ul className="about-list">
          <li className="about-list-item">
            <strong>- About</strong> (you're here)
          </li>
          <li className="about-list-item">
            <strong>- Position fit</strong> (how my experience matches the role,
            point by point)
          </li>
          <li className="about-list-item">
            <strong>- Who am I?</strong> (what I do outside of work)
          </li>
          <li className="about-list-item">
            <strong>- Contact</strong>(my phone number & email address)
          </li>
          <li className="about-list-item">
            <strong>- LinkedIn</strong> (a link to my LinkedIn profile,
            which stands as my resume. You'll find all the information about my
            experience and education)
          </li>
        </ul>
      </div>

      <div className="about-footer">Happy exploration!</div>
    </div>
  );
}
