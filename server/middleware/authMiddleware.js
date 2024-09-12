// server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')
  
  // Check if there is no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, 'jwtSecret')
    
    // Attach the user ID to the request object
    req.user = decoded.userId

    // Proceed to the next middleware or route handler
    next()
  } catch (err) {
    // If token verification fails, return unauthorized status
    res.status(401).json({ msg: 'Invalid token' })
  }
}

module.exports = auth
