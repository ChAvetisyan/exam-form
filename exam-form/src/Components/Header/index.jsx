import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

export const Header = () => {

    const [menu] = useState(["Home", "Form", "Profiles"]);
    const [path] = useState(["home", "form", "profiles"]);

    return (
        <div className="container">
            <ul className="menu">
                {menu.map((element, index) => {
                    return <li key={index} className="list">
                        <NavLink to={"/" + path[index]}>{element}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    )
}