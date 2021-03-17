import React, { useState } from "react";
import GetData from "./GetData";
import "../styles/container.css"


export default function Container() {
    const [search, setSearch] = useState();
    const [data, setData] = useState();



    function searchDirectory() {
        
        console.log(search)
        //map through array of names from <GetData /> somehow
        //
    }
    

    return(
        <div>
            <div className = "search-field">
                <input placeholder="Search Directory" type="text" value={search} onChange = {(e) => setSearch(e.target.value)}></input>
                <button  onClick={searchDirectory()}>Search</button>
            </div>
            <table>
                <tr>
                    <th> Name </th>
                    <th> Location </th>
                    <th> Phone </th>
                    <th> Email </th>
                </tr>
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                <GetData />
                
            </table>
            <footer>
                <div> Made with React </div>
            </footer>

        </div>
        
        
    )
}