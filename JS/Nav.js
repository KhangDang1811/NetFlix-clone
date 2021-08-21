import React, { useEffect, useState } from "react"
import "./Nav.css"

function Nav( ) {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt="netflix_logo"/>    
            <img className="nav_avatar" src="https://images.unsplash.com/photo-1561409106-fece1abb71cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="netflix_logo" />
        </div>

    )
}

export default Nav