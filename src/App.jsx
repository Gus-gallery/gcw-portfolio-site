import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'

function App() {

  return (
    <div className="flex">
      <Nav />
      <div className="flex-1 p-4">
        <Hero />
        <Experience />
      </div>
    </div>
  )
}

export default App
