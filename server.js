const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const App = express();
/// body-parser middleware
App.use(bodyParser.json());
/// database configuration
const db = require('./config/keys').mongoURI;
/// connect to Mongo
mongoose.connect(db).then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
App.use('/api/items', items);
const port = process.env.PORT || 5000;
App.listen(port, () => console.log(`Server started on port ${port}`));