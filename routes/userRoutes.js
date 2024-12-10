const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();



// Register a new user
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Please provide a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ message: 'User registered!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Please provide a valid email'),
        body('password').exists().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if user exists
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist' });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Create and return JWT
            const payload = { userId: user._id };
            const token = jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

module.exports = router; 
