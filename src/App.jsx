import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Production from './components/production'
import Genremovielist from './components/Genremovielist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slider/>
    <Production/>
    <Genremovielist/>
    
    
    </>
  )
}

export default App
