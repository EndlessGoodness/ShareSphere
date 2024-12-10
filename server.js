const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); //handle JSON

app.use('/api/users', userRoutes);

app.get('/',(req, res) => {
    res.send('Hello, Sharesphere!');
});

//START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`This server runs on http://localhost:${PORT}`);
});

//MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/ShareSphere',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

    app.use('/api/users', userRoutes);