import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';



function Home () {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get('./data/characters.json')
    .then((res) => {
        setCharacters(res.data.characters);
        console.log("success");
    })
    .catch(err => {
        if (err.response) {
            console.log(err.responderEnd);
        }
    })
}, []);

  return (
    <>
      <h1 className='h1main'>Choose a Character to View Their Threads</h1> 
        <div className='main'>
          <div className='profile'>
            {
              characters ? 
              characters.map(character => 
                <Link to={{
                  pathname: '/character-comments/' + character.id,
                }} className='profileTile' key={character.id}>
                  
                  <h2>{character.name}</h2>
                  <p>
                  Age: {character.age}
                  <br/>
                  Height: {character.height}
                  </p>
                  <img src={process.env.PUBLIC_URL +  character.image} height="100px" width="100px"/>
              </Link>)
              : null
            }
          </div>
      </div>
    </>
  )
}

export default Home;