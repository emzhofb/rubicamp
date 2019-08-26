const LocalStrategy = require('passport-local').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const axios = require('axios');

const configAuth = require('./auth');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-register',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {
        axios
          .post('http://localhost:4000/api/users/register', {
            email: email.toLowerCase().trim(),
            password: password,
            retypepassword: req.body.retypepassword
          })
          .then(res => {
            if (res.data.data.email) {
              return done(null, res.data);
            }
          })
          .catch(err => {
            if (err.response.data.message === 'User already exist!') {
              return done(
                null,
                false,
                req.flash('register', err.response.data.message)
              );
            }

            return done(
              null,
              false,
              req.flash('register', 'Invalid register.')
            );
          });
      }
    )
  );

  passport.use(
    'local-login',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {
        axios
          .post('http://localhost:4000/api/users/login', {
            email: email.toLowerCase().trim(),
            password: password
          })
          .then(res => {
            if (res.data.data.email) {
              return done(null, res.data);
            }
          })
          .catch(err => {
            console.log(err);
            done(err);
          });
      }
    )
  );

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: configAuth.twitterAuth.consumerKey,
        consumerSecret: configAuth.twitterAuth.consumerSecret,
        callbackURL: configAuth.twitterAuth.callbackURL
      },
      function(req, token, tokenSecret, profile, done) {
        process.nextTick(function() {
          axios
            .get('http://localhost:4000/api/users/auth/twitter', {
              params: {
                request: req,
                token: token,
                tokenSecret: tokenSecret,
                profile: profile
              }
            })
            .then(res => {
              console.log(res);
              return done(res);
            })
            .catch(err => done(err));
        });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL
      },
      function(token, refreshToken, profile, done) {
        axios
          .post('http://localhost:4000/api/users/auth/google', {
            token: token,
            profile: profile
          })
          .then(res => {
            if (res.data.data.email) {
              return done(null, res.data);
            }
          })
          .catch(err => done(err));
      }
    )
  );
};
