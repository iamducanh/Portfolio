import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


import { GiSkills } from "react-icons/gi";



function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
         <strong className="main-name">Duc Anh.</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="#home" onClick={() => {
                smoothScrollTo("home");
                updateExpanded(false);}}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
              as={Link}
              to="#about"
              onClick={() => {
                smoothScrollTo("about");
                updateExpanded(false);
              }}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
              as={Link}
              to="#skills"
              onClick={() => {
                smoothScrollTo("skills");
                updateExpanded(false);
              }}
            >
              <GiSkills style={{ marginBottom: "2px" }} /> Skills
            </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#projects"
                onClick={() => {
                  smoothScrollTo("projects");
                  updateExpanded(false);
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            
             {/*
             <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                target="_blank"
                onClick={() => {
                  smoothScrollTo("resume");
                  updateExpanded(false);
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
             
             */}
            

            <Nav.Item>
            <Nav.Link
              as={Link}
              to="#contact"
              onClick={() => {
                smoothScrollTo("contact");
                updateExpanded(false);
              }}
            >
              <RiContactsFill style={{ marginBottom: "2px" }} /> Contact
            </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
