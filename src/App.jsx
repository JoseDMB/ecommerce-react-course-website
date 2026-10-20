import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    
    <div className='app'>
      <Navbar> </Navbar>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
