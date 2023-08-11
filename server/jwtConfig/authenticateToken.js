const jwt = require('jsonwebtoken')
const jwtConfig = require('./config')
console.log(jwtConfig);
function authenticateToken(req, res, next) {
  const token = req.header('Authorization')
console.log(token,req.header);
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  jwt.verify(token, jwtConfig.secretKey, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    console.log(decodedToken);
    const userType = decodedToken.userType
    const userId = decodedToken.userId
    const barber=decodedToken.barberId
        if (!userType && !userId) {
      return res.status(403).json({ error: 'User information not found in token' })
    }
    
    req.userType = userType
    req.userId = userId
    
    if (userType !== 'admin' && userType !== 'barber' && userType !== 'client') {
      return res.status(403).json({ error: 'Invalid user type in token' })
    }
    
    next()
  })
}

module.exports = { authenticateToken }
