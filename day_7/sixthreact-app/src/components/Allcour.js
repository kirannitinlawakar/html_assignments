import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from 'axios';

const Allcour=()=>{

    useEffect(()=>{ 
        document.title="All Courses";
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                 //success
                //  console.log(response);
                 console.log(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
            }
        )
    };

    //loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const[courses,setCourses] = useState([
        {title:"Java Course",description:"This is Java course"},
        {title:"React JS Course",description:"This is React Js course"},
        {title:"Python Course",description:"This is Python course"}
    ]);

    return(
        <div>
            <h3 className="text-center">All Courses</h3>
            <p className="text-center">List of courses are as follows:</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item} />
                )):"No Courses Available"
            }
        </div>
    )
}


export default Allcour;



/* <Im im={{title:"Java Course",description:"Java for begineers."}}/>
<Im im={{title:"React Js Course",description:"React Js for begineers."}}/> */