import "../styles/Hero.css";
import heroimg from "../assets/hero-img.webp";
function Hero() {
  return (
    <>
      <div className="affiliate-hero">
        <div className="ahero-left">
          <div className="aherol-top">An IIT Delhi Alumni Initiative</div>
          <div className="aherol-bottom">
            <div className="aherolb-head">
              Earn <span className="aherolb-headingspan">20% Commission</span>{" "}
              with Tutedude Affiliate!
            </div>
            <div className="aherolb-join">Join Now</div>
          </div>
        </div>
        <div className="ahero-right">
          <img src={heroimg} alt="Affiliate Image" className="ahero-image" />
        </div>
      </div>
      <div className="affliate-hero-stats-outer">
        <div className="affliate-hero-stats">
          <div className="aherostats-card">
            <div className="aherostats-card-no">₹35L</div>
            <div className="aherostats-card-name">PAID TO DATE</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="89"
            viewBox="0 0 4 89"
            fill="none"
            className="aherostats-svg"
          >
            <path
              d="M1.57031 0V88.5"
              stroke="black"
              strokeOpacity="0.14"
              strokeWidth="3"
            />
          </svg>
          <div className="aherostats-card">
            <div className="aherostats-card-no">5000+</div>
            <div className="aherostats-card-name">TUTEDUDE AFFILIATES</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="89"
            viewBox="0 0 4 89"
            fill="none"
            className="aherostats-svg"
          >
            <path
              d="M1.57031 0V88.5"
              stroke="black"
              strokeOpacity="0.14"
              strokeWidth="3"
            />
          </svg>
          <div className="aherostats-card">
            <div className="aherostats-card-no">15000+</div>
            <div className="aherostats-card-name">CONVERSIONS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
