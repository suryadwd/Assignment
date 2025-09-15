import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import  Dashboard  from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
     <ToastContainer /> 
     </>
  )
}

export default App
