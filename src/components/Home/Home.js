import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import Github from "../About/Github";
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";
import myImg from "../../Assets/qt.jpg";
import Projects from "../Projects/Projects";
import codingPerson from '../../Assets/lottie/codingPerson.json'
import DisplayLottie from "../DisplayLottie/DisplayLottie";



function Home() {
  const illustration = {
    animated: true // Set to false to use static SVG
  };
  
  return (
    <>
      {/* Home Section */}
      <section id="home">
       
        <Container fluid className="home-section home-about-section"  id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                {/* Home Header Content */}
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Duc Anh</strong>
                </h1>
                <h6 className="quote">compile(); optimize(); compute(); repeat();</h6>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                {/* Home Image */}
                {illustration.animated ? (
                  <DisplayLottie animationData={codingPerson} />
                ) : (
                      <img
                        alt="Man Working"
                        src={require("../../Assets/developerActivity.svg")}
                      ></img>
                    )}
                </Col>
            </Row>
          
            
          </Container>
        </Container>
        
        
      </section>
    <section id="home">
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME</span> 
            </h1>
            <p className="home-about-body">
             I have completed the web programming certificate from Techmaster, i want to find a job to learn and further develop myself.
              <br />
              <br />My interest lies at the intersection of 
              <i>
               <b className="purple">  Web development. </b> 
              </i>
              
              I enjoy self-developing websites and engaging in daily activities like shopping, listening to music, watching anime, Reading Manga...., simply because I like it.
              <br />
              <br />
             
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />

              Apart from coding, some other activities that I love to do!
              <br />
              <ul>
                <li>🎮 Playing Games</li>
                <li>📺 Watching Anime</li>
                <li>🎧 Listen to<b className="purple"> Music</b> <a      
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer" >
                  </a></li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
    </section>
    <section id="skills">
    <Container fluid className="about-section">  
      <Container>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br />
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </section>

    <section id="projects">
      <Projects/>
    </section>
    <section id="contact">
    <Container fluid className="home-about-section" id="about">
      <Container>
        
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iamducanh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://facebook.com/htaoz14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/iamducanh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nguyencuducanh1404@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
    </>
  );
}

export default Home;
