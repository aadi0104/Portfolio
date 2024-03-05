import React, { useRef, useState } from "react";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { faSun } from "@fortawesome/free-solid-svg-icons";

import { faCode } from "@fortawesome/free-solid-svg-icons";

import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SectionComponent from "./SectionComponent";


function HeaderComponent() {

  const [theme, setTheme] = useState(faSun);


  const [counter, setCounter] = useState(0);

  const incr = () => {
    let count = counter;
    count++;
    setCounter(count);
  }

  const dark = {
    background: "rgb(14, 14, 14)",
    fontcolor: "white",
    themecolor: "yellow",
    logo: "white"
  }

  const [headertheme, setHeaderTheme] = useState(dark);

  const light = {
    background: "rgb(234, 234, 234)",
    fontcolor: "rgb(101, 101, 101)",
    themecolor: "rgb(101, 101, 101)",
    logo: "rgb(101, 101, 101)"
  }

  const head = useRef(null);

  function HandleScroll() {
    head.current.scrollIntoView({ behaviour: 'smooth'});
  };

  return (
    <>
      <header ref={head} style={{ backgroundColor: headertheme.background}}>
        <Navbar collapseOnSelect expand="sm" className="py-3">
          <Container>
            <Navbar.Brand style={{ color: "rgb(0, 162, 255)", fontWeight: "bold", fontSize: "24px" }}><FontAwesomeIcon icon={faCode} /> Aadil- <span style={{ color: headertheme.logo, fontWeight: "normal" }}>Portfolio</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="my-2">
              <Nav className="m-auto">
                <a href="mailto:aadill0104@gmail.com"><button id="getintouch" className="mx-3" style={{ backgroundColor: "rgb(0, 162, 255)", border: "none" }}>Get in Touch</button></a>
                <Nav.Link className="mx-3" style={{ color: headertheme.fontcolor }} href="tel:+91 9891452650"><FontAwesomeIcon icon={faPhone} /> Call Us</Nav.Link>
              </Nav>
              <Nav>
                <button className="theme" onClick={() => { if (counter % 2 === 0) { setTheme(faMoon); incr(); setHeaderTheme(light) } else { setTheme(faSun); incr(); setHeaderTheme(dark) } }}>
                  <FontAwesomeIcon style={{ color: headertheme.themecolor }} icon={theme} />
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <SectionComponent count={counter} />
      <button id="ScrolltoTop" onClick={HandleScroll}>
        <FontAwesomeIcon icon={faCircleUp} />
      </button>
    </>
  );
}

export default HeaderComponent;
