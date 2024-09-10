const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/about', recipeController.aboutPage);

// const { ensureAuthenticated } = require('../middleware/auth');

// router.get('/submit-recipe', ensureAuthenticated, (req, res) => {
//     res.render('submit-recipe', { title: 'Submit Recipe' });
// });
 
 
// // Show registration form
// router.get('/register', (req, res) => {
//     res.render('register', { title: 'Register' });
//   });
  
//   // Handle registration
//   router.post('/register', async (req, res) => {
//     const { username, email, password, password2 } = req.body;
//     let errors = [];
  
//     if (!username || !email || !password || !password2) {
//       errors.push({ msg: 'Please enter all fields' });
//     }
  
//     if (password != password2) {
//       errors.push({ msg: 'Passwords do not match' });
//     }
  
//     if (password.length < 6) {
//       errors.push({ msg: 'Password must be at least 6 characters' });
//     }
  
//     if (errors.length > 0) {
//       res.render('register', { errors, username, email, password, password2 });
//     } else {
//       try {
//         const user = await User.findOne({ email: email });
//         if (user) {
//           errors.push({ msg: 'Email already exists' });
//           res.render('register', { errors, username, email, password, password2 });
//         } else {
//           const newUser = new User({
//             username,
//             email,
//             password
//           });
  
//           await newUser.save();
//           req.flash('success_msg', 'You are now registered and can log in');
//           res.redirect('/login');
//         }
//       } catch (err) {
//         console.error(err);
//         res.render('register', { errors, username, email, password, password2 });
//       }
//     }
//   });
  
//   // Show login form
//   router.get('/login', (req, res) => {
//     res.render('login', { title: 'Login' });
//   });
  
//   // Handle login
//   router.post('/login', (req, res, next) => {
//     passport.authenticate('local', {
//       successRedirect: '/',
//       failureRedirect: '/login',
//       failureFlash: true
//     })(req, res, next);
//   });
// //   // Example route using Passport for authentication
// //     app.post('/login', passport.authenticate('local', {
// //     successRedirect: '/profile',
// //     failureRedirect: '/login',
// //     failureFlash: true // Optional: Display flash messages for failed login
// //   }));
  
//   // Handle logout
//   router.get('/logout', (req, res) => {
//     req.logout(() => {
//       req.flash('success_msg', 'You are logged out');
//       res.redirect('/login');
//     });
//   });

//   // Example protected route
// app.get('/profile', isLoggedIn, (req, res) => {
//     // Handle authenticated user profile
//     res.render('profile', { user: req.user });
//   });
  
//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/login'); // Redirect to login page if not authenticated
//   }
  
  
module.exports = router;

