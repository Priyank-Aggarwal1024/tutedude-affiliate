import "../styles/Promote.css";
import pContent from "../assets/p-content.svg";
import pCommunity from "../assets/p-community.svg";
import pAds from "../assets/p-ads.svg";
import pEmail from "../assets/p-email.svg";
import pPodcast from "../assets/p-podcast.svg";
function Promote() {
  return (
    <>
      <div className="affiliate-promote">
        <div className="affiliate-promote-head">
          How can <span className="text-pink fw-700">you promote?</span>
        </div>
        <div className="affiliate-promote-main">
          <div className="affiliate-promote-card">
            <div className="affiliate-promote-card-left">
              <img src={pContent} alt="Content & Blogging" />
            </div>
            <div className="affiliate-promote-card-right">
              <div className="affiliate-promote-card-head">
                Content & Blogging
              </div>
              <div className="affiliate-promote-card-para">
                Share affiliate links through informative articles on Medium,
                Quora, Reddit, and LinkedIn. Create engaging content on YouTube,
                Instagram, Facebook.
              </div>
            </div>
          </div>
          <div className="affiliate-promote-card">
            <div className="affiliate-promote-card-left">
              <img src={pEmail} alt="Email & Social Media Marketing" />
            </div>
            <div className="affiliate-promote-card-right">
              <div className="affiliate-promote-card-head">
                Email & Social Media Marketing
              </div>
              <div className="affiliate-promote-card-para">
                Send newsletters, personalized emails, and leverage your social
                presence to promote Tutedude courses organically.
              </div>
            </div>
          </div>
          <div className="affiliate-promote-card">
            <div className="affiliate-promote-card-left">
              <img src={pCommunity} alt="Community & Forums " />
            </div>
            <div className="affiliate-promote-card-right">
              <div className="affiliate-promote-card-head">
                Community & Forums{" "}
              </div>
              <div className="affiliate-promote-card-para">
                Engage in Discord, Facebook groups, WhatsApp, and Slack by
                providing genuine course recommendations.
              </div>
            </div>
          </div>
          <div className="affiliate-promote-card">
            <div className="affiliate-promote-card-left">
              <img src={pPodcast} alt="Podcasting & Webinars" />
            </div>
            <div className="affiliate-promote-card-right">
              <div className="affiliate-promote-card-head">
                Podcasting & Webinars
              </div>
              <div className="affiliate-promote-card-para">
                Feature Tutedude courses in your podcasts or host live sessions
                to showcase their value.
              </div>
            </div>
          </div>
          <div className="affiliate-promote-card">
            <div className="affiliate-promote-card-left">
              <img src={pAds} alt="Paid Ads & Reviews " />
            </div>
            <div className="affiliate-promote-card-right">
              <div className="affiliate-promote-card-head">
                Paid Ads & Reviews{" "}
              </div>
              <div className="affiliate-promote-card-para">
                Use Google, Facebook, and Instagram ads, or write honest reviews
                on course platforms to drive traffic.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promote;
