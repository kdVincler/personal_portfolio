// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './css/App.css'

function App() {
  document.title = "Konrad Vincler";

 
  // const [dark, setDark] = useState(false);



  // /*
  //  from: 
  //  https://syntackle.com/blog/setting-background-color-of-body-dynamically-in-react-5tVYr3/#:~:text=Set%20a%20custom%20property%20in,it%20will%20probably%20be%20index.
  // */
  // function changeBodyColour ({dark}) {
  //   if (dark) {
  //     document.documentElement.style.setProperty('--bodyColour', "#12233a");
  //     document.documentElement.style.setProperty('--tileColour', "#23354a");
  //     document.documentElement.style.setProperty('--sectionHeaderColour', "#78682a");
  //     document.documentElement.style.setProperty('--textColour', "#777777");
  //   }
  //   else {
  //     document.documentElement.style.setProperty('--bodyColour', "#094074");
  //     document.documentElement.style.setProperty('--tileColour', "#3C6997");
  //     document.documentElement.style.setProperty('--sectionHeaderColour', "#FFDD4A");
  //     document.documentElement.style.setProperty('--textColour', "#ffffff");
  //   }
  // }

  // useEffect(() => {
  //   changeBodyColour({dark: dark})
  // }, [dark])

  return (
    <>
      {/* dark={dark} setDark={setDark} */}
      <Navbar />
      <AboutMe /> 
      <Education />
      <Experience />
      <Projects />
      <Footer />
      {/* dark={dark} */}
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
