import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoute from './components/AppRouter/AppRouter'
import Footer from './components/UI/footer/Footer'
import Navbar from './components/UI/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRoute/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
