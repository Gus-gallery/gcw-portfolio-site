import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Work from './components/Work'
import Socials from './components/Socials'

function App() {

  return (
    <div>
      <Nav />
      <div className="p-4 ml-26 md:ml-30">
        <Socials />
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Work />
      </div>
    </div>
  )
}

export default App
