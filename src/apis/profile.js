import React from 'react'
import axios from 'axios'

function profile(userData) {
    
    // Acting as if a POST request was made and the data was updated in DB
    window.localStorage.setItem('name', userData.name);
    window.localStorage.setItem('age', userData.age);

 /* axios.post(userData.url, {
    name: userData.name,
    age: userData.age
    }).then(function(res) {
        window.localStorage.setItem('name', userData.name);
        window.localStorage.setItem('age', userData.age);

        console.log(res);
    }) */
}

export default profile