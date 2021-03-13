import React, { Component , useEffect, useState} from "react";
import API from "../utils/API";
import ContentContainer from "../pages/Content"
import "../content.css"

function Employee() {
    const [first, setFirstName] = useState()
    const [last, setLastName] = useState()
    const [location, setLocation] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [img, setImg] = useState()

    useEffect(() => {
        getEmployees()
    }, [])

   const getEmployees = () => {
         API.search()
        .then(res => {
            setFirstName(res.data.results[0].name.first)
            setLastName(res.data.results[0].name.last)
            setLocation(res.data.results[0].location.state)
            setEmail(res.data.results[0].email)
            setPhoneNumber(res.data.results[0].phone)
            setImg(res.data.results[0].picture.large)
            console.log(res)
               
        })
        .catch(err => console.log(err))
   }; 

    
      
    return(
        <div>
            <div className="content">
            <ContentContainer img={img} first ={first} last={last} location={location} email = {email} phone={phoneNumber}/>
            </div>
        </div>
    )
    
};

export default Employee;