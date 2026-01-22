import "./Contact.css";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Let's get in touch!</p>
      </div>

      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:colas.vdv@gmail.com" className="contact-value">
            colas.vdv@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Phone</span>
          <a href="tel:0782842009" className="contact-value phone">
            07 82 84 20 09
          </a>
        </div>
      </div>
    </div>
  );
}
