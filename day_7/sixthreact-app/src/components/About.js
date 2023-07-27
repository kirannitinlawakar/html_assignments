import React from "react";
import { useEffect } from "react";


const About = () =>{
    useEffect(()=>{
        document.title="About us";
      },[])
    return(
        <div>
            <h3>This is About Us page</h3>
        </div>
    );
}

export default About;