import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
