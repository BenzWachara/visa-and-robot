import React from "react";
import { Link } from "react-router-dom";

function HeaderRoute(){
    return(
        <div className="class-route">
            <nav className="class-nav">
                <ul className ="class-ul">
                    <Link to={"/visadetail1"}>Visa Detail</Link>
                </ul>
                <ul className ="class-ul">
                    <Link to={"/robotwalk"}>Robot Walk</Link>
                </ul>
                <ul className ="class-ul">
                    <Link to={"/"}>Back</Link>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderRoute;