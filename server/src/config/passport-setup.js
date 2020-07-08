const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user");

//sends a cookie to the browser
passport.serializeUser((user, done) => {
  console.log("serialized");
  done(null, user.id);
});

// browser sends the cookie back and received the id
passport.deserializeUser((id, done) => {
  console.log("deserialized");

  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user already exists in our db
      User.findOne({
        googleId: profile.id,
      }).then((currentUser) => {
        if (currentUser) {
          //already have user
          console.log("user has already id");
          done(null, currentUser);
        } else {
          // if not, create user in our db
          new User({
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("new user created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
