const express = require('express')
const cors = require('cors')
const sequelize = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const notificationRoutes = require('./routes/notificationRoutes') // Import the notification routes
const privacyRoutes = require('./routes/privacyRoutes') // Import the privacy settings routes
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Database connection
sequelize.sync().then(() => console.log('Database synced...'))

// Routes
app.use('/auth', authRoutes)
app.use('/api/notifications', notificationRoutes) // Use notification routes under /api/notifications
app.use('/api/privacy-settings', privacyRoutes) // Use privacy settings routes under /api/privacy-settings

app.get('/', (req, res) => {
  res.send('Social Network API is running...')
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
