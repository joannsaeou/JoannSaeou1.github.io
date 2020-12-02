const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserRoleSchema = require('../schemas/user-role');


const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    email: { type: String },
    isDisabled: { type: Boolean, default: false },
    dateCreated: { type: String, default: new Date() },
    dateModified: { type: Date }
}, {
    collection: 'users', // implicitly specifying the collection we're connecting to
    versionKey: false
}); // Don't create a version key on new records

module.exports = mongoose.model('User', userSchema);
