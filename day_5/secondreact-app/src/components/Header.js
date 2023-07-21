import React from "react"

function Header({name,title}){
    return(
        <div style={{background: "lightgrey"}}>
            <h1>{name} - {title}</h1>
            <p>This is header component for learning purpose</p>
        </div>
    )
}

export default Header;