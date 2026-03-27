import "./Contact.css";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p className="contact-tagline">Let's get in touch!</p>
      </div>

      <div className="contact-card">
        <a href="mailto:colas.vdv@gmail.com" className="contact-item">
          <div className="contact-icon">✉️</div>
          <div className="contact-item-body">
            <span className="contact-label">Email</span>
            <span className="contact-value">colas.vdv@gmail.com</span>
          </div>
        </a>

        <div className="contact-divider" />

        <a href="tel:0782842009" className="contact-item">
          <div className="contact-icon">📱</div>
          <div className="contact-item-body">
            <span className="contact-label">Phone</span>
            <span className="contact-value phone">07 82 84 20 09</span>
          </div>
        </a>
      </div>
    </div>
  );
}
