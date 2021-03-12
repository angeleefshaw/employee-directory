import React, { Component , useEffect} from "react";
import API from "../utils/API";

function Employee() {

    function getEmployees() {
        API.search()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    getEmployees();
      
    return(
        <h1>hello</h1>
    )
}

export default Employee;