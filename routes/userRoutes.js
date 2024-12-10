const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const router = express.Router();

// Register a new user
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Please provide a valid email'),
        body('password')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
            .matches(/\d/).withMessage('Password must contain a number')
            .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // Check if user already exists
            let user1 = await User.findOne({ email });
            if (user1) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const user = new User({ name, email, password: hashedPassword });
            await user.save();

            // Create and return JWT
            const payload = { userId: user._id };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ message: 'User registered!', token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

// Login user
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
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

// Profile route
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password'); // Exclude password
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
