import React from 'react';


export default function TData(props) {
    return(
    <tr className ="info">
        <td>{props.fname} {props.lname}</td>
        <td> {props.location} </td>
        <td> {props.phoneNumber} </td>
        <td> {props.email} </td>
    </tr>
    )
}

