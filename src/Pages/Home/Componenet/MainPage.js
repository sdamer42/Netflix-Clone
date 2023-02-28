import React from "react";
import img from "../../../assets/Background.jpg";

import "../../Home/HomeStyle.css";

const MainPage = () => {
  return (
    <div className="mainpage d-md-flex">
      <img src={img} />
      <div className="content">
        <h1>
          Unlimited movies, TV <span>shows, and more.</span>
        </h1>
        <p className="para1">Watch anywhere. Cancel anytime.</p>
        <p className="para2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="serch">
          <input type="text" placeholder="Email adress" />
          <button>Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
