import { useEffect } from "react";
import React from "react";

const Contact = () =>{
    useEffect(()=>{
        document.title="Contact us";
      },[])
    return(
        <div>
            <h3>This is Contact Us page.</h3>
        </div>
    );
}

export default Contact;