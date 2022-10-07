// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const expressLayouts = require("express-ejs-layouts");
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
// const UserSchema = new Schema({
//   email: {
//     type: String,
//     required: true
//   },
//   username: {
//     type: String,
//   },
//   name:{
//     type:String,
//   },
//   password: String,
//   googleId: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   avatar: {
//     type: String
//   },
//   companyName: {
//     type: String,
//   }

// });


// UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(findOrCreate);
// const User = mongoose.model('user', UserSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// module.exports = User;