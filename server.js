const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//Init Middleware

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send("Hello aadith"));

//Define routes
app.use('/api/pusers', require('./routes/api/pusers'));
app.use('/api/employee', require('./routes/api/employee'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server port running on ${port}`));

// const express = require('express');
// const mongoose = require('mongoose');

// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

// const app = express();

// const db = require('./config/keys').mongoURI

// mongoose.connect(db)
//     .then(() => console.log('Mongodb connected'))
//     .catch(err => console.log(err));

// app.get('/', (req, res) => res.send("Hello aadith"));


// app.use('/api/profile',profile);
// app.use('/api/posts',posts);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server port running on ${port}`));