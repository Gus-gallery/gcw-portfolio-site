import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {

  return (
    <div className="flex">
      <Nav />
      <div className="flex-1 p-4">

        <Hero />
      </div>
    </div>
  )
}

export default App
