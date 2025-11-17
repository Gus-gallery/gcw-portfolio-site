import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <Nav />
      <div className="p-4 ml-22 md:ml-26">
        <Hero />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default App
