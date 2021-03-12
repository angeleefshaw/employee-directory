import React, { Component , useEffect, useState} from "react";
import API from "../utils/API";
import ContentContainer from "../pages/Content"

function Employee() {
    const [first, setFirstName] = useState()
    const [last, setLastName] = useState()
    const [location, setLocation] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    useEffect(() => {
        getEmployees()
    }, [])

   const getEmployees = () => {
         API.search()
        .then(res => {
            setFirstName(res.data.results[0].name.first)
            setLastName(res.data.results[0].name.last)
            console.log(res)
            setLocation(res.data.results[0].location.state)
            setEmail(res.data.results[0].email)
            setPhoneNumber(res.data.results[0].phone)
               
        })
        .catch(err => console.log(err))
   }; 

    
      
    return(
        <ContentContainer first ={first} last={last} location={location} email = {email} phone={phoneNumber}/>
    )
    
};

export default Employee;