import React, { useState, useEffect } from "react";

function OverlappingComponent(props) {

    const dark = {
        rearcolor: "rgb(51, 51, 51)",
        front1: "rgb(0, 162, 255)",
        front2: "white"
    }

    const light = {
        rearcolor: "rgb(180, 180, 180)",
        front1:"rgb(0, 183, 255)",
        front2: "rgb(101, 101, 101)"
    }

    useEffect(() => {
        if (props.counter % 2 === 0) {
            setTheme(dark);
        }
        else {
            setTheme(light);
        }
    }, [props.count, dark, light]);

    const [theme, setTheme] = useState(dark);


  return (
    <div id="overlapping">
        <div>
            <h2 style={{color: theme.rearcolor}}>
                {props.RearText}
            </h2>
        </div>
        <div>
            <h1 style={{color: theme.front1}}>{props.FrontText1}<span style={{color: theme.front2}}>{props.FrontText2}</span></h1>
        </div>
    </div>
  );
}

export default OverlappingComponent;
