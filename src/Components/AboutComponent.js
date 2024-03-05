import React from "react";

import { useState, useEffect } from "react";
import resume from "./Resume.pdf"

import cpp from "./CPP.svg"

import jquery from "./Jquery.svg"

import illustrator from "./Illustrator.svg"

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mongodb from "./MongoDB.svg"

import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNode, faPython, faNodeJs } from "@fortawesome/free-brands-svg-icons";

function AboutComponent(props) {

    const dark = {
        color: "white",
        downcv: "white"
    }

    const light = {
        color: "rgb(99, 99, 99)",
        downcv: "rgb(0, 162, 255)"
    }

    const [theme, setTheme] = useState(dark);

    useEffect(() => {
        if (props.counter % 2 === 0) {
            setTheme(dark);
        }
        else {
            setTheme(light);
        }
    }, [props.count, dark, light]);

    return (
        <div id="about" className="container mx-auto">
            <div className="row">
                <div className="col-sm my-2">
                    <h3 style={{ fontWeight: "bold", color: theme.color }}>
                        PERSONAL INFO
                    </h3>
                    <div style={{ marginTop: "45px" }}>
                        <p>Name: <span style={{ color: theme.color, fontWeight: "normal" }}> Aadil Ahmad</span></p>
                        <p>Phone: <span style={{ color: theme.color, fontWeight: "normal" }}> +91-9891452650</span></p>
                        <p>Email: <span style={{ color: theme.color, fontWeight: "normal" }}> aadill0104@gmail.com</span></p>
                        <p>Address: <span style={{ color: theme.color, fontWeight: "normal" }}> Faridabad, Haryana</span></p>
                    </div>
                    <a download="Aadil-CV" href={resume}>
                        <button className="dynamicbutton" style={{ border: `2px solid ${theme.downcv}`, color: theme.downcv }}>
                            <span>Download CV </span><FontAwesomeIcon icon={faArrowDown} />
                        </button>
                    </a>
                </div>
                <div className="col-sm my-2">
                    <h3 style={{ fontWeight: "bold", color: theme.color }}>
                        TECHNICAL SKILLS
                    </h3>
                    <div id="skills" >
                        <div class="grid-container">
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>HTML
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    CSS
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faJs} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    JS
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <img src={jquery} alt="jQuery" />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    jQuery
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faBootstrap} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    Bootstrap
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faReact} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    ReactJS
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faNode} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    NodeJS
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faNodeJs} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    ExpressJS
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <img src={mongodb} alt="MongoDB" />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    MongoDB
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <img src={cpp} alt="C++" />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    C++
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <FontAwesomeIcon icon={faPython} />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    Python
                                </p>
                            </div>
                            <div class="grid-item">
                                <p>
                                    <img src={illustrator} alt="Illustrator" />
                                </p>
                                <p style={{ color: theme.color, fontSize: "14px" }}>
                                    Illustrator
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
