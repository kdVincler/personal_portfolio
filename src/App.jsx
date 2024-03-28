// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import ParticlesComponent from './components/Particles';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './css/App.css'

function App() {
  document.title = "Konrad Vincler Portfolio";
  
  return (
    <>
      <ParticlesComponent id="particles" />
      <Navbar />
      <AboutMe /> 
      <Education />
      <Experience />
      <Projects />
      <Footer />
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
