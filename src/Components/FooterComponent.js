import React from "react";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHackerrank, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FooterComponent(props) {

    const dark = {
        background: "rgb(14, 14, 14)",
        fontcolor: "white",
    }

    const light = {
        background: "rgb(234, 234, 234)",
        fontcolor: "rgb(101, 101, 101)",
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
        <footer style={{ backgroundColor: theme.background}}>
            <p style={{color: theme.fontcolor}}>
                &copy;All Rights Reserved<sup>&reg;</sup>
            </p>
            <a href="https://github.com/aadi0104" style={{color:theme.fontcolor}}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/aadil-ahmad-059318208/" style={{color:theme.fontcolor}}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.hackerrank.com/profile/aadill0104" style={{color:theme.fontcolor}}><FontAwesomeIcon icon={faHackerrank} /></a>
        </footer>
    );
}

export default FooterComponent;
