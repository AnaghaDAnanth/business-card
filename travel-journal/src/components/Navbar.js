import React from "react"
import world from "../images/world-icon.png"

function Navbar(){
    return(
        <nav className="navbar"> 
            <img src={world} className="navbar--logo"/>    
            <h2 className="navbar--h2"> my travel journal </h2>
        </nav>
    )
}

export default Navbar