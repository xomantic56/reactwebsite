import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
  
    <Navbar title="TextUtils" toggleMode={toggleMode} about="About TextUtils" mode={mode} />
      
        <div className='container'>
         
        <Form heading="TextUtils | Enter Your Text " />
        {/* <About /> */}

        </div>
      
        </>
  );
}

export default App;
