import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function CharactersList () {
    useEffect(() => {
        axios.get('./data/characters.json')
        .then((res) => {
            console.log("success");
        })
        .catch(err => {
            if (err.response) {
                console.log(err.responderEnd);
            }
        })
    }, []);

}