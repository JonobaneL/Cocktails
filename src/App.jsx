import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CocktailService from './API/CocktailService'
import './App.css'
import AppRoute from './components/AppRouter/AppRouter'
import FindCocktail from './components/FindCocktail/FindCocktail'
import Navbar from './components/UI/navbar/Navbar'
import { useFetching } from './hooks/useFetching'

function App() {
  const [cocktail,setCocktail] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRoute/>
      </BrowserRouter>
    </div>
  )
}

export default App
