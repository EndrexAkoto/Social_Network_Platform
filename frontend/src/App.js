import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Notification from './components/Notification'
import axios from 'axios'

function App() {
  const [notifications, setNotifications] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/api/notifications')
      .then(response => {
        try {
          setNotifications(response.data)
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError)
          setError('Error parsing notifications data.')
        }
      })
      .catch(error => {
        console.error('Error fetching notifications:', error)
        setError('Error fetching notifications.')
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <Notification notifications={notifications} error={error} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
