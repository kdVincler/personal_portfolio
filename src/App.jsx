import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './css/App.css'

function App() {
  document.title = "Konrad Vincler";

  return (
    <div className='w-full bg-blue-100 dark:bg-slate-950'>
      <Navbar />
      <AboutMe /> 
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
