// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React, { useState, useEffect } from 'react';

import ParticlesComponent from './components/Particles';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './css/App.css'

function App() {
  document.title = "Konrad Vincler";
  const [showing, setShowing] = useState(true);

 
  const [dark, setDark] = useState(false);



  /*
   from: 
   https://syntackle.com/blog/setting-background-color-of-body-dynamically-in-react-5tVYr3/#:~:text=Set%20a%20custom%20property%20in,it%20will%20probably%20be%20index.
  */
  function changeBodyColour ({colour}) {
    document.documentElement.style.setProperty('--bodyColour', colour);
  }

  useEffect(() => {
    if (dark) {
      changeBodyColour({colour: "#000000"})
    }
    else {
      changeBodyColour({colour: "#f21111"})
    }
  }, [dark])

  return (
    <>
      <ParticlesComponent id="particles" dark={dark}/>
      <Navbar showing={showing} dark={dark} setDark={setDark}/>
      <AboutMe showing={showing}/> 
      <Education showing={showing}/>
      <Experience showing={showing}/>
      <Projects showing={showing}/>
      <Footer showing={showing} dark={dark}/>
      <div className='container'>
        <div 
          className='btn' 
          onClick={() => {setShowing(!showing)}}
        >
          <a id="placeholder">
            {
              showing ? ("Click me for fun!") : ("Back")
            }
            
          </a>
        </div>
      </div>
    </>
    /*
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p> 
      */
    
  )
}

export default App
