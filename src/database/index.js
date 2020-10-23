const mongoose = require('mongoose');
require('dotenv').config()

const db = mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = db