import React, { Component , useEffect, useState} from "react";
import API from "../utils/API";
import ContentContainer from "../pages/directory"

function Employee() {
    const [name, setName] = useState()

    useEffect(() => {
        getEmployees()
    })

   const getEmployees = () => {
         API.search()
        .then(res => {
            setName(res.data.results[0].name.first)
            
        }
        )
        .catch(err => console.log(err))
   }; 

    
      
    return(
        <ContentContainer name ={name}  />
    )
    
};

export default Employee;