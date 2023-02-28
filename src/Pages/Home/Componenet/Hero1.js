import React, { useState } from "react";
import img1 from "../../../assets/section 3/avengers.jpg";
import img2 from "../../../assets/section 3/bahubali.jpg";
import img3 from "../../../assets/section 3/kgf2.jpg";
import img4 from "../../../assets/section 3/rrr.jpeg";
import img5 from "../../../assets/section 3/vikram.jpg";
import img6 from "../../../assets/section 3/liger.jpg";
import img7 from "../../../assets/section 3/lionking.jpg";
import img8 from "../../../assets/section 3/sacredgames.jpg";
import img9 from "../../../assets/section 3/baaghi3.jpg";

import video1 from "../../../assets/Avengers Infinity War Official Trailer.mp4";
import video2 from "../../../assets/Baahubali - The Beginning Trailer.mp4";
import video3 from "../../../assets/KGF Chapter 2 Trailer.mp4";
import video4 from "../../../assets/RRR Official Trailer.mp4";
import video5 from "../../../assets/VIKRAM - Official Trailer.mp4";
import video6 from "../../../assets/Liger  Official Concept Trailer.mp4";
import video7 from "../../../assets/Lion King  Hindi Trailer.mp4";
import video8 from "../../../assets/Sacred Games 2  Official Trailer.mp4";
import video9 from "../../../assets/Baaghi 3  Official Trailer.mp4";


import "../../../Pages/Home/HomeStyle.css";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Hero1 = () => {
  const data = [
    {
      name: "Avengers Infinity War Official Trailer",
      link: video1,
      image:img1
    },
    {
      name: "Baahubali - The Beginning Trailer",
      link: video2,
      image:img2
    },
    {
      name: "KGF Chapter 2 Trailer",
      link: video3,
      image:img3
    },
    {
      name: "RRR Official Trailer.mp4",
      link:video4,
      image:img4
    },
    {
      name: "VIKRAM - Official Trailer",
      link: video5,
      image:img5
    },
    {
      name: "Liger  Official Concept Trailer",
      link: video6,
      image:img6
    },
    {
      name: "Lion King  Hindi Trailer",
      link: video7,
      image:img7
    },
    {
      name: "Sacred Games 2  Official Trailer",
      link: video8,
      image:img8
    },
    {
      name: "Baaghi 3  Official Trailer",
      link: video9,
      image:img9
    },
  ];

  
const [selected, setSelected]=useState("")
  // let url;
// function click(){
//   return(
//     setSelected(url)
//   )
// }

  return (
    <div className="hero1">
      <div className="hero1-1"> 
      <div className="item">
        {
        data.map((links,i) =>{
          return(
            // <div className="pics"  >
              <div className="imges" key={i}>
                <img src={links.image} onClick={()=>{
                  return(
                    setSelected(data[i].link)
                  )
                }} />
              </div>

            // </div>
          )
        })}
        </div>
      </div>
      <div className="hero1-2">
        <video src={selected}  autoPlay muted controls className="vid"></video>
      </div>
    </div>
    
  );

  };
export default Hero1;
