const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
   console.log(profile)
  }
));

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', 
  { failureRedirect: '/login-failure',
  successRedirect :'/dashboard'
}),
);

router.get('/login-failure',(req,res)=>{
  res.send("Something went wrong...")
})

// Presist user data after successfull authentication
passport.serializeUser((user,done)=>{
  done(null,user.id)
})
// Retrive user data from session
passport.deserializeUser((id,done)=>{
  User.FindById(id,(err,user)=>{
    done(err,user)
  })
})


module.exports = router