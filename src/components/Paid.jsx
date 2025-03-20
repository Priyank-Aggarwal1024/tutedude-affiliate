import { useState } from "react";
import "../styles/Paid.css";
import { useEffect } from "react";
function Paid() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  return (
    <>
      <div className="affiliate-paid">
        <div className="affiliate-paid-head">
          {width > 580 ? "Your Path to" : "You’re part of our team."}{" "}
          <span className="text-pink fw-700">
            {" "}
            {width > 580 ? "Getting Paid" : "We support you."}
          </span>
        </div>
        <div className="affiliate-paid-main">
          <div className="affiliate-paid-main-row">
            <div className="affiliate-paid-main-row-content">
              <div className="affiliate-pmrc-head">
                Get your affiliate dashboard
              </div>
              <div className="affiliate-pmrc-text">
                Monitor your results through our reliable software, track your
                revenue, and request payments anytime.
              </div>
            </div>
            <div className="affiliate-paid-main-row-image"></div>
          </div>
          <div className="affiliate-paid-main-row">
            <div className="affiliate-paid-main-row-content affiliate-paid-main-row-content-even">
              <div className="affiliate-pmrc-head">Real-Time Earnings</div>
              <div className="affiliate-pmrc-text">
                Track earnings instantly on your dashboard.
              </div>
            </div>
            <div className="affiliate-paid-main-row-image affiliate-paid-main-row-image-even"></div>
          </div>
          <div className="affiliate-paid-main-row">
            <div className="affiliate-paid-main-row-content">
              <div className="affiliate-pmrc-head">Bank Account Setup </div>
              <div className="affiliate-pmrc-text">
                <p className="text-pink fw-700">
                  Affiliates securely enter bank details for payout:
                </p>
                <ul className="affiliate-pmrc-ul">
                  <li>Account Holder Name </li>
                  <li>Bank Name</li>
                  <li>Bank Account Number </li>
                  <li>Bank IFSC Code</li>
                </ul>
                <p>(Details can be updated anytime)</p>
              </div>
            </div>
            <div className="affiliate-paid-main-row-image"></div>
          </div>
          <div className="affiliate-paid-main-row">
            <div className="affiliate-paid-main-row-content affiliate-paid-main-row-content-even">
              <div className="affiliate-pmrc-head">Monthly Auto Payout </div>
              <div className="affiliate-pmrc-text">
                Payouts processed automatically in the first week of every
                month.
              </div>
            </div>
            <div className="affiliate-paid-main-row-image affiliate-paid-main-row-image-even"></div>
          </div>
          <div className="affiliate-paid-main-row">
            <div className="affiliate-paid-main-row-content">
              <div className="affiliate-pmrc-head">Notifications & History</div>
              <div className="affiliate-pmrc-text">
                <ul className="affiliate-pmrc-ul">
                  <li>Instant payout alerts and clear history tracking.</li>
                </ul>
                <p className="fw-700">Pending → Processing → Paid</p>
              </div>
            </div>
            <div className="affiliate-paid-main-row-image"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paid;
