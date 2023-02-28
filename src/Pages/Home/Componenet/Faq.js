import React, { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";

const Faq = () => {
  const data = [
    {
      question: "What is Netflix?",
      answers:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. ",
    },
    {
      question: "How much does Netflix cost?",
      answers:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I Watch?",
      answers:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do I cancel?",
      answers:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answers:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answers:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleSelect(i)}>
                  <h3>{item.question}</h3>
                  {selected === i ? (
                    <FaTimes style={{ color: "white" }} size={25} />
                  ) : (
                    <FaPlus style={{ color: "white" }} size={25} />
                  )}

                  {/* <img src={require ("../../../assets/up-arrow-1.png")} className={selected===i ? "reverse" : ""} /> */}
                </div>
                <div className={selected === i ? "answer show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="faq1">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="serch1">
          <input type="text" placeholder="Email adress" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
