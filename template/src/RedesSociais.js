import React from "react";
import github from "./img/github.png";
import youtube from "./img/youtube.png"

export default function RedesSociais() {
    return(
        <div className="redesSociais">
            <a href="https://github.com/Tibas-CE"><img src={github} alt="GitHub"/></a>
            
            <a href="https://www.youtube.com/channel/UCYr92Rb779vt6BWHfzYpB5Q"><img src={youtube} alt="Youtube"/></a>
        </div>
    )
}