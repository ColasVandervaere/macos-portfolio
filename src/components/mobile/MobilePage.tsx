import { useEffect, useState } from "react";
import "./MobilePage.css";

export const MobilePage = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' });
    };

    return (
        <div className="mobile-page">
            <div className="mobile-page__content">
                <div className="mobile-page__clock">
                    <h2 className="mobile-page__time">{formatTime(time)}</h2>
                    <p className="mobile-page__date">{formatDate(time)}</p>
                </div>

                <div className="mobile-page__card">
                    <div className="mobile-page__avatar-wrapper">
                        <div className="mobile-page__avatar">
                            <span>CV</span>
                        </div>
                    </div>
                    
                    <div className="mobile-page__info">
                        <h1 className="mobile-page__title">Colas Vandervaere</h1>
                        <p className="mobile-page__message">
                            This portfolio is best viewed on a <strong>Desktop</strong>.
                        </p>
                        <p className="mobile-page__submessage">
                            Please switch to a computer to experience the full macOS environment.
                        </p>
                    </div>
                </div>

                <div className="mobile-page__hint">
                    Connect to a desktop to unlock
                </div>
            </div>
        </div>
    );
};