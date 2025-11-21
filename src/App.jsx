import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <h1>Welcome to my website</h1>
     <Button/>
     <About/>

     <p>ending</p>
     <Footer />
     
    </>
  )
}

export default App
