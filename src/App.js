import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const flags = useRef([]);
  useEffect(()=>{
    const getFlags = async() =>{
      try{
        flags.current = await fetch('https://xcountries-backend.azurewebsites.net/all');
        flags.current = await flags.current.json();
        console.log(flags.current);
      }
      catch(e){
        console.log(e);
      }
    }
    getFlags();
  },[]);

  return (
    <div className="App">
      {flags.current.map((flag)=>{
        return(
          <div key={flag.abbr} className='card'>
              <img style={{height:'150px', width:'150px'}} src={flag.flag} alt={flag.abbr}/>
              <p>{flag.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
