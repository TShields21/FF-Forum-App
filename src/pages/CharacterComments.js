import React, { useEffect, useState } from 'react'
import axios from 'axios';


function CharacterComments(props) {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get('./data/characters.json')
        // Select the character based on ID params
        .then((res) => {
            var c = res.data.characters.filter(c => {
                return c.id == props.match.params.characterId
            });
            
            setCharacter(
                c[0]
            );
            console.log("success");
            console.log(c[0].name);
        })
        .catch(err => {
            if (err.response) {
                console.log(err.responderEnd);
            }
        })
    }, []);
  return (
    <div>

    </div>
  )
}

export default CharacterComments