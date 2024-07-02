  import React, { useMemo, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import Particle from "../Particle";
  import digital from '../../Assets/Projects/digital.png'
  import fastfood from "../../Assets/Projects/fastfood.png"
  import zing from '../../Assets/Projects/zing.png'
  
  import PortfolioItem from './PortfolioItem'
  

  const portfoliolist = [
    {
      id: 1,
      imgPath: digital,
      isBlog: false,
      title: "Digital Ecommerce",
      description: "Our digital e-commerce platform, powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, offers a seamless shopping experience. With robust backend capabilities (MongoDB and Express.js), responsive frontend design (React.js), and efficient server-side operations (Node.js), we ensure a user-friendly interface and swift transaction processing. Explore our website today for a modern, integrated shopping experience.",
      ghLink: "https://github.com/iamducanh/Cuahangdientu",
      demoLink: "https://cuahangdientu.vercel.app/",
      category: "web development"
    },
    {
      id: 2,
      imgPath: zing,
      isBlog: false,
      title: "Zing Mp3",
      description: "Zing MP3 is renowned for its user-friendly interface and robust features, making it effortless for users to explore new music and enjoy their favorite tracks anytime, anywhere. Whether discovering trending hits or curating personalized playlists, Zing MP3 ensures a dynamic and enjoyable music listening experience that caters to diverse musical tastes and preferences.I hope it can give you relaxation after stressful working hours.",
      ghLink: "https://github.com/iamducanh/mp3-player",
      demoLink: "https://mp3-player-htaoz14s-projects.vercel.app/",
      category: "web development"
    },
    {
        id: 3,
        imgPath: fastfood,
        isBlog: false,
        title: "Ecommerce Fast Food",
        description: "Introducing our fast-food e-commerce site, leveraging the ReactJS stack for a seamless user experience. With React.js powering our intuitive interface and Node.js handling backend operations, browsing and ordering are fast and efficient. Explore our diverse menu, place orders effortlessly, and enjoy swift delivery wherever you are. Embrace convenience and flavor with our cutting-edge online platform today!",
        ghLink: "https://github.com/iamducanh/FastNow",
        demoLink: "https://fast-now.vercel.app/home",
        category: "web development"
    },
    
  ];
  const categorylist = [
    { id: 1, category: "all", value: "all" },
    { id: 2, category: "web development", value: "all" },
    { id: 3, category: "machine learning", value: "all" },
    
  ];

  function Projects() {
    const [filter, setFilter] = useState('all');
    
    const filteredPortfolio = useMemo(() => {
      if (filter === 'all') return portfoliolist;

      return portfoliolist.filter((portfolio) => portfolio.category === filter);
    }, [filter])
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <ul className="portfolio-nav">
            {categorylist.map((types) => (
              <li>
                <a onClick={() => setFilter(types.category)}>
                  {types.category}
                </a>
              </li>
            ))}
          </ul>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


              {filteredPortfolio.map((item) => (
                <Col md={4} className="project-card" key={item.id}>
                    <PortfolioItem item={item} />
                </Col>
              ))}
             
            
          </Row>
        </Container>
      </Container>
    );
  }

  export default Projects;
