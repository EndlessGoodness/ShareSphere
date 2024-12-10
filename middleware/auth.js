const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization'); // Token from request header
    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded.userId; // Attach userId to the request
        next(); // Proceed to the next middleware/route
    } catch (error) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};
