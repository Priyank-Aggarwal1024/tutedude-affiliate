import "../styles/Benefits.css";
import be1 from "../assets/be1.svg";
import be2 from "../assets/be2.svg";
import be3 from "../assets/be3.svg";
import be4 from "../assets/be4.svg";
function Benefits() {
  return (
    <>
      <div className="affiliate-benefits">
        <div className="abenefits-left">
          <div className="abenefits-heading">
            Benefits of
            <span className="text-pink fw-700"> Affiliate Program</span>
          </div>
          <div className="abenefits-left-para">
            The Tutedude Affiliate Program enables you to earn income by
            promoting our comprehensive, top-quality, industry experts-designed
            courses.
          </div>
        </div>
        <div className="abenefits-right">
          <div className="abenefits-right-card">
            <div className="abenefits-right-card-left">
              <img src={be1} alt="Benefits Section Vectors" />
            </div>
            <div className="abenefits-right-card-right">
              Earn <span className="fw-700">20% commission</span> on every sale
            </div>
          </div>
          <div className="abenefits-right-card">
            <div className="abenefits-right-card-left">
              <img src={be2} alt="Benefits Section Vectors" />
            </div>
            <div className="abenefits-right-card-right">
              Reliable, transparent tracking system
            </div>
          </div>
          <div className="abenefits-right-card">
            <div className="abenefits-right-card-left">
              <img src={be3} alt="Benefits Section Vectors" />
            </div>
            <div className="abenefits-right-card-right">
              Guaranteed monthly payments
            </div>
          </div>
          <div className="abenefits-right-card">
            <div className="abenefits-right-card-left">
              <img src={be4} alt="Benefits Section Vectors" />
            </div>
            <div className="abenefits-right-card-right">
              Anyone can join from anywhere
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
