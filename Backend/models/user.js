const mongoose = require('mongoose');

const {Schema, model} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  idUer: String,
  firstName: String,
  lastName: String  
},{
  timestamps: true
});

User.plugin(passportLocalMongoose);

module.exports = model('User', User);
