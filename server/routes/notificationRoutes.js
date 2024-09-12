// server/routes/notificationRoutes.js

const express = require('express')
const router = express.Router()

// Dummy notifications
const notifications = [
  { userId: 1, message: 'New friend request from Alice' },
  { userId: 1, message: 'John commented on your post' },
]

router.get('/notifications', (req, res) => {
  // Replace with actual logic to fetch notifications from the database
  const userId = req.user.id // Assuming user id is available from auth middleware
  const userNotifications = notifications.filter(notif => notif.userId === userId)
  res.json(userNotifications)
})

module.exports = router
