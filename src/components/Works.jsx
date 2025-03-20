import "../styles/Works.css";
function Works() {
  return (
    <>
      <div className="affiliate-works">
        <div className="affiliate-works-head">
          How <span className="text-pink fw-700"> It Works</span>
        </div>
        <div className="affiliate-works-main">
          <div className="affiliate-works-main-card">
            <div className="awm-card-left">1</div>
            <div className="awm-card-right">
              <div className="awm-card-head">Sign Up</div>
              <div className="awm-card-para">
                Quickly and easily join, completely free, without any
                requirements.
              </div>
            </div>
          </div>
          <div className="affiliate-work-vertical"></div>

          <div className="affiliate-works-main-card">
            <div className="awm-card-left">2</div>
            <div className="awm-card-right">
              <div className="awm-card-head">Promote</div>
              <div className="awm-card-para">
                Share your personalized affiliate links across your platforms.
              </div>
            </div>
          </div>
          <div className="affiliate-work-vertical"></div>
          <div className="affiliate-works-main-card">
            <div className="awm-card-left">3</div>
            <div className="awm-card-right">
              <div className="awm-card-head">Earn</div>
              <div className="awm-card-para">
                Enjoy commissions for every referral who makes a purchase.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
