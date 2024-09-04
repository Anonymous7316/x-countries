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
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexWrap:'wrap',textAlign:'center'}}>
      {flags.current.map((flag)=>{
        return(
          <div className="card" key={flag.abbr}>
              <img style={{height:'150px', width:'150px'}} src={flag.flag} alt={flag.abbr}/>
              <p>{flag.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
