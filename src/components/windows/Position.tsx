import "./Position.css";

export function PositionFit() {
  return (
    <div className="position-container">
      <div className="position-header">
        <h1>Position Fit</h1>
        <p className="position-intro">
          Alright, let's deep dive into what really matters. If we take a look
          at the job offer, here's what you are looking for:
        </p>
      </div>

      {/* Track record */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Track record</h3>
          <ul className="position-req-list">
            <li>
              2-10 years of experience in growth or marketing roles in
              startups or high-growth scale-ups.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            I've spent the last 3.5 years as a Growth Marketer at Waalaxy, a B2B
            SaaS that went from 4M to 10M ARR while I was there. It's the kind
            of place where you either learn to swim fast or you drown, and I
            genuinely loved that about the role.
          </p>
          <p className="position-response-text">
            Outside of work, I also co-founded a SaaS side project with some
            friends and grew it to 250+ weekly returning users. It's not a huge
            number, but building something from scratch with no budget taught me
            a lot more than any course could.
          </p>
        </div>
      </section>

      {/* Systems & growth loops */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Systems & growth loops</h3>
          <ul className="position-req-list">
            <li>Think in systems and frameworks, especially growth loops.</li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            I'm not great at one-off campaigns. What I actually enjoy is
            figuring out the underlying loop: where do users come from, what
            gets them to engage, what makes them come back and tell others. At
            Waalaxy, I spent a lot of time mapping that out and finding where the
            system was leaking.
          </p>
          <p className="position-response-text">
            With Finary specifically, the loop feels exciting to me.
            Users track their portfolio, they discover things they're missing,
            they improve their allocation, their performance goes up, they share
            the tool. That's an interesting funnel to work on.
          </p>
        </div>
      </section>

      {/* Full project ownership */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Full project ownership</h3>
          <ul className="position-req-list">
            <li>Own projects from start to finish with minimal oversight.</li>
            <li>
              Thrive in ambiguity and fast-paced environments where priorities
              shift quickly.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            This is honestly how I prefer to work. At Waalaxy, I'd typically
            spot a problem, dig into the data, propose something, run it, and
            write up what we learned. I don't need a lot of hand-holding and I
            find it frustrating when there is too many processes around simple
            decisions.
          </p>
          <p className="position-response-text">
            Running a side project with friends reinforced that. When there's no
            one to delegate to, you get good at figuring out what actually
            matters and just doing it.
          </p>
        </div>
      </section>

      {/* Data-driven experimentation */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Data-driven experimentation</h3>
          <ul className="position-req-list">
            <li>
              Operate with a data-driven mindset and make decisions grounded in
              clear success metrics.
            </li>
            <li>
              Have experience running structured experimentation across the
              growth funnel.
            </li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            I built Waalaxy's full website tracking plan from scratch using
            PostHog and ran A/B tests across the funnel regularly. One I'm
            proud of: I noticed our signup conversion was lower than it should
            have been. I had a hunch the LinkedIn OAuth step wasn't properly optimized, 
            so I tested adding a dedicated connection page before it.
            That one change was worth +3.4 conversion points.
          </p>
          <p className="position-response-text">
            I always write up what I tested, what the hypothesis was, and what
            we learned, even (if not especially) when the test is unsuccessful. That's how you get
            better over time.
          </p>
        </div>
      </section>

      {/* AI-powered execution */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">AI in day-to-day work</h3>
          <ul className="position-req-list">
            <li>Are an AI promoter and use it to amplify execution.</li>
          </ul>
        </div>

        <div className="position-response">
          <p className="position-response-text">
            I use AI constantly, for writing, for research, for building things
            faster (I did for this application, for example). It's just part of how I work at this point. I'm also a
            self-taught full-stack developer (React, Node.js, TypeScript), so when I need
            something that doesn't exist yet and that can't be done with no-code tools, I can build it.
          </p>
          <p className="position-response-text">
            This portfolio is a good example. It's a React app that works like
            a mini macOS, and I built and deployed it specifically to apply for
            this role. It felt like a more interesting way to introduce myself
            than sending a PDF.
          </p>
        </div>
      </section>

      {/* Bonus */}
      <section className="position-section">
        <div className="position-req">
          <h3 className="position-req-title">Bonus ✦</h3>
          <ul className="position-req-list">
            <li>
              Have experience in fintech or are an active investor yourself.
            </li>
            <li>Have previously worked at product-led B2C companies.</li>
          </ul>
        </div>

        <div className="position-response position-response--bonus">
          <p className="position-response-text">
            Earlier this year I bought a flat in Montpellier with some friends
            as a real estate investment and we spent 6 months renovating it.             I also personally invest in stocks
            and ETFs (got a 22% return on my investments in 2025, thank you Google and Nvidia). All this to say
            I know a bit when it comes to investing.
          </p>
          <p className="position-response-text">
            And on the product-led side: Waalaxy is a 100% product-led company, and I find it being the most interesting model to work on as a growth manager.
          </p>
        </div>
      </section>

      {/* Closing */}
      <p className="position-closing">
        The two things I'd be most excited to work on at Finary: working on B2C funnels (as I mainly worked on B2B funnels so far)
        and handling the go-to-market for the Brokerage Account. Happy to get into
        the details on both!
      </p>
    </div>
  );
}
