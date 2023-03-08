import React from "react"
import "./index.css"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <>
            <div className="main_container">
                <nav>
                    <li>Home</li>
                    <li>contact</li>
                   <li>About-us</li>
                </nav>
            </div>
        </>
    )
}

export default Header