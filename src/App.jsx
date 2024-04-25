import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accordian from './components/accordion'

function App() {


 
  return (
    <>
      
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Accordian/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
