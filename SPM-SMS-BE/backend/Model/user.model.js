const mongoose = require('mongoose');

/**
 * schema for user
 */
const UserSchema = mongoose.Schema({
    username: String,
    userRole:String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);