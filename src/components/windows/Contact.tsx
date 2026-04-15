import { useProfile } from "../../profile/useProfile";
import "./Contact.css";

export function Contact() {
  const { contact } = useProfile();

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p className="contact-tagline">Let's get in touch!</p>
      </div>

      <div className="contact-card">
        <a href={`mailto:${contact.email}`} className="contact-item">
          <div className="contact-icon">✉️</div>
          <div className="contact-item-body">
            <span className="contact-label">Email</span>
            <span className="contact-value">{contact.email}</span>
          </div>
        </a>

        <div className="contact-divider" />

        <a href={contact.phoneHref} className="contact-item">
          <div className="contact-icon">📱</div>
          <div className="contact-item-body">
            <span className="contact-label">Phone</span>
            <span className="contact-value phone">{contact.phoneDisplay}</span>
          </div>
        </a>
      </div>
    </div>
  );
}
