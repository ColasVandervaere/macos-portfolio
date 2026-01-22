import chessImg from "../../assets/chess.avif";
import kitchenImg from "../../assets/kitchen-renovating.jpeg";
import marathonImg from "../../assets/toulouse-half-marathon.jpeg";
import "./Me.css";

export function Me() {
  return (
    <div className="me-container">
      <div className="me-header">
        <h1>Who am I?</h1>
        <p className="me-intro">
          Working with someone isn't just about a skillset. It's also about
          personality, culture and vision fit. This part aims to show who I am
          outside of work, so let's talk about what I do in my free time
        </p>
      </div>

      <div className="me-grid">
        {/* Sports Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src={marathonImg}
              alt="Toulouse half marathon"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Sports</h3>
            <p className="me-card-text">
              I spend a lot of time on sports. I find it the best way to develop yourself,
              both physically and mentally. I've been playing sports for as
              long as I can remember. First, mountain biking (I grew up in a
              village in the Alps), then volleyball during middle school (went
              to 4th round of France championship with my team). I now mainly
              hit the gym, run and try to step up my fitness game with
              competitions such as Hyrox. I'm also preparing for the Nice-Cannes marathon at the end of
              2026.
            </p>
          </div>
        </div>

        {/* Renovating Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src={kitchenImg}
              alt="Kitchen renovating"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Renovating apartments</h3>
            <p className="me-card-text">
              Zefir's mission resonates with me because I strongly believe that people 
              will always be interested in investing in real estate. 
              And i'm no exception. Earlier this year, I bought a flat with some
              friends in Montpellier's city center and we completely renovated it
              for 6 months. We loved it and want to do it again in 2026.
            </p>
          </div>
        </div>

        {/* Chess Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src={chessImg}
              alt="Chess Board"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Chess</h3>
            <p className="me-card-text">
              Last year, I discovered a new passion for Chess and started
              playing from time to time on chess.com. As of right now, I'm only 800 elo
              but I definitely want to get better. Blaise Pascal said "Chess is
              the gymnasium of the mind" and I can't agree more. Road to 1500 elo
              by the end of 2026!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
