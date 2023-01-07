import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Skills from "./pages/Skills/Skills"
import About from "./pages/about/About"
import Link1 from './pages/link/Link1'

const App = () => {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about' element={<About />} />
            <Route path='/link' element={<Link1 />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App