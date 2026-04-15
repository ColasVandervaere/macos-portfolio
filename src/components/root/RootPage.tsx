import { useEffect, useState } from "react";
import { macOsWallpaper } from "../../profile/desktopBackground";
import { useProfile } from "../../profile/useProfile";
import "../mobile/MobilePage.css";
import "./RootPage.css";

export const RootPage = () => {
  const { contact, linkedinUrl } = useProfile();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const formatDate = (date: Date) =>
    date.toLocaleDateString([], {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

  return (
    <div
      className="mobile-page"
      style={{
        backgroundImage: `url(${macOsWallpaper})`,
      }}
    >
      <div className="mobile-page__content">
        <div className="mobile-page__clock">
          <h2 className="mobile-page__time">{formatTime(time)}</h2>
          <p className="mobile-page__date">{formatDate(time)}</p>
        </div>

        <div className="mobile-page__card root-page__card">
          <div className="mobile-page__avatar-wrapper">
            <div className="mobile-page__avatar">
              <span>CV</span>
            </div>
          </div>

          <div className="mobile-page__info">
            <h1 className="mobile-page__title">Colas Vandervaere</h1>
            <p className="root-page__subtitle">Get in touch</p>
          </div>

          <div className="root-page__contacts">
            <a href={`mailto:${contact.email}`} className="root-page__contact-item">
              <span className="root-page__contact-icon">✉️</span>
              <span className="root-page__contact-label">{contact.email}</span>
            </a>
            <a href={contact.phoneHref} className="root-page__contact-item">
              <span className="root-page__contact-icon">📱</span>
              <span className="root-page__contact-label">{contact.phoneDisplay}</span>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="root-page__contact-item">
              <span className="root-page__contact-icon">💼</span>
              <span className="root-page__contact-label">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
