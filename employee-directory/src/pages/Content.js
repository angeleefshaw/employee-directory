import React from 'react';

function contentContainer(props) {

    return (
        <div>
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