import React, { useState } from "react";
import Course from "./Course";

const Allcour=()=>{

    const[courses,setCourses] = useState([
        {title:"Java Course",description:"This is Java course"},
        {title:"React JS Course",description:"This is React Js course"},
        {title:"Python Course",description:"This is Python course"}
    ])

    return(
        <div>
            <h1 className="text-center">All Courses</h1>
            <p className="text-center">List of courses are as follows:</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course course={item} />
                )):"No Courses Available"
            }
        </div>
    )
}


export default Allcour;



/* <Im im={{title:"Java Course",description:"Java for begineers."}}/>
<Im im={{title:"React Js Course",description:"React Js for begineers."}}/> */