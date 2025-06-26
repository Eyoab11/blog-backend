const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Expect 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Attach admin data to request
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized, invalid token' });
  }
};

module.exports = { protect };