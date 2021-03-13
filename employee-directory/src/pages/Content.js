import React from 'react';
import "../content.css"

function contentContainer(props) {

    return (
        <div className = "container">
            <div className="contact-info">
                <h1>{props.first} {props.last} </h1>
                <ul>
                    <li>Email: {props.email}</li>
                    <li>Location: {props.location}</li>
                    <li>Phone: {props.phone}</li>
                </ul>
            </div>
            <img src={props.img} className="profile-img"/>
        </div>
    )

}

export default contentContainer;