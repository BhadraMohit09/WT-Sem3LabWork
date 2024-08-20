const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    name: String,
    phone: String
});

module.exports = mongoose.model("Faculty", schema);