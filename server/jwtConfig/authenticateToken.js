const jwt = require('jsonwebtoken');
const jwtConfig = require('./config');




function authenticateToken(req, res, next) {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  jwt.verify(token, jwtConfig.secret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

module.exports = { authenticateToken };
