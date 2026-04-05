import React from "react";
import "./NewSection.css";
import {Link} from "react-router-dom";
import drink from "./pic/3Yo.png";

function NewSection() {
    return (
        <div className="body">
            <h1>New Summer Drinks !!!</h1>
            <div className="photo-sec">
                <img src={drink} alt="3 new drinks" className="drinks" />
            </div>
            <Link to="/menu">
            <button className="see-button">See More</button>
            </Link>
        </div>
    );
}

export default NewSection;
