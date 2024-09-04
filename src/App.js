import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [flags,setFlags] = useState([]);
  useEffect(()=>{
    const getFlags = async() =>{
      try{
        let res = await fetch('https://xcountries-backend.azurewebsites.net/all');
        res = await res.json();
        setFlags(res);
      }
      catch(e){
        console.log(`Error fetching data:${e}`);
      }
    }
    getFlags();
  },[]);

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexWrap:'wrap',textAlign:'center'}}>
      {flags.map((flag,index)=>{
        return(
          <div className="card" key={index}>
              <img style={{height:'150px', width:'150px'}} src={flag.flag} alt={flag.abbr}/>
              <p>{flag.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
