import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <nav className="bg-gray-800 p-4 text-white flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </nav> */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold underline text-blue-600">Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
