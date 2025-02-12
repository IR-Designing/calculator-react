import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Calculator from './components/calculator';

function App(props) {

  const [mode, setmode] = useState("light");


  const toggle=()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "black"
    }
    else{
      setmode("light")
    document.body.style.backgroundColor = "white"
    }
  }


  return (
    <>
    <Navbar toggle={toggle} mode={mode}/>
    <Calculator toggle={toggle} mode={mode}/>
    </>
  );
}

export default App;
