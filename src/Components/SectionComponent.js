import React, { useEffect } from "react";
import { useState } from "react";
import AadilImage from "./Aadil-Image.jpg";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlappingComponent from "./OverlappingDesign";
import AboutComponent from "./AboutComponent";
import GetinTouch from "./GetinTouch";
import FooterComponent from "./FooterComponent";

function SectionComponent(props) {

    const dark = {
        backgroundcolor: "rgb(24, 24, 24)",
        color: "white"
    }

    const light = {
        backgroundcolor: "rgb(244, 244, 244)",
        color: "rgb(99, 99, 99)"
    }

    const [theme, setTheme] = useState(dark);

    useEffect(() => {
        if (props.count % 2 === 0) {
            setTheme(dark);
        }
        else {
            setTheme(light);
        }
    }, [props.count, dark, light]);

    return (
        <>
            <section style={{ backgroundColor: theme.backgroundcolor }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="container1">
                                <div className="box">
                                    <div className="imgbox">
                                        <img src={AadilImage} alt="Aadil" />
                                    </div>
                                    <div className="content">
                                        <h2>Aadil Ahmad <br />
                                            <span>Web Developer</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md container2">
                            <div>
                                <p style={{ color: "rgb(0, 162, 255)", fontSize: "26px", fontWeight: "bold", margin: "0px" }}>
                                    <FontAwesomeIcon icon={faLaptopCode} /> I'M AADIL AHMAD.
                                </p>
                                <p style={{ color: theme.color, fontWeight: "bold", fontSize: "22px", margin: "0px" }}>
                                    Web Developer
                                </p>
                                <p id="para" style={{ color: theme.color, margin: "0px" }}>
                                    I'm Aadil, a Web Developer.I can build responsive websites using the MERN technology. I am passionate about building excellent websites that improves the lives of my clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <OverlappingComponent counter={props.count} FrontText1="ABOUT" FrontText2="ME" RearText="RESUME" />
                <AboutComponent counter={props.count} />
                <OverlappingComponent counter={props.count} FrontText1="GET IN" FrontText2=" TOUCH" RearText="CONTACT" />
                <GetinTouch counter={props.count} />
                <FooterComponent counter={props.count} />
            </section>
        </>
    );
}

export default SectionComponent;