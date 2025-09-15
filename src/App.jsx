import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import  HomePage  from './pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
     <ToastContainer /> 
     </>
  )
}

export default App
