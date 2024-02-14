 // app.js

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Configure session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport with Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in the database
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Create a new user if not found
        user = await User.create({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Define Google OAuth route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after Google OAuth authentication
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirect user to a protected route or send a success response
    res.redirect('/dashboard');
  }
);

// Protected route example
app.get('/dashboard', (req, res) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    // Render dashboard or send data
    res.send('Welcome to the dashboard!');
  } else {
    // Redirect to login page if user is not authenticated
    res.redirect('/');
  }
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the home page! <a href="/auth/google">Login with Google</a>');
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
