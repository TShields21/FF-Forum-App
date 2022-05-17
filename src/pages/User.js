import React, { useState, useEffect } from 'react';
import profile from '../apis/profile';
import axios from 'axios';

// useEffect takes two params: (() {
 //   function
// } array)

 function User () {

    // If the user has set a name and an age previously, the name and age are rendered
            const [name, setName] = useState(window.localStorage.getItem('name') ? window.localStorage.getItem('name') : "");
            const [age, setAge] = useState(window.localStorage.getItem('age') ? window.localStorage.getItem('age') : 0);

            // Sends a POST request to the DB
            const submitProfile = () => {
                profile({
                    name: `${name}`,
                    age: `${age}`,
                    url: window.location.origin
                });
            }

            // The equivalent of logging a user out
            const clearProfile = () => {
                window.localStorage.clear();
            }

            // On Every render
            useEffect(() => {
             //   console.log('I re-rendered.');
            });

            // componentDidMount alternative - on first Render/Mount only
            // empty array tells React to only do it on the first render
                useEffect(() => {

                }, []);
            

            // On first Render + whenever dependency changes! -
            // componentDidUpdate alternative
            useEffect(() => {
                console.log(`User name is now: ${name}`);
                // Clean-up functions, used to do functions before the update is done
                return() => {
                    console.log(`Cleanup - the name is ${name}`);
                }
            }, [name]);

            useEffect(() => {
                console.log(`User age is now: ${age}`);
            }, [age]);

            // Handles the unmounting on a component - componentWillUnmount alternative

            useEffect(() => {

                // The clean-up function is helpful so the process doesn't occur several times?
                return () => {

                }
            }, []);

  return (
    <div className='main'>
      <h1 className='h1'>User Profile</h1>
    <form className='form'>
        <div className='formGroup'>
            <label className='label'>Name: </label>
            <input value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='formGroup'>
            <label className='label'>Age: </label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <div className='formGroup'>
            <label className='label'>Profile Picture: </label>
            <input type='file'></input>
        </div>
        <input type="submit" value="Submit" onClick={submitProfile}></input>
        <input type="submit" value="Log Out" onClick={clearProfile}></input>
    </form>
      </div>
    
  )
}

export default User;