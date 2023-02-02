import './App.css'
import Navbar from './components/UI/navbar/Navbar'
import bar from './images/bar.jpg'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      {/* <img className='intro' src={bar} alt="intro" /> */}
      <div className="intro">
        <p className='intro__title'>Find your perfect cocktail</p>
      </div>
    </div>
  )
}

export default App
