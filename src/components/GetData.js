import React, {useState, useEffect} from "react";
import API from "../utils/API";
import "../styles/table.css";
import TData from "./table"

export default function Data() {
    const employeeData = []

    const [first, setFirstName] = useState()
    const [last, setLastName] = useState()
    const [location, setLocation] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [img, setImg] = useState()


    useEffect(() => {
        getEmployees();
    }, [])

    function getEmployees () {  
        API.search()
        .then(results => {
            
            const data = {
                "name" : results.data.results[0].name.first,
                "location": results.data.results[0].location.state,
                "email" : results.data.results[0].email,
                "phone" : results.data.results[0].phone
            }
            setFirstName(results.data.results[0].name.first)
            setLastName(results.data.results[0].name.last)
            setLocation(results.data.results[0].location.state)
            setEmail(results.data.results[0].email)
            setPhoneNumber(results.data.results[0].phone)
            setImg(results.data.results[0].picture.large)

            employeeData.push(data)

        })
        console.log(employeeData)
        return(employeeData)
    }

    return <TData fname={first} lname={last} location={location} phoneNumber={phoneNumber} email={email}/>
    
}