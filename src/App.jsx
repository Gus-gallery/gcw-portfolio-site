import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Work from './components/Work'
import Socials from './components/Socials'
import Gustav from './components/Gustav'
import Light from './components/Light'

function App() {

  return (
    <div>
      <Nav />
      <div className="p-4 ml-22 md:ml-30">
        <Light />
        <Socials />
        <Gustav />
        <Projects />
        <Experience />
        <Education />
        <Work />
      </div>
    </div>
  )
}

export default App
