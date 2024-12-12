const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from Authorization header (Bearer <token>)
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1]; // Extract token after 'Bearer '
    
    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded.userId; // Attach userId to the request
        next(); // Proceed to the next middleware/route
    } catch (error) {
        console.error('Token verification failed:', error); // Log the error for debugging
        res.status(401).json({ error: 'Token is not valid' });
    }
};
