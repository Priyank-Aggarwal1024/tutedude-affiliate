import "../styles/Member.css";
import speaker from "../assets/speaker.svg";
function Member() {
  return (
    <>
      <div className="affiliate-member">
        <div className="affiliate-member-inner">
          <div className="affiliate-member-left">
            <img src={speaker} alt="Speaker" />
          </div>
          <div className="affiliate-member-right">
            <div className="affiliate-member-head">
              Become as Affiliate Member!
            </div>
            <div className="affiliate-member-join">Join Now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
