import "./Position.css";

export function PositionFit() {
  return (
    <div className="position-container">
      <div className="position-header">
        <h1>Position fit</h1>
        <p className="position-intro">
          Alright, let's deep dive into what really matters. If we take a look
          at the job offer, here’s what you are looking for:
        </p>
      </div>

      {/* Track record */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Track record</h3>
          <ul className="position-req-list">
            <li>
              5+ years in <strong>Operations</strong>,{" "}
              <strong>Revenue Ops</strong>, <strong>Sales / Growth Ops</strong>.
              Proven track record of driving significant business growth in a
              fast-paced and challenging environment by boosting conversion and
              revenue efficiency.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            Over the past 3.5 years, I’ve operated in a high-growth SaaS
            environment (from 4M to 10M ARR) where I owned end-to-end growth and
            testing initiatives, which gave me exposure comparable to more
            traditional 5+ year roles. I know what working in a fast-paced
            environment is like and I particularly thrive in those. I also
            launched and grew a personal SaaS side-project for over 2 years,
            which gave me a lot of field experience.
          </p>
        </div>
      </section>

      {/* Strategic builder mindset */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Strategic builder mindset</h3>
          <ul className="position-req-list">
            <li>
              Self-starter with a hands-on approach, used to delivering
              measurable business impact. Enjoys building from{" "}
              <strong>0 to 1</strong>, experimenting quickly and autonomously,
              and shipping improvements using{" "}
              <strong>no-code / low-code tools</strong> and automation.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            This role strongly matches how I operate. I have a clear builder
            mindset and enjoy taking initiatives from 0 to 1, experimenting
            quickly, and shipping improvements with measurable impact.
          </p>
          <p className="position-response-text">
            Three years ago, I co-founded a SaaS project with friends and grew
            it to +400€ MRR and 250+ weekly returning users. Beyond the numbers,
            this experience taught me how to prioritize, iterate fast, and make
            pragmatic decisions under constraints — skills I use daily in my
            work.
          </p>
        </div>
      </section>

      {/* Extremely analytical */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Extremely analytical</h3>
          <ul className="position-req-list">
            <li>
              Comfortable manipulating SQL queries, tracking and analyzing data
              to continuously improve funnel performance. Experience with A/B
              testing, user behavior analysis, and analytics tools (GA4, Hotjar,
              Amplitude, Mixpanel, etc.).
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            As marketers, data should be the backbone of decision-making. That’s
            why I designed and implemented the full tracking plan for Waalaxy’s
            website using PostHog. I’ve also worked extensively with GA4,
            Mixpanel, Hotjar, and other analytics tools. I’ve designed and
            launched multiple A/B tests to improve messaging, funnel conversion,
            and user experience — these topics are very familiar to me.
          </p>
        </div>
      </section>

      {/* Business-focused */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Business-focused</h3>
          <ul className="position-req-list">
            <li>
              Focused on delivering measurable business impact by identifying
              friction in the funnel and building systems that improve revenue
              growth, efficiency, and scalability.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            At Waalaxy, I repeatedly focused on identifying and removing
            friction in the funnel. After spotting a lower-than-expected
            conversion rate at the sign-up step, I led multiple A/B tests around
            the LinkedIn OAuth flow.
          </p>
          <p className="position-response-text">
            Introducing a dedicated connection page before OAuth resulted in a
            +3.4 point increase in conversion rate.
          </p>
          <p className="position-response-text">
            This is representative of how I work: diagnose issues, test
            hypotheses, and implement scalable solutions that directly impact
            revenue.
          </p>
        </div>
      </section>

      {/* AI & no-code tooling */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">AI & no-code tooling</h3>
          <ul className="position-req-list">
            <li>
              Comfortable leveraging AI and automation tools to build processes,
              pages, and internal tools that improve both user experience and
              internal efficiency.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            I strongly believe AI can significantly improve user experience
            through personalized guidance. I’m tech-savvy and always eager to
            learn. I’ve developed solid software engineering skills and am a
            full-stack developer specialized in React and Node.js with
            TypeScript. This allows me to go beyond no-code limitations when
            needed while still leveraging them effectively.
          </p>
        </div>
      </section>

      {/* CRM automation */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">
            CRM automation skills (or strong appetite)
          </h3>
          <ul className="position-req-list">
            <li>
              Hands-on experience managing automated lifecycle campaigns (CRM
              experience, Customer.io as a plus).
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            One of my first missions at Waalaxy was creating personalized email
            flows to nurture leads after downloading a lead magnet. These emails
            achieved a 52% open rate and a 0.8% conversion rate. I built them
            using Make and Mailchimp, and the underlying logic directly
            translates to CRM-based workflows.
          </p>
        </div>
      </section>

      {/* Closing */}
      <p className="position-closing">
        There is much more I’d love to discuss — especially around lead scoring
        and free tools strategy (which I currently work on at Waalaxy). I’d be
        glad to dive deeper during an interview!
      </p>
    </div>
  );
}
