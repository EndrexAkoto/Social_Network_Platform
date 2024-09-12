const express = require('express')
const router = express.Router()
const { sendFriendRequest, acceptFriendRequest, rejectFriendRequest } = require('../controllers/friendController')

// Send a friend request
router.post('/send', sendFriendRequest)

// Accept a friend request
router.post('/accept', acceptFriendRequest)

// Reject a friend request
router.post('/reject', rejectFriendRequest)

module.exports = router
