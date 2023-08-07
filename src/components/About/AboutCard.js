import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Kumar </span>
            from <span className="purple"> Kanpur (Uttarpradesh) , India.</span>
            <br /> I Have Recently Graduated  from the esteemed [ Institute of Engineering and Technology, Agra ] with 
                  (B.E/B.Tech) degree in Computer Science And Engineering Branch.
            <br />
            <br />
            I am immensely grateful for the opportunities or experiences and I look forward to making a
             positive impact in the field of computer science as I step into this new phase of my career.

            
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Problem- Solving.
            </li>
            <li className="about-activity">
              <ImPointRight />  Programming.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">RISHABH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
