import "./Me.css";

export function Me() {
  return (
    <div className="me-container">
      <div className="me-header">
        <h1>Me</h1>
        <p className="me-intro">
          Working with someone isn't just about a skillset. It's also about
          personality, culture and vision fit. This part aims to show who I am
          outside of work, so let's start with what I do most of my time:
        </p>
      </div>

      <div className="me-grid">
        {/* Sports Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src="src/assets/toulouse-half-marathon.jpeg"
              alt="Toulouse half marathon"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Sports</h3>
            <p className="me-card-text">
              I'm a huge sports fan. I find it the best way to develop yourself,
              both physically and mentally. I've been practicing sport for as
              long as I can remember. First mountain biking (I grew up in a
              village in the Alps), then volley-ball during middle school (went
              to 4th round of France championship with my team). I now mainly
              hit the gym, run and try to step up my fitness game with
              competitions such as Hyrox. I'm also preparing a marathon for the
              end of 2026.
            </p>
          </div>
        </div>

        {/* Renovating Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src="src/assets/kitchen-renovating.jpeg"
              alt="Kitchen renovating"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Renovating apartments</h3>
            <p className="me-card-text">
              Zefir's mission resonate with me because I strongly believe in the
              real estate market. Earlier this year, I bought a flat with some
              friends in Montpellier's citycenter and we completely renovated it
              for 6 month. We loved it and want to do it again in 2026.
            </p>
          </div>
        </div>

        {/* Chess Card */}
        <div className="me-card">
          <div className="me-card-image-container">
            <img
              className="me-card-image"
              src="src/assets/chess-board.jpeg"
              alt="Chess Board"
            />
          </div>
          <div className="me-card-content">
            <h3 className="me-card-title">Chess</h3>
            <p className="me-card-text">
              Last year, I discovered a new passion for Chess and starting
              playing from time to time on chess.com. 6 month later, I'm 800 elo
              and definitely want to get better. Blaise Pascal said "Chess is
              gymnasium for the mind" and I can't agree more. Road to 1500 elo
              by the end of 2026!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
