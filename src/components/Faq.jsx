import { useState } from "react";
import "../styles/Faq.css";
function Faq() {
  const [questions, setQuestions] = useState([
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: true,
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: false,
    },
    {
      ques: "Lorem ipsum dolor sit amet consectetur.",
      ans: "Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu commodo mauris. Tristique convallis semper sed ac diam consectetur ante scelerisque. ",
      open: false,
    },
  ]);
  return (
    <>
      <div className="affiliate-faq">
        <div className="affiliate-faq-left">
          <div className="affiliate-faq-head">
            Frequently <span className="text-pink fw-700">Asked Questions</span>
          </div>
          <div className="affiliate-faq-text">
            Lorem ipsum dolor sit amet consectetur. Quam amet diam nulla elit eu
            commodo mauris.{" "}
          </div>
        </div>
        <div className="affiliate-faq-right">
          {questions.map((item, idx) => (
            <div className="affiliate-faq-div" key={idx}>
              <div
                className="affiliate-faq-ques-div"
                onClick={() => {
                  setQuestions(
                    questions.map((que, id) => {
                      if (id == idx) {
                        que.open = !que.open;
                      } else {
                        que.open = false;
                      }
                      return que;
                    })
                  );
                }}
              >
                <div className="affiliate-faq-ques">{item.ques}</div>
                {item.open ? (
                  <span className="faq-open-minus"></span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.20483 3.49201V6.91864H3.7782H0.351562V7.57761V8.23658H3.7782H7.20483V11.6632V15.0898H7.8638H8.52276V11.6632V8.23658H11.9494H15.376V7.57761V6.91864H11.9494H8.52276V3.49201V0.0653772H7.8638H7.20483V3.49201Z"
                      fill="black"
                    />
                  </svg>
                )}
              </div>
              {item.open && <p className="affiliate-faq-ans">{item.ans}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
