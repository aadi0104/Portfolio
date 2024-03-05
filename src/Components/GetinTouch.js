import React from "react";

import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faEnvelope, faMap, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

function GetinTouch(props) {

    const dark = {
        color: "white",
        downcv: "white",
        border: "none",
        back: "rgb(99, 99, 99)"
    }

    const light = {
        color: "rgb(99, 99, 99)",
        downcv: "rgb(0, 162, 255)",
        border: "1px solid rgb(0, 162, 255)",
        back: "white"
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

    const formRef = useRef(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzUsnzW9XhhSJG-oQZzVunegseqgodumzxGlieJ7P-_oKgpLEw95GbSsMaM86Q_gDsB/exec";

    const handleSubmit = (e) =>{
        e.preventDefault()

        fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
        .then(res => {
            window.alert("SUCCESSFULLY SUBMITTED");
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container getintouchsection">
            <div className="row">
                <div className="col-sm">
                    <h2 style={{ color: theme.color }}>
                        DONT'T BE SHY!
                    </h2>
                    <p style={{ color: theme.color }}>
                        Feel free to contact. I'm always open to discuss new projects or opportunities to be part of other's visions.
                    </p>
                    <div>
                        <div class="sign"><FontAwesomeIcon icon={faMap} /></div>
                        <div class="head">
                            <p>ADDRESS</p>
                            <span style={{ color: theme.color }}>Sanjay Colony Sector-23, Faridabad, Haryana.</span>
                        </div>
                    </div>
                    <div>
                        <div class="sign"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div class="head">
                            <p>MAIL</p>
                            <span style={{ color: theme.color }}>aadill0104@gmail.com</span>
                        </div>
                    </div>
                    <div>
                        <div class="sign"><FontAwesomeIcon icon={faSquarePhone} /></div>
                        <div class="head">
                            <p>CALL</p>
                            <span style={{ color: theme.color }}>+91-9891452650</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <form name="google-sheet" ref={formRef} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md">
                                <input style={{ border: theme.border, backgroundColor: theme.back }} type="text" placeholder="Your Name" name="Name" className="form-control" required />
                            </div>
                            <div className="col-md">
                                <input style={{ border: theme.border, backgroundColor: theme.back }} type="email" placeholder="Your Email" className="form-control" name="Email" required />
                            </div>
                        </div>
                        <div>
                            <textarea style={{ resize: "none", border: theme.border, backgroundColor: theme.back }} cols="20" rows="6" placeholder="Your Message" name="Message" class="form-control"></textarea>
                        </div>
                        <button type="submit" className="dynamicbutton" style={{ border: `2px solid ${theme.downcv}`, color: theme.downcv }}>
                            <span>SEND MESSAGE </span><FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GetinTouch;