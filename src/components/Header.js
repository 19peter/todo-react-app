import React from "react";



function Header({path}){
    return (
        <div className="header" > 
            <img className="header-image" src={path} alt="background"/>
        </div>

    )
};

export default Header;