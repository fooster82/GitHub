import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


export function Repos() {
    const [ repos, setRepos ] = useState({ name: "", html_url: "" });

    const num = 3;
    useEffect(() => {
        const getRepos = async () => {
            try {
               const { data } = await axios.get(`${API_URL}`); 
               setRepos([ data[0].name, data[0].html_url ]);               
            } catch (err) {
                console.log(err);
            }
        }
        getRepos()
    }, [num])

    console.log(repos)
    return (
        <div>
            data.name and data.html_url
        </div>
    )
}
