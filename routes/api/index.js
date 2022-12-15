
// This index file sets up various routes 


const router = require('express').Router();

const userRoutes = require('./user-routes');

const thinkingRoutes = require('./thought-routes');

router.use('/users, userRoutes');

router.use('/thoughts', thinkingRoutes);


module.exports = router;
