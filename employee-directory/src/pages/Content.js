import React from 'react';
import "../content.css"

function contentContainer(props) {

    return (
        <div className = "container">
            <img />
            <div>
                <h1> {props.first} {props.last} </h1>
                <ul>
                    <li>{props.email}</li>
                    <li>{props.location}</li>
                    <li>{props.phone}</li>
                </ul>
            </div>
        </div>
    )

}

export default contentContainer;